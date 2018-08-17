import { validators } from '../conditions'

describe('Condition Utilities', () => {
  describe('includes condition', () => {
    const { includes } = validators
    it('Should run includes on a string or array', () => {
      expect(includes('test', ['test'])).toBe(true)
      expect(includes('test', 'test')).toBe(true)
    })
    it('Should handle null values', () => {
      expect(includes(null, null)).toBe(false)
    })
  })

  describe('stringEquals', () => {
    const { stringEquals } = validators
    it('Should return true when string matches', () => {
      expect(stringEquals('test', 'test')).toBe(true)
      expect(stringEquals('test', '')).toBe(false)
    })

    it('Should return false if the values dont exist', () => {
      expect(stringEquals(null, null)).toBe(false)
    })
  })

  describe('excludes', () => {
    const { excludes } = validators
    it('Should return true when value doesnt exist', () => {
      expect(excludes('test', '1')).toBe(true)
      expect(excludes('value', ['1'])).toBe(true)
    })
    it('Shoudl return false when value exist', () => {
      expect(excludes('test', 'test')).toBe(false)
      expect(excludes('test', ['test'])).toBe(false)
    })
  })
})
