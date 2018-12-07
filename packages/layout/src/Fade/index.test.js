import React from 'react'
import Fade from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

describe('Fade Component', () => {
  const createWrapper = (props = {}) => {
    return renderer
      .create(
        <ThemeProvider theme={{ BASE_SIZE: 1, UNIT: 'rem' }}>
          <Fade {...props} />
        </ThemeProvider>
      )
      .toJSON()
  }
  it('Should be hidden by default', () => {
    const w = createWrapper({ children: <a>Test</a> })
    expect(w).toHaveStyleRule('opacity', '0')
    expect(w).toHaveStyleRule('height', '0')
  })

  it('Should set the height to 100% and opacity to 1 when visible prop is true', () => {
    const w = createWrapper({ children: <a>Test</a>, visible: true })
    expect(w).toHaveStyleRule('opacity', '1')
    expect(w).toHaveStyleRule('height', '100%')
  })

  it('Should set take a custom duration', () => {
    const w = createWrapper({ children: <a>Test</a>, duration: '.2s' })
    expect(w).toHaveStyleRule('animation-duration', '.2s')
  })
})
