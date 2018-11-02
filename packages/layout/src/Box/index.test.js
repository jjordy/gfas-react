import React from 'react'
import Box from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

describe('Box Component', () => {
  const createWrapper = (props = {}) => {
    return renderer
      .create(
        <ThemeProvider theme={{ BASE_SIZE: 1, UNIT: 'rem' }}>
          <Box {...props} />
        </ThemeProvider>
      )
      .toJSON()
  }
  it('Should render a div', () => {
    const w = createWrapper()
    expect(w.type).toEqual('div')
  })

  it('Should take an as prop', () => {
    const w = createWrapper({ as: 'a' })
    expect(w.type).toEqual('a')
  })

  it('Should take spacing props', () => {
    const w = createWrapper({ p: 4, m: 4 })
    expect(w).toHaveStyleRule('padding', '4rem')
    expect(w).toHaveStyleRule('margin', '4rem')
  })

  it('Should take a bg prop', () => {
    const w = createWrapper({ bg: '#FFFFFF' })
    expect(w).toHaveStyleRule('background-color', '#FFFFFF')
  })

  it('Should take a fg prop', () => {
    const w = createWrapper({ fg: '#000000' })
    expect(w).toHaveStyleRule('color', '#000000')
  })

  it('Should take a size prop', () => {
    const w = createWrapper({ size: 1 })
    expect(w).toHaveStyleRule('width', '10rem')
    expect(w).toHaveStyleRule('height', '10rem')
  })
})
