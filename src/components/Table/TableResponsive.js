import React, { Component } from 'react';

import './TableResponsive.css';

export default class TableResponsive extends Component {
  constructor(props){
    super(props)

    this.header = this.props.dataKeys.filter((data) => data.responsiveHeader === true).map((data, key) => 
      <div key={data.id} className={this.setClass(["data-table-cell", "data-table-header-cell", data.id])}>
        {data.label}
      </div>
    )

  }

  setClass(classes){
    if (Array.isArray(classes))
      return classes.join(" ")

    return classes
  }

  render() {
    console.log("data", this.props)

    let rows = []

    this.props.data.forEach((row, key) => {
      let cells = []

      this.props.dataKeys.filter((data) => data.responsiveHeader === true).forEach((cell, key) => {
        cells.push(
          <div key={key} className={this.setClass(["data-table-cell", cell.id])}>
            {cell.value(row)}
          </div>
        )
      })

      rows.push(<div key={key} className={this.setClass(["data-table-row"])}>{cells}</div>)
    })

    return(
      <div className="data-table-responsive">
        <div className="data-table-header">
          <div className={this.setClass(["data-table-row", "data-table-header-row"])}>
            {this.header}
          </div>
        </div>
        <div className="data-table-content">
          {rows}
        </div>
        <div className="data-table-footer">
        </div>
      </div>
    );

  }
}
