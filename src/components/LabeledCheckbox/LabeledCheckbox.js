import React, { Component } from 'react';

import './LabeledCheckbox.css'

export default class LabeledCheckbox extends Component {

  render() {
    return(
      <div className={this.props.className ? "labeled-checkbox " + this.props.className : "labeled-checkbox"}>
        <input id={this.props.id} name={this.props.name} className="toggle-status" type="checkbox" checked={this.props.checked ? "checked" : ""} value={this.props.checked ? 1 : 0} onChange={this.props._onChange} />
        <label htmlFor={this.props.id} className={this.props.rounded ? "toggle-switch  toggle-rounded" : "toggle-switch"}></label>
        <span className="toggle-string">{this.props.label}</span>
      </div>
    );
  }

}
