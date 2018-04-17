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

  createChild(child, childKey){
    if (child.props.submit === true){
      return React.cloneElement(child, { _onClick: this.onSubmit, key: childKey})
    }

    if (child.props.field === true)
      return React.cloneElement(child, { _onChange: this.onChangeInput, _value: this.state.values[child.props.name], error: this.state.errors[child.props.name], key: childKey})

    return child;
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
      let childs = data.props.children.map((child, childKey) => this.createChild(child, childKey));

      return React.cloneElement(data, {children: childs, key: key})

    } else if (data.type.name === "Fields") {
      let child = this.createChild(data.props.children, data.props.children.props.name)

      return React.cloneElement(data, {children: child, key: child.key})
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
