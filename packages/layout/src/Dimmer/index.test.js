import React from 'react'
import Dimmer from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

describe('Dimmer Component', () => {
  const createWrapper = (props = {}) => {
    return renderer
      .create(
        <ThemeProvider theme={{ BASE_SIZE: 1, UNIT: 'rem' }}>
          <Dimmer {...props}>
            <p>Under Dimmer</p>
          </Dimmer>
        </ThemeProvider>
      )
      .toJSON()
  }
  it('Should render dimmer hidden unless active prop is passed', () => {
    const w = createWrapper({ page: true })
    expect(w).toHaveStyleRule('opacity', '0')
    const x = createWrapper({ active: true })
    expect(x).toHaveStyleRule('opacity', '1')
  })
  it('Should render position absolute by default', () => {
    const w = createWrapper()
    expect(w).toHaveStyleRule('position', 'absolute !important')
  })

  it('Should render position fixed when the page prop is passed', () => {
    const w = createWrapper({ page: true })
    expect(w).toHaveStyleRule('position', 'fixed !important')
  })

  it('Should render position fixed when the page prop is passed', () => {
    const w = createWrapper({ page: true })
    expect(w).toHaveStyleRule('position', 'fixed !important')
  })

  it('Should render the dark dimmer when the dark prop is passed', () => {
    const w = createWrapper({ dark: true, active: true })
    expect(w).toHaveStyleRule('background-color', 'rgba(0,0,0,0.85)')
  })

  it('Should render the light dimmer by default', () => {
    const w = createWrapper({ active: true })
    expect(w).toHaveStyleRule('background-color', 'rgba(255,255,255,0.6)')
  })

  it('Should only set pointer events to active when the dimmer is active', () => {
    const w = createWrapper()
    expect(w).toHaveStyleRule('pointer-events', 'none')
    const x = createWrapper({ active: true })
    expect(x).toHaveStyleRule('pointer-events', 'auto')
  })
})
