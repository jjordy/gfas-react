import React from 'react'
import Image from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

describe('Image Component', () => {
  const createWrapper = (props = {}) => {
    return renderer
      .create(
        <ThemeProvider theme={{ BASE_SIZE: 1, UNIT: 'rem' }}>
          <Image {...props} />
        </ThemeProvider>
      )
      .toJSON()
  }

  it('Should render an image', () => {
    const w = createWrapper({ src: '/test.jpg', alt: 'test' })
    expect(w.type).toEqual('img')
  })

  it('Should take a size prop', () => {
    const w = createWrapper({ src: '/test.jpg', alt: 'test', size: 'small' })
    expect(w).toHaveStyleRule('width', '128px')
    expect(w).toHaveStyleRule('height', 'auto')
  })

  it('Should take a height prop', () => {
    const w = createWrapper({ src: '/test.jpg', alt: 'test', height: '128px' })
    expect(w).toHaveStyleRule('height', '128px')
  })

  it('Should take a centered prop', () => {
    const w = createWrapper({ src: '/test.jpg', alt: 'test', centered: true })
    expect(w).toHaveStyleRule('margin', 'auto')
  })
})
