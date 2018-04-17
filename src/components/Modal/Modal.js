import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './Modal.css';

export default class Modal extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount(){
    document.addEventListener("click", this.handleClick)
  }

  handleClick(e){
    if (this.modal && !this.modal.contains(e.target))
      return this.props.onClose()
  }

  render() {

    if (!this.props.show)
      return null

    return(
      <div id={this.props.id} className={this.props.className ? "modal-container " + this.props.className : "modal-container"}>
        <div className="modal" ref={(element) => this.modal = element}>
          {this.props.title
            ?
              <div className="modal-header">
                <span>{this.props.title}</span>
                <button className="close-modal" onClick={this.props.onClose}><FontAwesome name="times" /></button>
              </div>
            :
              null
          }
          <div className="modal-content">
            {this.props.children}
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    );
  }
}
