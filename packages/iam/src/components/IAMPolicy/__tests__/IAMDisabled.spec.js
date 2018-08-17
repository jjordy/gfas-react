import { iamDisabled, IAMDisabled } from '../IAMDisabled'

describe('IAMDisabled Component & Utilities', () => {
  describe('iamEnabled Function', () => {
    it('Should return a bool for fields to figure out weather they are disabled', () => {
      expect(iamDisabled('email', { email: true })).toBe(false)
      expect(iamDisabled('email', { email: false })).toBe(true)
    })

    it('Should override with the all field', () => {
      expect(iamDisabled('email', { all: false })).toBe(true)
      expect(iamDisabled('email', { all: true })).toBe(false)
    })

    it('Should default to true if something goes wrong', () => {
      expect(iamDisabled('email', null)).toBe(true)
    })

    it('Should handle effects but field missing', () => {
      const test = iamDisabled('somethingElse', { somethingElse2: true, something: false })
      expect(test).toBe(true)
    })
  })
})
