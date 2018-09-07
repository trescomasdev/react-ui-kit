import React, { Component } from 'react';
import strings from './strings';

class Options extends Component {
  constructor(props){
    super(props)

    this.options = {
      strings: strings
    }

  }

  init(options, cb){
    this.options = {
      style: options.style || "default",
      strings: options.strings || strings
    }

    cb(this.options.style)
  }

  getOption(option = undefined){
    if (!option)
      return this.options;

    return this.options[option];
  }

  setOption(option = undefined, value = undefined){
    if (!option || !value)
      return false;

    this.options[option] = value;

    return true;
  }

  getComponentStrings(component = undefined){
    if (!component)
      return false

    return this.options.strings[component];
  }

}

export default new Options();
