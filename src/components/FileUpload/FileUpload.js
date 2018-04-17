import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './FileUpload.css';

export default class FileUpload extends Component {
  constructor(props){
    super(props)

    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    var fileName = '';

    fileName = e.target.value.split( '\\' ).pop();

    if( fileName )
      this.labelText.innerHTML = fileName

    this.props._onChange(e)

  }

  render() {
    return(
      <div className="file-upload">
        <input type="file" data-imageType={this.props.imageType} name={this.props.name} id={this.props.id} className="inputfile inputfile-5" onChange={this.onChange}/>
        <label htmlFor={this.props.id}><FontAwesome name="upload"/><span ref={(ref) => this.labelText = ref}>{this.props.label ? this.props.label : "Choose a file…"}</span></label>
      </div>
    );
  }
}
