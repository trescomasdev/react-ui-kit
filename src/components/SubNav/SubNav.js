import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './SubNav.css';

export default class SubNav extends Component {

  render() {
    let info = this.props.info ? this.props.info.map((data, key) => {
      let style = null

      if (data.color)
        style = {color: data.color}

      return(
        <div key={key}>
          {data.label ? <span className="label">{data.label}</span> : null}
          <div className="info">
            {data.icon ? <span className="icon" ><FontAwesome name={data.icon} style={style}/></span> : null}
            {data.value}
          </div>
        </div>
      );
    }) : []

    return(
      <div id="sub-nav">
        <div className="sub-nav-info">
          {info}
        </div>
        <div className="sub-nav-actions">
          {this.props.actions}
        </div>
      </div>
    );
  }

}
