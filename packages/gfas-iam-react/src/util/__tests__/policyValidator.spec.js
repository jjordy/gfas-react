import PolicyValidator, { validateConditionsList, validateTokenizer } from '../policyValidator'
import policy from '../../../test/IAMPolicy_array_resource_mock.json'

const invalidPolicy = {
  version: null
}

const invalidStatement = [{action: null}]

const invalidConditions = [{ rules: { someWrongMethod: { 'wrongToken': 'test' } } }]

describe('Policy validator class', () => {
  describe('class construction', () => {
    let p
    beforeEach(() => {
      p = new PolicyValidator(policy)
    })
    it('Should be create effects from policy statement ', () => {
      expect(p.policy).toEqual(policy)
    })

    it('Should return false on an invalid policy statement', () => {
      const s = new PolicyValidator(invalidPolicy)
      expect(s.valid()).toBe(false)
    })

    it('Should return invalid on invalid statement', () => {
      const s = new PolicyValidator(Object.assign({}, policy, { statement: invalidStatement }))
      expect(s.valid()).toHaveLength(1)
    })

    it('Should return invalid on invalid condtions', () => {
      const s = new PolicyValidator(Object.assign({}, policy, {
        statement: policy.statement.map(statement => ({
          ...statement,
          conditions: invalidConditions
        }))
      }))
      expect(s.valid()).toHaveLength(1)
    })
  })
})

describe('validateTokenizer Function', () => {
  it('Should validate the tokenizer', () => {
    const within = ['test']
    expect(validateTokenizer({'test': 'test'}, { within })).toBe(null)
    expect(validateTokenizer({ testq: 'test' }, { within })).toHaveLength(1)
  })
})
