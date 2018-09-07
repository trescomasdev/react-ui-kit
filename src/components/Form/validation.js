import validator from 'validator';
import options from '../../options';

export function validateInput(value, validations, values){
  const strings = options.getComponentStrings("Form");

  let error = [];

  value = value === undefined ? "" : String(value)

  if (!validations)
    return { value: value, error: error}

  if (validations.required && value === "")
    error.push(strings.fieldIsRequired);

  if (validations.email && !validator.isEmail(value))
    error.push(strings.notValidEmail);

  if (validations.equal && values[validations.equal.value] !== value)
    error.push(strings.fieldNotMatch + validations.equal.label);

  if (validations.numeric && !validator.isNumeric(value))
    error.push(strings.onlyNumbers);

  if (validations.custom){
    let validate = validations.custom(value, values);

    if (validate !== true)
      error.push(validate);
  }

  return { value: value, error: error}
}

export function validateSelect(value, validations, values){
  const strings = options.getComponentStrings("Form");

  let error = [];

  if (!validations)
    return { value: value, error: error}


  if (validations.required && value === undefined)
    error.push(strings.fieldIsRequired);

  if (validations.custom){
    let validate = validations.custom(value, values);

    if (validate !== true)
      error.push(validate);
  }

  return { value: value, error: error}
}
