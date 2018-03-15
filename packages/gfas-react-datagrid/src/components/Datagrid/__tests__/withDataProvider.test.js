import React from 'react'
import withDataProvider from '../withDataProvider'
import { testData } from '../../../../test/testData'
import { shallow } from 'enzyme'
import moment from 'moment'

const TestCol = () => <div />

const TC = () => (
  <div>
    <TestCol id='id' name='Test Id' />
    <TestCol id='name' name='Test Name' />
    <TestCol id='date' name='Test Date' date nullDateMessage='Test' />
  </div>
)

const Decorated = withDataProvider(TC)
let _props
let _wrapper

beforeEach(() => {
  _props = { data: testData }
  _wrapper = shallow(
    <Decorated {..._props}>
      <TestCol id='id' name='Test Id' />
      <TestCol id='name' name='Test Name' />
      <TestCol id='date' name='Test Date' date dateInputFormat='YYYY-MM-DD' />
    </Decorated>
  )
    .first()
    .shallow()
})
describe('withDataProvider', () => {
  describe('Data Prop Transformations', () => {
    it('Should pass in data prop', () => {
      const dg = _wrapper.find('TC')
      expect(dg.prop('data')).toBeDefined()
      expect(dg.prop('data')).toBeInstanceOf(Array)
    })

    it('Should format any date columns to UTC timestamp in data prop', () => {
      const dg = _wrapper.find('TC')
      expect(dg.prop('data')[0].date).toEqual(
        Date.parse(moment(testData[0].date, 'YYYY-MM-DD').format('MM/DD/YYYY'))
      )
    })

    it('Should show the default N/A null date message if a date is null', () => {
      const dg = _wrapper.find('TC')
      expect(dg.prop('data')[1].date).toEqual('N/A')
    })
  })

  describe('Column Prop Transformations', () => {
    it('Should pass in a columns prop', () => {
      const dg = _wrapper.find('TC')
      expect(dg.prop('columns')).toBeDefined()
      expect(dg.prop('columns')).toBeInstanceOf(Array)
    })

    it('Should generate columns property structure from child columns', () => {
      const dg = _wrapper.find('TC')
      expect(Object.keys(dg.prop('columns')[0]).sort()).toEqual(
        ['name', 'id', 'width', 'active'].sort()
      )
    })
  })
})
