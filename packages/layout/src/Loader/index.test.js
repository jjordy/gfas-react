import React from 'react'
import { Loader } from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'

describe('Loader Component', () => {
  const createWrapper = (props = {}) => {
    return renderer
      .create(
        <Loader
          {...props}
          theme={{ BASE_SIZE: 1, UNIT: 'rem', colors: { darkGrey: '#CCC' } }}
        />
      )
      .toJSON()
  }
  it('Should render an svg when active', () => {
    const w = createWrapper({ active: true })
    expect(w.type).toEqual('svg')
    const t = createWrapper({ active: false })
    expect(t).toEqual(null)
  })
})
