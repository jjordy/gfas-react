import React from 'react'
import { iamVisible, IAMVisible } from '../IAMVisible'
import { shallow } from 'enzyme'

describe('IAMVisible Component & Utilties', () => {
  describe('IAMVisible Component', () => {
    let _props
    let _wrapper
    beforeEach(() => {
      _props = {
        render: () => <div>Hello</div>,
        effects: { all: true }
      }
      _wrapper = shallow(<IAMVisible {..._props} />)
    })
    it('Should handle the all modifier', () => {
      expect(_wrapper.text()).toEqual('Hello')
      expect(_wrapper.setProps({ effects: { all: false } }).text()).toEqual('')
    })

    it('Should render component if all checks pass', () => {
      expect(_wrapper.text()).toEqual('Hello')
      expect(_wrapper.setProps({ effects: { all: false } }).text()).toEqual('')
    })
  })
  describe('iamVisible Function', () => {
    it('Should return a bool for fields to figure out weather they are disabled', () => {
      expect(iamVisible('email', { email: true })).toBe(true)
      expect(iamVisible('email', { email: true })).toBe(true)
    })

    it('Should override with the all field', () => {
      expect(iamVisible('email', { all: true })).toBe(true)
    })

    it('Should default to false if something goes wrong', () => {
      expect(iamVisible('email', null)).toBe(true)
    })

    it('Should handle effects but field missing', () => {
      const test = iamVisible('somethingElse', { somethingElse2: true, something: false })
      expect(test).toBe(false)
    })
  })
})
