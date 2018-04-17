import React, { Component } from 'react';

import './LabeledTextarea.css'

export default class LabeledTextarea extends Component {

  constructor(props){
    super(props);

    this.setClass = this.setClass.bind(this);
  }

  setClass(classes = []){

    if (this.props._value !== "" && this.props._value !== undefined)
      classes.push("populated");

    if ((!this.props.error || this.props.error.length === 0) && this.props._value !== "" &&  this.props._value !== undefined)
      classes.push("valid");

    if (this.props.error && this.props.error.length > 0)
      classes.push("invalid");

    return classes.join(" ");
  }

  render() {
    return(
      <div className={this.setClass(["labeled-textarea"])}>
        <label>
          <textarea
            className={this.props.className}
            value={this.props._value || ""}
            name={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.props._onChange}
            disabled={this.props.disabled}
            />
          <span>{this.props.placeholder}</span>
        </label>
        {this.props.error && this.props.error.length > 0
          ?
            <span className="error">{this.props.error.join(" ")}</span>
          :
            null
        }
      </div>
    );
  }
}
