import React from 'react'
import { StyledButton as Button } from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import Color from 'color'

describe('Button Component', () => {
  const createWrapper = (props = {}) => {
    return renderer
      .create(
        <ThemeProvider theme={{ BASE_SIZE: 1, UNIT: 'rem', color: { primary: 'blue' } }}>
          <Button {...props} />
        </ThemeProvider>
      )
      .toJSON()
  }
  it('Should render a div', () => {
    const w = createWrapper()
    expect(w.type).toEqual('button')
  })

  it('Should have a display of flex', () => {
    const w = createWrapper()
    expect(w).toHaveStyleRule('display', 'flex')
  })

  it('Should center everything inside the button', () => {
    const w = createWrapper()
    expect(w).toHaveStyleRule('align-items', 'center')
    expect(w).toHaveStyleRule('justify-content', 'space-around')
    expect(w).toHaveStyleRule('align-self', 'center')
  })

  it('Should set the padding of the button to 1 on the x axis and .5 on the y axis by default', () => {
    const w = createWrapper()
    expect(w).toHaveStyleRule('padding-right', '1rem')
    expect(w).toHaveStyleRule('padding-left', '1rem')
    expect(w).toHaveStyleRule('padding-top', '0.5rem')
    expect(w).toHaveStyleRule('padding-bottom', '0.5rem')
  })

  it('Should use padding passed as a prop over the defaults', () => {
    const w = createWrapper({ p: 2 })
    expect(w).toHaveStyleRule('padding', '2rem')
  })

  it('if an icon prop is passed it should set the justify-content attribute to space-between', () => {
    const w = createWrapper({ icon: 'test' })
    expect(w).toHaveStyleRule('justify-content', 'space-between')
  })

  it('Should use the as prop to create any element type', () => {
    const w = createWrapper({ as: 'a' })
    expect(w.type).toEqual('a')
  })

  it('Should take a content prop and set it to children', () => {
    const w = createWrapper({ content: 'test' })
    expect(w.children[0]).toEqual('test')
  })

  it('Should take a children prop', () => {
    const w = createWrapper({ children: 'Test' })
    expect(w.children[0]).toEqual('Test')
  })

  it('Should take a border property or use a default set to a darkened variation of the bg color', () => {
    const w = createWrapper({ border: '1px solid #f30' })
    expect(w).toHaveStyleRule('border', '1px solid #f30')
    const w2 = createWrapper({ bg: 'blue' })
    const bc = Color('blue')
      .darken(0.1)
      .hex()
    expect(w2).toHaveStyleRule('background-color', Color('blue').hex())
    expect(w2).toHaveStyleRule('border', `1px solid ${bc}`)
  })

  it('Should set the bg color to grey when the button is disabled', () => {
    const w = createWrapper({ disabled: true })
    expect(w).toHaveStyleRule('background-color', '#ccc', {
      modifier: '[disabled]'
    })
  })
})
