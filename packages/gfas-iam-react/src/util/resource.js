import { parseDataToken, validators } from './conditions'

export class ResourceRules {
  constructor ({ resource, effect, conditions, getUserData }) {
    this.resource = resource
    this.effect = effect
    this.conditions = conditions
    this.getUserData = getUserData
    this.errors = []
    this.state = {
      all: this.resource === '*'
    }
  }

  validateConditions = () => {
    this.errors = []
    this.conditions.forEach(condition => {
      const { rules } = condition
      const methods = Object.keys(rules)
      methods.forEach(method => {
        const tokens = Object.keys(rules[method])
        tokens.forEach(token => {
          // convert $token = token
          const t = parseDataToken(token)
          // quick and dirty array token parsing ie claims[].claimType
          if (t.key.includes('[]')) {
            const itemArr = this.getUserData(t.key.split('[')[0])
            if (itemArr) {
              const passes = validators[method](rules[method][token], itemArr.map(a => a[t.subkey]))
              if (!passes) {
                this.errors.push({ method, tokens, itemArr, t })
              }
            } else {
              this.errors.push({ method, tokens, itemArr, t })
            }
          } else {
            const userData = this.getUserData(t.key, t.subkey)
            if (userData) {
              const passes = validators[method](rules[method][token], userData)
              if (!passes) {
                this.errors.push({ method, token, userData })
              }
            } else {
              this.errors.push({method, tokens})
            }
          }
        })
      })
    })
  }

  getEffect = () => {
    if (this.errors.length > 0) {
      return false
    } else {
      return this.effect === 'Allow'
    }
  }

  validateRulesArr = () => {
    return this.resource.reduce((acc, curVal, curIdx) => {
      acc[curVal] = this.getEffect()
      return acc
    }, {})
  }

  create = () => {
    const policy = {
      visible: {},
      enabled: {},
      deny: false
    }
    this.validateConditions()
    if (this.errors.length > 0) {
      policy.deny = true
    }
    if (this.state.all) {
      policy.visible = { all: this.getEffect() }
      policy.enabled = { all: this.getEffect() }
      return policy
    } else if (Array.isArray(this.resource)) {
      const rules = this.validateRulesArr()
      policy.visible = { ...rules }
      policy.enabled = { ...rules }
      return policy
    } else {
      policy.visible = { [this.resource]: this.getEffect() }
      policy.enabled = { [this.resource]: this.getEffect() }
      return policy
    }
  }
}
