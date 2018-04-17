import React, { Component } from 'react';

import './LabeledInput.css'

export default class LabeledInput extends Component {

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  componentDidMount(){
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount(){
    document.addEventListener("click", this.handleClick)
  }

  handleClick(e){

    if (!this.wrapper || this.wrapper.contains(e.target))
      return false;

    return this.onBlur();
  }

  onFocus(){
    this.wrapper.classList.add("focused")
    if (this.props._onFocus)
      this.props._onFocus()
  }

  onBlur(){
    this.wrapper.classList.remove("focused")
    if (this.props._onBlur)
      this.props._onBlur()
  }

  setClass(classes){

    if (this.props._value !== "" && this.props._value !== undefined)
      classes.push("populated");

    if (this.props.focused)
      classes.push("focused");

    if (this.props.validate){
      if ((!this.props.error || !this.props.error.length > 0) && this.props._value !== "" &&  this.props._value !== undefined)
        classes.push("valid");

      if (this.props.error && this.props.error.length > 0)
        classes.push("invalid");
    }

    return classes.join(" ");
  }

  render() {
    return(
      <div id={this.props.id} className={this.setClass(["labeled-input"])} ref={(ref) => this.wrapper = ref}>
        <label>
          <input
            name={this.props.name}
            type={this.props.type || "text"}
            value={this.props._value || ""}
            placeholder={this.props.placeholder}
            disabled={this.props.disabled}
            onFocus={this.onFocus}
            onChange={this.props._onChange}
            />
          <span>{this.props.placeholder}</span>
        </label>
        {this.props.validate && this.props.error && this.props.error.length > 0
          ?
            <span className="error">{this.props.error.join(this.props.errorDivider ? this.props.errorDivider : " ")}</span>
          :
            null
        }
      </div>
    );

  }
}
