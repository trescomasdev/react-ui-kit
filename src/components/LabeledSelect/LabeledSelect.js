import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import LabeledInput from '../LabeledInput/LabeledInput';

import './LabeledSelect.css';

export default class LabeledSelect extends Component {
  constructor(props){
    super(props)

    let value = this.setValue(this.props._value)

    this.state = {
      data: {
        value: value,
        key: undefined
      },
      focused: false
    }

    this.onChange = this.onChange.bind(this);
    this.clear = this.clear.bind(this);
  }

  setValue(value){

    if (!value)
      return undefined

    if (this.props.valueRenderer)
      return this.props.valueRenderer(value)

    return value.value;

  }

  onChange(data){
    let value = this.setValue(data)

    this.setState({data: {value: value}})
    this.props._onChange(data, this)
  }

  clear(){
    this.setState({
      data: {
        value: undefined,
        key: undefined
      }
    })
  }

  render() {
    let options = {filtered: [], options: []}
    if (this.state.data.value){
      let string = this.state.data.value.toString();

      this.props.options.forEach((data) => {
        let value = this.setValue(data)

        if (value && value.toLowerCase().search(string.toLowerCase()) !== -1){
          options.filtered.push(data)
        } else {
          options.options.push(data)
        }
      })
    } else {
      options.options = this.props.options
    }

    if (options.filtered.length > 0){
      options.filtered = options.filtered.map((data, key) =>
        <li key={key} onClick={() => this.onChange(data)}>{this.setValue(data)}</li>
      )
      options.filtered.push(<li key="separator" className="separator"></li>)
    }

    options.options = options.options.length > 0 ? options.options.map((data, key) =>
      <li key={key} onClick={() => this.onChange(data)}>{this.setValue(data)}</li>
    ) : null

    return(
      <div className="labeled-select">
        <LabeledInput
          placeholder={this.props.placeholder}
          focused={this.state.focused}
          _value={this.state.data.value}
          _onChange={(e) => this.setState({data: {value: e.target.value}})}
          _onFocus={() => this.setState({focused: true})}
          error={this.props.error}
          validate={this.props.validate}
          />
        <ul>
          {options.filtered}
          {options.options}
        </ul>
        <FontAwesome className="clear" name="times" onClick={this.clear}/>
      </div>
    );
  }
}
