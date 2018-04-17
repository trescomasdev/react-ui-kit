import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import html2canvas from 'html2canvas';

import './AdminPanel.css';

export class AdminPanelSection extends Component {

  render() {

    return(
      <div id={this.props.id} className="admin-panel">
        <div className="panel-section">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export class AdminPanelPanel extends Component {

  constructor(props){
    super(props);

    this.state = {
      collapsed: this.props.collapsed || false
    }

    this.setClass = this.setClass.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
    this.capturePanel = this.capturePanel.bind(this);
  }

  setClass(classes = []){

    if (this.props.size)
      classes.push(this.props.size)

    if (this.state.collapsed === true)
      classes.push("collapsed")

    return classes.join(" ");
  }

  capturePanel(filename = "capture"){
    html2canvas(this.panel).then(function(canvas) {
      let el = document.getElementById("content").appendChild(canvas);
      var a = document.createElement('a');
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      a.download = 'capture.jpg';
      a.click();
      a.remove();
      el.remove();
    });
  }

  togglePanel(){
    this.setState({collapsed: !this.state.collapsed})
  }

  render() {
    let panelTitle = this.props.icon
      ?
        <div>
          <FontAwesome name={this.props.icon} />
          {this.props.title}
        </div>
      :
        <div>
          {this.props.title}
        </div>

    return(
      <div id={this.props.id} className={this.setClass(["panel"])} ref={(ref) => this.panel = ref}>
        <div className="panel-header">
          <div className="panel-title">{panelTitle}</div>
          <div className="panel-actions">
            {this.props.capture ? <FontAwesome key="capture" name="camera" onClick={this.capturePanel}/> : null}
            {this.props.actions}
            <FontAwesome name={this.state.collapsed ? "chevron-down" : "chevron-up"} onClick={this.togglePanel}/>
          </div>
        </div>
        <div className="panel-content">
          {this.props.children}
        </div>
        <div className="panel-footer"></div>
      </div>
    );
  }
}
