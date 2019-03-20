import React from 'react'
import { Form, StyledForm } from './index'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'

describe('Form Component', () => {
  const createWrapper = (props = {}) => {
    return renderer
      .create(
        <ThemeProvider theme={{ BASE_SIZE: 1, UNIT: 'rem' }}>
          <StyledForm {...props} />
        </ThemeProvider>
      )
      .toJSON()
  }

  const formChildren = (
    <React.Fragment>
      <input type='text' />
      <button type='submit' />
    </React.Fragment>
  )
  it('Should give the form sensible defaults', () => {
    const w = createWrapper({ children: formChildren, onSubmit: jest.fn() }) //eslint-disable-line
    expect(w.type).toEqual('form')
  })
})
