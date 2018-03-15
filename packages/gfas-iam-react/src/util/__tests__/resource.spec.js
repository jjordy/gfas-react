import { ResourceRules } from '../resource'

let conditions = [
  { rules: { includes: { '$token.userTypes': 'datacheck_administrator' } } }
]

describe('resource utilities', () => {
  let r
  let resource = '*'
  let effect = 'Allow'
  let userData = {
    token: { userTypes: ['datacheck_administrator'], email: 'test@test.com' },
    claims: [{ claimType: 'customClaimType', claimValue: 'TestClaimValue' }]
  }
  let getUserData = (key, subkey) => {
    if (key && subkey) {
      return userData[key][subkey]
    } else if (key) {
      return userData[key]
    } else {
      return null
    }
  }

  describe('Resource Rules Class', () => {
    describe('Class construction', () => {
      beforeEach(() => {
        r = new ResourceRules({ resource, effect, conditions, getUserData })
      })
      it('Should create a new ResourceRules class', () => {
        expect(r).toBeInstanceOf(ResourceRules)
      })

      it('Should set class properties', () => {
        expect(r.resource).toEqual(resource)
        expect(r.conditions).toEqual(conditions)
        expect(r.effect).toEqual(effect)
        expect(r.getUserData).toEqual(getUserData)
      })

      it('Should set its all flag to true when we get the * identifier', () => {
        expect(r.state.all).toBe(true)
        const e = new ResourceRules({
          resource: ['test1'],
          effect,
          conditions,
          getUserData
        })
        expect(e.state.all).toBe(false)
      })
    })

    describe('Class Methods', () => {
      it('Should get the effect of the rule', () => {
        expect(r.getEffect()).toBe(true)
      })

      describe('create Method', () => {
        it('Should handle the all resource combined with the allow effect', () => {
          expect(r.create()).toEqual({
            deny: false,
            visible: { all: true },
            enabled: { all: true }
          })
        })

        it('Should handle the all resource identifier combined with Deny or any other effect', () => {
          const c = new ResourceRules({
            effect: 'Deny',
            resource,
            conditions,
            getUserData
          })
          expect(c.create()).toEqual({
            deny: false,
            visible: { all: false },
            enabled: { all: false }
          })
        })

        it('Should handle individual resource identifiers passed as an array', () => {
          const c = new ResourceRules({
            effect,
            resource: ['test1', 'test2', 'test3'],
            conditions,
            getUserData
          })
          const results = { test1: true, test2: true, test3: true }
          expect(c.create()).toEqual({
            deny: false,
            visible: { ...results },
            enabled: { ...results }
          })
        })

        it('Should handle a single non all resource identifier passed as a string', () => {
          const c = new ResourceRules({
            effect,
            resource: 'test1',
            conditions,
            getUserData
          })
          expect(c.create()).toEqual({
            deny: false,
            visible: { test1: true },
            enabled: { test1: true }
          })
        })
      })

      describe('validateConditions method', () => {
        it('Should validate conditions', () => {
          r.create()
          expect(r.errors).toHaveLength(0)
        })

        it('Should handle the claimTypes tokenizer', () => {
          const condit = conditions.map(c => ({
            ...c,
            rules: {
              includes: {
                '$claims[].claimValue': 'TestClaimValue'
              }
            }
          }))
          const s = new ResourceRules({
            effect,
            resource,
            conditions: condit,
            getUserData
          })
          s.create()
          expect(s.errors).toHaveLength(0)
        })

        it('Should handle failed claimTypes tokenizer', () => {
          const condit = conditions.map(c => ({
            ...c,
            rules: {
              includes: {
                '$claims[].claimValue': 'serTestClaimValue'
              }
            }
          }))
          const s = new ResourceRules({
            effect,
            resource,
            conditions: condit,
            getUserData
          })
          s.create()
          expect(s.errors).toHaveLength(1)
        })

        it('Should handle a failed validation', () => {
          const condit = conditions.map(c => ({
            ...c,
            rules: {
              includes: {
                '$token.email': 'fail@fail.com'
              }
            }
          }))
          const s = new ResourceRules({
            effect,
            resource,
            conditions: condit,
            getUserData
          })
          s.create()
          expect(s.errors).toHaveLength(1)
        })
      })
    })
  })
})
