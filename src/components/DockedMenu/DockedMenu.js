import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './DockedMenu.css';

export default class DockedMenu extends Component {
  constructor(props){
    super(props)

    this.state = {
      toggled: false
    }
  }

  render() {

    return(
      <div id="docked-menu" className={this.state.toggled ? "toggled" : ""}>
        {this.props.children}
        <div className="toggle" onClick={() => this.setState({toggled: !this.state.toggled})}><FontAwesome name={this.state.toggled ? "chevron-right" : "chevron-left"} /></div>
      </div>
    );
  }
}
