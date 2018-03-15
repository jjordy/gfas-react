import { policyValidations, statementValidations, conditionValidations } from './policyConstraints'
import validate from 'validate.js'

export default class PolicyValidator {
  constructor (policy) {
    this.policy = policy
  }

  valid = () => {
    const rules = []
    const invalidPolicy = validate(this.policy, policyValidations)
    if (invalidPolicy) {
      return false
    }

    this.policy.statement.forEach(item => {
      const invalid = validate(item, statementValidations)
      if (invalid) {
        rules.push(invalid)
        return
      }
      item.conditions.forEach(condition => {
        const invalidCondition = validate(condition, conditionValidations)
        if (invalidCondition) {
          return rules.push(invalidCondition)
        }
      })
    })

    if (rules.length > 0) {
      return rules
    } else {
      return true
    }
  }
}

export const validateConditionsList = (value, options, key, attributes) => {
  const tokens = Object.keys(value)
  const a = tokens.filter(token => {
    const invalid = validate({ token: token }, { token: { inclusion: options.within } })
    if (invalid) {
      return true
    } else {
      return false
    }
  })
  if (a.length > 0) {
    return a
  } else {
    return null
  }
}

export const validateTokenizer = (value, options, key, attributes) => {
  if (value) {
    const token = Object.keys(value)
    const a = token.filter(token => {
      const invalid = validate({ token: token }, { token: { inclusion: options.within } })
      if (invalid) {
        return true
      }
      return false
    })
    if (a.length > 0) {
      return a
    } else {
      return null
    }
  } else {
    return null
  }
}

validate.validators.validateConditionsList = validateConditionsList
validate.validators.validateTokenizers = validateTokenizer
