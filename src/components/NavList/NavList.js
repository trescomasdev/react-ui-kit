import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './NavList.css';

export class NavList extends Component {

  render() {

    return(
      <ul className="nav">
        {this.props.children}
      </ul>
    );
  }
}

export class NavListItem extends Component {

  render() {
    let icon = this.props.icon ? <FontAwesome name={this.props.icon} /> : null

    return(
      <li className="nav-item icon" onClick={this.props._onClick}>
        {icon}
        <a>
          {this.props.children}
        </a>
      </li>
    );
  }
}
