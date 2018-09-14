import { email } from '.'

describe('Validation Methods', () => {
  describe('Email validation', () => {
    it('Should only accept a valid email address', () => {
      expect.assertions(3)
      expect(email('jordanrileyaddison@gmail')).toEqual('Invalid email address')
      expect(email('jordanrileyaddison')).toEqual('Invalid email address')
      expect(email('jordanrileyaddison@gmail.com')).toEqual(undefined)
    })
  })
})
