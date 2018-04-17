import React, { Component } from 'react';

import './Input.css';

export default class Input extends Component {

  setClass(){
    let classes = ["input", this.props.type ? this.props.type : "default"]

    if (this.props.size)
      classes.push(this.props.size)

    if (this.props.margin)
      classes.push(this.props.margin)

    return classes.join(" ")
  }

  render() {

    return(
      <input
        id={this.props.id}
        className={this.setClass()}
        placeholder={this.props.placeholder}
        type={this.props.type}
        name={this.props.name}
        value={this.props._value}
        onChange={this.props._onChange}
      />
    );
  }
}
