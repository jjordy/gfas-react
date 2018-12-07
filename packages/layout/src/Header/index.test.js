import React from 'react'
import Header from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

describe('Header Component', () => {
  const createWrapper = (props = {}) => {
    return renderer
      .create(
        <ThemeProvider theme={{ BASE_SIZE: 1, UNIT: 'rem' }}>
          <Header {...props} />
        </ThemeProvider>
      )
      .toJSON()
  }

  it('Should a header as a div by default', () => {
    const w = createWrapper()
    expect(w.type).toEqual('div')
  })
})
