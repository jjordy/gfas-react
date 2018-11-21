import React from 'react'
import { Checkbox } from './index.js'
import 'jest-styled-components'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import Color from 'color'

describe('Checkbox Component', () => {
  const createWrapper = (props = {}) => {
    return mount(
      <ThemeProvider
        theme={{ BASE_SIZE: 1, UNIT: 'rem', colors: { red: '#f30' } }}
      >
        <Checkbox {...props} />
      </ThemeProvider>
    )
  }
  it('Should render a checkbox', () => {
    const w = createWrapper({ checked: false, color: Color('#f30') })
    expect(w).toBeDefined()
  })
})
