import React from 'react'
import FileUpload from '../.'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const onClear = jest.fn()
  const onSubmit = jest.fn()
  const test = shallow(<FileUpload onClear={onClear} onSubmit={onSubmit} />)
  expect(test).toHaveLength(1)
})
