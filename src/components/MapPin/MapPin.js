import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './MapPin.css';

export default class MapPin extends Component {

  render() {

    return (
      <div id={this.props.id} className={this.props.className ? "map-pin " + this.props.className : "map-pin"} onClick={this.props._onClick}>
        <FontAwesome name={this.props.icon ? this.props.icon : "map-pin"} />
          {this.props.tooltip
            ?
              <div className="tooltip">
                {this.props.tooltip }
              </div>
            :
              null
          }
      </div>
    );
  }
}
