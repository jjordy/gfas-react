
import React from 'react'
import { IAMPolicy } from '../'
import { shallow, mount } from 'enzyme'
import testPolicy from '../../../../IAMPolicy.json'

describe('IAM Policy Component', () => {
  let _props // eslint-disable-line
  let _wrapper // eslint-disable-line

  const TestComponent = ({ policy: { enabled, visible } }) => ( // eslint-disable-line
    <div>Test Component</div>
  )
  beforeEach(() => {
    _props = {
      policy: testPolicy,
      name: 'MyTestComponent',
      userData: {
        claims: [],
        token: {
          userTypes: [],
          groups: []
        }
      },
      render: ({ policy }) => ( // eslint-disable-line
        <TestComponent policy={policy} />
      )
    }
    _wrapper = shallow(<IAMPolicy {..._props} />)
  })
  describe('IAM Policy Component', () => {
    it('Component Should exist if policy is passed in ', () => {
      expect(_wrapper).toBeDefined()
      expect(_wrapper.state().error).toBeNull()
    })
    it('Component Should not exist if policy is null', () => {
      const _w = shallow(<IAMPolicy {..._props} policy={null} />)
      expect(_w.state().error).toBeDefined()
    })

    it('Should handle not finding a statement action', () => {
      const _w = shallow(<IAMPolicy {..._props} name='WrongName' />)
      expect(_w.state().error).toBeDefined()
    })

    it('Should update statement effects only when policy prop is updated and changes', () => {
      const spy = jest.spyOn(IAMPolicy.prototype, 'createStatementEffects')
      const _w = mount(<IAMPolicy {..._props} />)
      expect(spy).toHaveBeenCalledTimes(1)
      _w.setProps({ policy: Object.assign({}, testPolicy, { id: 'newId' }) })
      expect(spy).toHaveBeenCalledTimes(2)
    })

    it('Should render policy Errors if they exist', () => {
      _wrapper.setState({error: true, policyErrors: [{error: 'this is an Error'}]})
      _wrapper.update()
      expect(_wrapper.find('.errors')).toHaveLength(1)
    })

    describe('IAM Policy class Methods => getUserData', () => {
      it('Should get user data from state by key and subkey', () => {
        const user = { claims: [], token: { userTypes: ['administrator'], groups: [] } }
        expect(_wrapper.instance().getUserData(user)('token', 'userTypes')).toEqual(['administrator'])
      })

      it('Should get user data from state by key only', () => {
        const user = { claims: [], token: { userTypes: ['administrator'], groups: [] } }
        const t = _wrapper.instance().getUserData(user)
        expect(t('claims')).toEqual([])
      })

      it('Should return null when there is no userData', () => {
        expect(_wrapper.instance().getUserData({})('claims')).toEqual(null)
      })

      it('Should return null when there is no matching key', () => {
        const user = { claims: [], token: { userTypes: ['administrator'], groups: [] } }
        expect(_wrapper.instance().getUserData(user)('test')).toEqual(null)
      })

      it('Should return null when there is no matching subkey', () => {
        const user = { claims: [], token: { userTypes: ['administrator'], groups: [] } }
        expect(_wrapper.instance().getUserData(user)('token', 'userType')).toEqual(null)
      })
    })
  })
})
