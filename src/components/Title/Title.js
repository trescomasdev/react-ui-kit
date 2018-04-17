import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './Title.css';

export default class Title extends Component {

  setClass(classes){
    if (this.props.underline)
      classes.push("underline")

    if (this.props.noMargin)
      classes.push("no-margin")

    return classes.join(" ");
  }

  render() {
    const Tag = this.props.tag || "h1";
    const icon = this.props.icon ? <FontAwesome name={this.props.icon} /> : null

    return(
      <div id={this.props.id} className={this.setClass(["title"])}>
        <Tag>
          {icon}
          {this.props.children}
        </Tag>
      </div>
    );
     }
}
