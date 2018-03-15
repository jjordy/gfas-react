import { createEffectsFromPolicy } from '../effect'

import policy from '../../../test/IAMPolicy_array_resource_mock.json'
describe('effects utilities', () => {
  describe('createEffectsFromPolicy Function', () => {
    let validator
    beforeEach(() => {
      validator = (key, subkey) => {
        const userData = { claims: [], token: { userTypes: ['datacheck_administrator'], groups: ['datacheck'] } }
        return userData[key][subkey]
      }
    })
    it('Should be create effects from policy statement ', () => {
      expect(createEffectsFromPolicy(policy.statement[0], validator)).toEqual({
        deny: false,
        visible: {
          email: true,
          password: true
        },
        enabled: {
          email: true,
          password: true
        }
      })
    })
  })
})
