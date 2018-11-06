import React from 'react'
import Container from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

describe('Container Component', () => {
  const createWrapper = (props = {}) => {
    return renderer
      .create(
        <ThemeProvider theme={{ BASE_SIZE: 1, UNIT: 'rem' }}>
          <Container {...props} />
        </ThemeProvider>
      )
      .toJSON()
  }
  it('Should render display Container', () => {
    const w = createWrapper()
    expect(w).toHaveStyleRule('width', '1150px')
    expect(w).toHaveStyleRule('margin', 'auto')
  })

  it('Should take a text prop', () => {
    const w = createWrapper({ text: true })
    expect(w).toHaveStyleRule('width', '750px')
  })

  it('Should set the width to 100% on smaller displays', () => {
    const w = createWrapper()
    expect(w).toHaveStyleRule('width', '100%', {
      media: '(max-width: 1024px)'
    })
  })
})
