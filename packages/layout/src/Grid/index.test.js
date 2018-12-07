import React from 'react'
import Grid from './index'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

describe('Grid Component', () => {
  const createWrapper = (props = {}) => {
    return renderer
      .create(
        <ThemeProvider theme={{ BASE_SIZE: 1, UNIT: 'rem' }}>
          <Grid {...props} />
        </ThemeProvider>
      )
      .toJSON()
  }

  it('Should create a css grid', () => {
    const w = createWrapper({ gap: 16, children: <i /> })
    expect(w).toHaveStyleRule('display', 'grid')
  })

  it('Should set the grid gap', () => {
    const w = createWrapper({ gap: 16, children: <i /> })
    expect(w).toHaveStyleRule('grid-gap', '16px')
  })

  it('Should set align-items using align prop', () => {
    const w = createWrapper({ children: <i />, align: 'center' })
    expect(w).toHaveStyleRule('align-items', 'center')
  })
})
