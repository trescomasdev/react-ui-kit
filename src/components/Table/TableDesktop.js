import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import Button from '../Button/Button';
import Input from '../Input/Input';

import './TableDesktop.css';

export default class TableDesktop extends Component {
  constructor(props){
    super(props)

    let data = this.sortArray(this.props.data, this.props.defaultSort)

    this.state = {
      data: data,
      originalData: data,
      filter: "",
      summaries: undefined,
      savedFilters: []
    }

    this.createHeader()

    this.createHeader = this.createHeader.bind(this)
    this.filterArray = this.filterArray.bind(this)
    this.saveFilter = this.saveFilter.bind(this)
    this.resetData = this.resetData.bind(this)
    this.sortArray = this.sortArray.bind(this)
    this.calculateSummaries = this.calculateSummaries.bind(this)
    this.onChangeInput = this.onChangeInput.bind(this)

  }

  componentWillReceiveProps(props){
    let data = this.filterArray([this.state.filter, ...this.state.savedFilters], props.data, this.props.filters)
    data = this.sortArray(data, this.props.defaultSort)
    this.setState({data: data, originalData: props.data})
  }

  createHeader(){
    this.header = this.props.dataKeys.map((data, key) =>{
      let cellClass = ["data-table-desktop-header-cell", data.id]
      let sortButtons = undefined

      if (this.props.sortables && this.props.sortables[data.id]){
        cellClass.push("sortable")
        sortButtons =
          <div className="order-actions">
            <span key="arrow-asc" className="order-arrow asc" onClick={() => this.setState({data: this.sortArray(this.state.data, this.props.sortables[data.id], "asc")})}></span>
            <span key="arrow-desc" className="order-arrow desc" onClick={() => this.setState({data: this.sortArray(this.state.data, this.props.sortables[data.id], "desc")})}></span>
          </div>
      }

      return(
        <td key={data.id} className={this.setClass(cellClass)}>
          {data.label}
          {sortButtons}
        </td>
      );
    })

    if (this.props.actions && this.props.actions.length > 0)
      this.header.push(
        <td key="actions" className={this.setClass(["data-table-desktop-header-cell", "actions"])}>

        </td>
      )
  }

  onChangeInput(e){
    let strings = [...this.state.savedFilters]

    if (e.target.value !== "")
      strings.push(e.target.value)

    let data = this.filterArray(strings, this.state.originalData, this.props.filters)

    this.setState({filter: e.target.value, data: data})
  }

  saveFilter(){
    let savedFilters = this.state.savedFilters
    if (this.state.filter !== "")
      savedFilters.push(this.state.filter)

    this.setState({savedFilters: savedFilters, filter: ""})
  }

  resetData(){
    this.setState({savedFilters: [], filter: "", data: this.state.originalData})
  }

  filterMultiple(data, strings, filters){
    let hasMatch = strings.every((string) =>
      filters.some((filterObj) =>
        filterObj.filterData(data) && filterObj.filterData(data).toLowerCase().search(string.toLowerCase()) !== -1
      )
    )

    return hasMatch
  }

  filterArray(strings, array, filters){

    let data = array.filter((data) => this.filterMultiple(data, strings, filters))

    return data;

  }

  sortArray(array, sortable, order){
    let defaultOrder = sortable ? sortable.defaultOrder : undefined
    let orderDirection =  order || defaultOrder

    if (orderDirection === undefined)
      return array

    let data = array.sort((a, b) => {

      if (sortable.type === "number")
        return sortable.sortData(a) - sortable.sortData(b);

      if (sortable.type === "text")
        return sortable.sortData(a).localeCompare(sortable.sortData(b), undefined, {sensitivity: "base"})

      if (sortable.type === "date")
        return new Date(sortable.sortData(a)) - new Date(sortable.sortData(b))

      return false;
    })

    if (orderDirection === "desc")
      data = data.reverse()

    return data;
  }

  calculateSummaries(){
    let summaries = this.props.summaries && this.props.summaries.length > 0 && this.state.data.length > 0 ? this.props.summaries.map((data, key) =>
      <div key={key} className="summary-item">
        <span>{data.label}</span>
        <span>{data.callback(this.state.data).toFixed(data.round || 0)}</span>
      </div>
    ) : null

    return summaries;
  }

  setClass(classes){
    if (Array.isArray(classes))
      return classes.join(" ")

    return classes
  }

  render() {
    let summaries = this.calculateSummaries()

    let savedFilters = this.state.savedFilters.length > 0 ? this.state.savedFilters.map((data, key) =>
      <div key={key}>
        {data}
      </div>
    ) : null

    let rows = this.state.data.length > 0 ? this.state.data.map((row, key) => {
      let cells = this.props.dataKeys.map((cell, key) =>
        <td key={key} className={this.setClass(["data-table-desktop-cell", cell.id])}>
          {cell.value(row)}
        </td>
      )

      if (this.props.actions && this.props.actions.length > 0){
        let actions = this.props.actions.map((data, key) =>
          <div key={key} className="action" onClick={() => data.action(row)}>
            <FontAwesome name={data.icon}/>
          </div>
        )

        cells.push(
          <td key="actions" className={this.setClass(["data-table-desktop-cell", "actions"])}>
            {actions}
          </td>
        )
      }

      let rowClass = ["data-table-desktop-row"]

      if (this.props.rowClass)
        rowClass.push(this.props.rowClass(row))

      return(
        <tr key={key} className={this.setClass(rowClass)} onClick={() => this.props.onClickRow ? this.props.onClickRow(row._id) : undefined}>{cells}</tr>
      )
    }) :
      <tr key="no-data" className={this.setClass(["data-table-desktop-row", "no-data"])}>
        <td className={this.setClass(["data-table-desktop-cell"])} colSpan={this.props.actions ? this.props.dataKeys.length + 1 : this.props.dataKeys.length}>No data to show</td>
      </tr>

    return(
      <div id="data-table">
        <div className="data-table-desktop-header-bar">
          <div className="data-table-desktop-actions">
            <Input _value={this.state.filter} placeholder="filter" _onChange={this.onChangeInput} />
            <Button _onClick={this.saveFilter}>save filter</Button>
            <Button _onClick={this.resetData}>clear filters</Button>
          </div>
          <div className="data-table-desktop-saved-filters">
            {savedFilters}
          </div>
          <div className="data-table-desktop-summaries">
            {summaries}
          </div>
        </div>
        <table className={this.setClass(["data-table-desktop", this.props.counter ? "counter" : null])}>
          <thead className="data-table-desktop-header">
            <tr className={this.setClass(["data-table-desktop-header-row"])}>
              {this.header}
            </tr>
          </thead>
          <tbody className="data-table-desktop-content">
            {rows}
          </tbody>
          <tfoot className="data-table-desktop-footer">
          </tfoot>
        </table>
      </div>
    );

  }
}
