import React from 'react'
import Flex from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

describe('Flex Component', () => {
  const createWrapper = (props = {}) => {
    return renderer
      .create(
        <ThemeProvider theme={{ BASE_SIZE: 1, UNIT: 'rem' }}>
          <Flex {...props} />
        </ThemeProvider>
      )
      .toJSON()
  }
  it('Should render display flex', () => {
    const w = createWrapper()
    expect(w).toHaveStyleRule('display', 'flex')
  })

  it('Should take a justify prop', () => {
    const w = createWrapper({ justify: 'center' })
    expect(w).toHaveStyleRule('justify-content', 'center')
  })

  it('Should take an align prop', () => {
    const w = createWrapper({ align: 'center' })
    expect(w).toHaveStyleRule('align-items', 'center')
  })

  it('Should take a direction prop', () => {
    const w = createWrapper({ direction: 'row' })
    expect(w).toHaveStyleRule('flex-direction', 'row')
  })

  it('Should take a wrap prop', () => {
    const w = createWrapper({ wrap: 'wrap' })
    expect(w).toHaveStyleRule('flex-wrap', 'wrap')
  })

  it('Should take a content prop', () => {
    const w = createWrapper({ content: 'flex-start' })
    expect(w).toHaveStyleRule('align-content', 'flex-start')
  })
})
