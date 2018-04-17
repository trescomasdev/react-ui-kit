import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import LabeledInput from '../LabeledInput/LabeledInput';

import './LabeledSelect.css';

export default class LabeledSelect extends Component {
  constructor(props){
    super(props)

    let value = this.props._value ? this.props._value.value : undefined

    if (this.props.valueRenderer && data)
      value = this.props.valueRenderer(this.props._value)

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

  onChange(data){
    let value = data.value
    if (this.props.valueRenderer && data)
      value = this.props.valueRenderer(data)

    this.setState({data: {value: value}})
    this.props._onChange(data)
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
    let options = this.props.options

    if (this.state.data.value){
      let value = this.state.data.value.toString();
      options = options.filter((data) => {
        let val = this.props.valueRenderer && data ? this.props.valueRenderer(data) : data.value
        return val.toLowerCase().search(value.toLowerCase()) !== -1
      })
    }

    options = options.length > 0 ? options.map((data, key) =>
      <li key={key} onClick={() => this.onChange(data)}>{this.props.valueRenderer && data ? this.props.valueRenderer(data) : data.value}</li>
    ) : <li key="not-found">Not found</li>

    return(
      <div className="labeled-select">
        <LabeledInput
          placeholder={this.props.placeholder}
          focused={this.state.focused}
          _value={this.state.data.value}
          _onChange={(e) => this.setState({data: {value: e.target.value}})}
          _onFocus={() => this.setState({focused: true})}
          />
        <ul>
          {options}
        </ul>
        <FontAwesome className="clear" name="times" onClick={this.clear}/>
      </div>
    );
  }
}
