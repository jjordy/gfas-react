const effects = ['Allow', 'Deny']
const tokenizers = [
  '$token.userTypes',
  '$token.groups',
  '$token.email',
  '$claims[].claimType',
  '$claims[].claimValue',
  '$claims[].userId'
]

export const policyValidations = {
  version: { presence: true },
  id: { presence: true },
  statement: { presence: true }
}

export const statementValidations = {
  action: { presence: true },
  effect: { presence: true, inclusion: { within: effects } },
  resource: { presence: true },
  conditions: {
    presence: {
      allowEmpty: false
    }
  }
}

export const conditionValidations = {
  rules: { validateConditionsList: { within: ['includes', 'stringEquals'] } },
  'rules.includes': {
    validateTokenizers: {
      within: tokenizers
    }
  },
  'rules.stringEquals': {
    validateTokenizers: {
      within: tokenizers
    }
  }
}
