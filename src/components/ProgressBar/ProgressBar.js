import React, { Component } from 'react';

import './ProgressBar.css';

export default class ProgressBar extends Component {

  render() {

    let width = this.props.progress > 100 ? 100 : this.props.progress

    if (isNaN(width)){
      console.log("width", width)
      width = 0
    }


    return(
      <div className="progress-bar-container">
        <div className="progress-bg">
          <div className="progress-bar" style={{width: width + "%"}}></div>
        </div>
      </div>
    );
  }
}
