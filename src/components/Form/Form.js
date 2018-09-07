import React, { Component } from 'react';
import { validateInput, validateSelect } from './validation';

export class Form extends Component {

  constructor(props){
    super(props);

    let initialValues = this.props.initialValues || {};

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
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(e){
    if (e)
      e.preventDefault();

    if (this.childs.length > 0){
      this.childs.forEach((data, key) => {
        this.validateChilds(data, key)
      })
    } else {
      this.validateChilds(this.childs)
    }

    return this.props.onSubmit(this.state)
  }

  onChangeInput(e, triggered = false){
    let values = {...this.state.values}
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

  onChangeSelect(value, element){
    let values = {...this.state.values}
    let validate = this.validateSelect(value, element)

    values[element.props.name] =  validate.value;

    this.setState({values: values})
  }

  validateSelect(value, element){
    let values = {...this.state.values}
    let errors = this.state.errors
    let validations = this.props.validations[element.props.name]

    delete errors[element.props.name]
    let validate = validateSelect(value, validations, values)

    if (validate.error.length > 0)
      errors[element.props.name] =  validate.error;

    this.setState({errors: errors})

    return validate;
  }

  createChild(child, childKey){
    if (!child.props)
      return child;

    if (child.props.submit === true)
      return React.cloneElement(child, { _onClick: this.onSubmit, key: childKey, disabled: child.props.disabled || this.props.disabled})

    if (child.props.field === true)
      return React.cloneElement(child, { _onChange: this.onChangeInput, _value: this.state.values[child.props.name], error: this.state.errors[child.props.name], key: childKey, disabled: child.props.disabled || this.props.disabled})

    if (child.props.select === true)
      return React.cloneElement(child, { _onChange: this.onChangeSelect, _value: this.state.values[child.props.name], error: this.state.errors[child.props.name], key: childKey, disabled: child.props.disabled || this.props.disabled})

    return child;
  }

  validateChilds(data, key){
    if (!data || data.props.fields !== true )
      return false;

    let childs = [data.props.children]

    if (data.props.children.length > 0)
      childs = data.props.children

    childs.forEach((child, key) =>{
      if (!child.props)
        return child

      if (child.props.submit === true)
        return child;

      if (child.props.field === true)
        this.onChangeInput(child, true)

      if (child.props.select === true)
        this.validateSelect(this.state.values[child.props.name], child)
    });
  }

  renderChilds(data, key){
    if (!data)
      return false;

    if (data.props.fields !== true)
      return data;

    let childs = [data.props.children]

    if (data.props.children.length > 0)
      childs = data.props.children;

    childs = childs.map((child, childKey) => this.createChild(child, childKey));

    return React.cloneElement(data, {children: childs, key: key});
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
      <div className="form-fields" fields="true">
        {this.props.children}
      </div>
    );
  }
}

Fields.defaultProps = {
  fields: true
};
