import validator from 'validator';

export function validateInput(value, validations, values){
  let error = [];

  value = value === undefined ? "" : String(value)

  if (!validations)
    return { value: value, error: error}

  if (validations.required && value === "")
    error.push("Field is required");

  if (validations.email && !validator.isEmail(value))
    error.push("This is not a valid email address!");

  if (validations.equal && values[validations.equal] !== value){
    error.push("The field doesn't match with " + validations.equal);
  }

  return { value: value, error: error}
}
