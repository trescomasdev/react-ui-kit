import React, { Component } from 'react';

import './Button.css';

export default class Button extends Component {
  constructor(props){
    super(props);

    this.setClass = this.setClass.bind(this);
  }

  setClass(classes = []){

    if (this.props.size)
      classes.push(this.props.size)

    if (this.props.margin)
      classes.push(this.props.margin)

    return classes.join(" ")
  }

  render() {

    return(
      <button id={this.props.id} className={this.setClass(["button", this.props.type ? this.props.type : "default"])} onClick={this.props._onClick}>
        {this.props.children}
      </button>
    );
  }
}
