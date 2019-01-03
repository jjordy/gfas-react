const isEmpty = value => value === undefined || value === null || value === ''
const join = rules => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0]

export const cleanMask = (v, pattern = /\(|\)|\/|-|\s/g) => v.replace(pattern, '')

export function email (value) {
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address'
  }
}

export function required (value) {
  if (isEmpty(value)) {
    return 'Required'
  }
}

export function minLength (min) {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return `Must be at least ${min} characters`
    }
  }
}

export function maxLength (max) {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters`
    }
  }
}

export function minNumber (min) {
  return value => {
    if (value < min) {
      return `Number must be greater than or equal to ${min}`
    }
  }
}

export function maxNumber (max) {
  return value => {
    if (value > max) {
      return `Number must be less than or equal to ${max}`
    }
  }
}

export function phone (value) {
  if (!/(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value)) {
    return 'Must be a valid Phone number.'
  }
}

export function oneCap (value) {
  if (!/[A-Z]/.test(value)) {
    return 'Must have 1 capital letter'
  }
}

export function noLeadingZero (value) {
  if (/^0[0-9].*$/.test(value)) {
    return 'Invalid Number'
  }
}

export function integer (value) {
  if (!Number.isInteger(Number(value))) {
    return 'Must be an integer'
  }
}

export function dateMMDDYYYY (date) {
  var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
  if (!date_regex.test(date)) {
    return 'Must be a valid date in MM/DD/YYYY format.'
  }
}

export function zipcode (zipcode) {
  var zipcode_regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/
  if (!zipcode_regex.test(zipcode)) {
    return 'Must be a valid zip code.'
  }
}

export function oneOf (enumeration) {
  return value => {
    if (!~enumeration.indexOf(value)) {
      return `Must be one of: ${enumeration.join(', ')}`
    }
  }
}

export function saig (value) {
  if (!/^tg[a-z0-9]+$/i.test(value)) {
    return 'Invalid SAIG Value'
  }
}

export function requiredIfNo (field, name) {
  return (value, data) => {
    if (data) {
      if (!value && !data[field]) {
        return `${name} Should be filled out`
      }
    }
  }
}

export function match (field, name) {
  return (value, data) => {
    if (data) {
      if (value !== data[field]) {
        return `${name} Do not match`
      }
    }
  }
}

export function oneNum (value) {
  if (!/\d+/g.test(value)) {
    return 'Your Password Must Contain 1 Number'
  }
}

export function oneSpecialChar (value) {
  if (!/[~`@()!_>#$%^&*+=\-[\]\\';,/{}|\\":<>?]/g.test(value)) {
    return 'Your password must contain 1 special character'
  }
}

export function createValidator (rules) {
  return (data = {}) => {
    const errors = {}
    Object.keys(rules).forEach(key => {
      const rule = join([].concat(rules[key])) // concat enables both functions and arrays of functions
      const error = rule(data[key], data)
      if (error) {
        errors[key] = error
      }
    })
    return errors
  }
}
