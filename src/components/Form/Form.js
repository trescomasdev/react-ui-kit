import React, { Component } from 'react';

import { validateInput } from './validation';


export class Form extends Component {

  constructor(props){
    super(props);

    let initialValues = {}

    if (this.props.children.length > 0){
      this.props.children.forEach((data, key) => {
        if (data && data.props._value)
          initialValues[data.props.name] = data.props._value
      });
    } else {
      if (this.props.children.props._value)
        initialValues[this.props.children.props.name] = this.props.children.props._value
    }

    this.state = {values: initialValues, errors: {}}

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(e){
    e.preventDefault()
    if (this.childs.length > 0){
      this.childs.forEach((data, key) => {
        this.validateChilds(data, key)
      })
    } else {
      this.validateChilds(this.childs)
    }

    this.props.onSubmit(this.state)
  }

  onChangeInput(e, triggered = false){
    let values = this.state.values
    let errors = this.state.errors
    let obj = triggered ? e.props : e.target
    let value = triggered ? e.props._value : e.target.value

    delete errors[obj.name]
    let validate = validateInput(value, this.props.validations[obj.name], this.state.values)

    values[obj.name] =  validate.value;

    if (validate.error.length > 0)
      errors[obj.name] =  validate.error;

    this.setState({values: values, errors: errors})
  }

  validateChilds(data, key){
    if (!data)
      return false;
          
    if (data.type.name === "Fields" && data.props.children.length > 0){
      data.props.children.forEach((grand, key) =>{
        if (grand.props.submit === true)
          return null;

        if (grand.props.field === true)
          this.onChangeInput(grand, true)
      });
    } else if (data.type.name === "Fields") {
      if (data.props.submit === true)
        return null;

      if (data.props.field === true)
        this.onChangeInput(data, true)
    }
  }

  renderChilds(data, key){
    if (!data)
      return false;

    if (data.type.name === "Fields" && data.props.children.length > 0){
      let grands = data.props.children.map((grand, grandKey) =>{
        if (grand.props.submit === true)
          return React.cloneElement(grand, { _onClick: this.onSubmit, key: grandKey})

        if (grand.props.field === true)
          return React.cloneElement(grand, { _onChange: this.onChangeInput, _value: this.state.values[grand.props.name], error: this.state.errors[grand.props.name], key: grandKey})

        return grand
      });

      return React.cloneElement(data, {children: grands, key: key})

    } else if (data.type.name === "Fields") {
      let grand = data.props.children

      if (data.props.children.props.submit === true){
        grand = React.cloneElement(data.props.children, { _onClick: this.onSubmit, key: key})
      }

      if (data.props.children.props.field === true)
        grand = React.cloneElement(data.props.children, { _onChange: this.onChangeInput, _value: this.state.values[data.props.children.name], error: this.state.errors[data.props.children.name], key: key})

      return React.cloneElement(data, {children: grand, key: key})
    }

    return data;
  }

  render() {
    this.childs = this.props.children.length > 0 ? this.props.children.map((data, key) => this.renderChilds(data, key)) : this.renderChilds(this.props.children)

    return(
      <form className={this.props.className ? this.props.className + " form-validated" : "form-validated"}>
        {this.childs}
      </form>
    );
  }
}

export class Fields extends Component {
  render() {
    return(
      <div className="form-fields">
        {this.props.children}
      </div>
    );
  }
}
