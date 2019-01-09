import React from 'react'
import Textarea from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

describe('Textarea Component', () => {
  const createWrapper = (props = {}) => {
    return renderer
      .create(
        <ThemeProvider theme={{ BASE_SIZE: 1, UNIT: 'rem' }}>
          <Textarea {...props} />
        </ThemeProvider>
      )
      .toJSON()
  }
  it('Should render the textarea container', () => {
    const w = createWrapper({ label: 'Test', rows: 10, error: false }) //eslint-disable-line
    expect(w.type).toEqual('div')
  })
  it('Should render the label & textarea', () => {
    const w = createWrapper({ label: 'Test', rows: 10, error: false })
    expect(w.children[0].type).toEqual('label')
    expect(w.children[1].type).toEqual('textarea')
  })

  it('Should render a red border when an error exists.', () => {
    const w = createWrapper({
      label: 'Test',
      rows: 10,
      error: true,
      theme: { colors: { red: '#f30' } }
    })
    expect(w.children[1]).toHaveStyleRule('border', '2px solid #f30')
  })
})
