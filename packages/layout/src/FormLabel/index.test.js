import React from 'react'
import FormLabel from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

describe('FormLabel Component', () => {
  const createWrapper = (props = {}) => {
    return renderer
      .create(
        <ThemeProvider theme={{ BASE_SIZE: 1, UNIT: 'rem', colors: {} }}>
          <FormLabel {...props} />
        </ThemeProvider>
      )
      .toJSON()
  }

  it('Should render a form label', () => {
    const w = createWrapper({ id: 'id_test', children: 'Test' })
    expect(w).toHaveStyleRule('display', 'block')
    expect(w.type).toEqual('label')
  })

  it('Should hide the label properly', () => {
    const w = createWrapper({
      id: 'id_test',
      children: 'Test',
      hideLabel: true
    })
    expect(w).toHaveStyleRule('position', 'absolute')
    expect(w).toHaveStyleRule('overflow', 'hidden')
    expect(w).toHaveStyleRule('clip', 'rect(0 0 0 0)')
  })
})
