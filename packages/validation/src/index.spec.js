import {
  email,
  required,
  minLength,
  maxLength,
  minNumber,
  maxNumber,
  phone,
  oneCap,
  noLeadingZero,
  integer,
  oneOf,
  saig,
  requiredIfNo,
  match,
  oneNum,
  oneSpecialChar,
  createValidator
} from '.'

describe('Validation Methods', () => {
  it('Should only accept a valid email address', () => {
    expect.assertions(3)
    expect(email('jordanrileyaddison@gmail')).toEqual('Invalid email address')
    expect(email('jordanrileyaddison')).toEqual('Invalid email address')
    expect(email('jordanrileyaddison@gmail.com')).toEqual(undefined)
  })

  it('Should return required for null / undefined values', () => {
    expect.assertions(3)
    expect(required(null)).toEqual('Required')
    expect(required(undefined)).toEqual('Required')
    expect(required('value')).toEqual(undefined)
  })

  it('Should fail validation length is less than passed minimum length', () => {
    expect.assertions(2)
    expect(minLength(3)('12')).toEqual('Must be at least 3 characters')
    expect(minLength(3)('123')).toEqual(undefined)
  })

  it('Should fail validation length is more than passed maximum length', () => {
    expect.assertions(2)
    expect(maxLength(3)('12123')).toEqual('Must be no more than 3 characters')
    expect(maxLength(3)('12')).toEqual(undefined)
  })

  it('Should fail validation if number is less than passed value', () => {
    expect.assertions(2)
    expect(minNumber(3)(1)).toEqual('Number must be greater than or equal to 3')
    expect(minNumber(3)(4)).toEqual(undefined)
  })

  it('Should fail validation if number is greater than passed value', () => {
    expect.assertions(2)
    expect(maxNumber(3)(4)).toEqual('Number must be less than or equal to 3')
    expect(maxNumber(3)(2)).toEqual(undefined)
  })

  it('Should fail validation if the pass phone number is invalid', () => {
    const validationMessage = 'Must be a valid Phone number.'
    expect.assertions(7)
    expect(phone(3)).toEqual(validationMessage)
    expect(phone('38328343_(dFASDFAD')).toEqual(validationMessage)
    expect(phone('2285470060+1')).toEqual(validationMessage)
    expect(phone(2285470060)).toEqual(undefined)
    expect(phone('1-228-547-0060')).toEqual(undefined)
    expect(phone('(1) 228-547-0060')).toEqual(undefined)
    expect(phone(12285470060)).toEqual(undefined)
  })

  it('Should fail validation if no capital letters are in the string passed.', () => {
    const validationMessage = 'Must have 1 capital letter'
    expect.assertions(2)
    expect(oneCap('nocaps')).toEqual(validationMessage)
    expect(oneCap('Caps')).toEqual(undefined)
  })

  it('Should fail validation if the number passed starts with zero', () => {
    const validationMessage = 'Invalid Number'
    expect.assertions(2)
    expect(noLeadingZero('002393')).toEqual(validationMessage)
    expect(noLeadingZero('123483')).toEqual(undefined)
  })

  it('Should fail validation if the passed value is not an integer', () => {
    const validationMessage = 'Must be an integer'
    expect.assertions(2)
    expect(integer('NOTANINTEGER')).toEqual(validationMessage)
    expect(integer('123483')).toEqual(undefined)
  })

  it('Should fail validation if the value is not one of the items passed to the validation function', () => {
    const enumeration = ['one', 'two', 'three']
    const validationMessage = `Must be one of: ${enumeration.join(', ')}`
    expect.assertions(2)
    expect(oneOf(enumeration)('four')).toEqual(validationMessage)
    expect(oneOf(enumeration)('one')).toEqual(undefined)
  })

  it('Should fail validation if the value is not a valid SAIG Number', () => {
    const validationMessage = 'Invalid SAIG Value'
    expect.assertions(2)
    expect(saig('four')).toEqual(validationMessage)
    expect(saig('tga03819')).toEqual(undefined)
  })

  it('Should fail validation only if the target value passed is not defined', () => {
    const validationMessage = 'Something Should be filled out'
    const testData = {}
    const testData2 = {
      test: 'test'
    }
    expect.assertions(2)
    expect(requiredIfNo('test', 'Something')(null, testData)).toEqual(validationMessage)
    expect(requiredIfNo('test', 'Something')(null, testData2)).toEqual(undefined)
  })

  it('Should fail validation if 2 values dont match', () => {
    const validationMessage = 'Something Do not match'
    const testData = {}
    const testData2 = {
      test: 'test'
    }
    expect.assertions(2)
    expect(match('test', 'Something')(null, testData)).toEqual(validationMessage)
    expect(match('test', 'Something')('test', testData2)).toEqual(undefined)
  })

  it('Password One Number validation', () => {
    expect.assertions(2)
    expect(oneNum('Test')).toEqual('Your Password Must Contain 1 Number')
    expect(oneNum('test1')).toEqual(undefined)
  })

  it('Password One Special Character validation', () => {
    expect.assertions(2)
    expect(oneSpecialChar('Test')).toEqual('Your password must contain 1 special character')
    expect(oneSpecialChar('test$')).toEqual(undefined)
  })

  describe('createValidator Function', () => {
    it('Should an error object with failed validations for each failing key', () => {
      const errors = createValidator({
        test: required,
        test2: required
      })({ test: null, test2: null })
      expect(errors).toEqual({
        test: 'Required',
        test2: 'Required'
      })
    })

    it('Should accept an array of validations per key', () => {
      const errors = createValidator({
        test: [required],
        test2: [required]
      })({ test: null, test2: null })
      expect(errors).toEqual({
        test: 'Required',
        test2: 'Required'
      })
    })

    it('Error object should return the first failing validation per object key', () => {
      const errors = createValidator({
        test: [required, minLength(9)],
        test2: [required, minLength(9)]
      })({ test: null, test2: '12345678' })
      expect(errors).toEqual({
        test: 'Required',
        test2: 'Must be at least 9 characters'
      })
    })
  })
})
