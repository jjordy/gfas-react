import React from 'react'
import Divider from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

describe('Divider Component', () => {
  const createWrapper = (props = {}) => {
    return renderer
      .create(
        <ThemeProvider theme={{ BASE_SIZE: 1, UNIT: 'rem' }}>
          <Divider {...props} />
        </ThemeProvider>
      )
      .toJSON()
  }
  it('Should render a border on the bottom to show the divider', () => {
    const w = createWrapper()
    expect(w).toHaveStyleRule('border-bottom', '3px solid #6C757D')
  })
  it('Should render Divider with 1 unit margins by default', () => {
    const w = createWrapper()
    expect(w).toHaveStyleRule('margin-top', '1rem')
    expect(w).toHaveStyleRule('margin-bottom', '1rem')
  })
  it('Should render Divider with .5 unit margins when fitted prop is passed', () => {
    const w = createWrapper({ fitted: true })
    expect(w).toHaveStyleRule('margin-top', '0.5rem')
    expect(w).toHaveStyleRule('margin-bottom', '0.5rem')
  })

  it('Should not render border bottom when hidden prop is passed', () => {
    const w = createWrapper({ hidden: true })
    expect(w).toHaveStyleRule('border-bottom', undefined)
  })
})
