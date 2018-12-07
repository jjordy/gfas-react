import React from 'react'
import {
  findColor,
  bgMixin,
  fgMixin,
  iconReverseColorMixin,
  iconColorMixin,
  textBasedOnColorMixin,
  darkenBackgroundColorMixin,
  handleDarkColor,
  handleLightColor,
  backgroundColorMixin,
  inputColorMixin
} from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import styled, { ThemeProvider } from 'styled-components'
import Color from 'color'

const TestComponent = styled.div`
  ${bgMixin}
  ${fgMixin}
  ${textBasedOnColorMixin}
  ${iconColorMixin}
  &:hover {
    ${darkenBackgroundColorMixin}
  }
`

const SvgTestComponent = styled.svg`
  ${iconReverseColorMixin};
`

const theme = {
  BASE_SIZE: 1,
  UNIT: 'rem',
  colors: {
    white: '#FFF',
    black: '#222'
  }
}

const createWrapper = (props = {}, Component = TestComponent) => {
  return renderer
    .create(
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    )
    .toJSON()
}

describe('Color Mixins and Helper functions', () => {
  describe('Helper Functions', () => {
    describe('findColor helper function', () => {
      it('Should find the color from the theme if it exists', () => {
        expect(findColor({ bg: 'black', theme }).hex()).toEqual(
          Color(theme.colors.black).hex()
        )
      })

      it('Should accept bg or color props', () => {
        expect(findColor({ bg: 'black', theme }).hex()).toEqual(
          Color(theme.colors.black).hex()
        )
      })

      it('Should attempt to create color from passed value if no theme color', () => {
        expect(findColor({ bg: 'pink', theme }).hex()).toEqual(
          Color('pink').hex()
        )
      })

      it('Should return black if no default is passed and the color is bogus', () => {
        expect(findColor({ bg: 'bogusColor', theme }).hex()).toEqual(
          Color('black').hex()
        )
      })

      it('Should return a default color if one is passed as the second argument and the other checks dont pass', () => {
        expect(findColor({ bg: 'gobusColor', theme }, '#CCC').hex()).toEqual(
          Color('#CCC').hex()
        )
      })
    })

    describe('handleLightColor helper function', () => {
      it('Should return a default value of #222 when theres no inverted prop', () => {
        expect(handleLightColor({})).toEqual('#222')
      })

      it('When inverted should process the bg color and darken it by a value of 1', () => {
        expect(handleLightColor({ inverted: true, bg: '#FFF' })).toEqual(
          Color('#FFF')
            .darken(1)
            .hex()
        )
      })
    })

    describe('handleDarkColor helper function', () => {
      it('Should return a default value of #FFF when theres no inverted prop', () => {
        expect(handleDarkColor({})).toEqual('#FFF')
      })
      it('When inverted should process the bg color and lighten it by a value of 1', () => {
        expect(handleDarkColor({ inverted: true, bg: '#222' })).toEqual(
          Color('#222')
            .lighten(1)
            .hex()
        )
      })
    })
  })

  describe('Mixins', () => {
    it('bgMixin should set the background color', () => {
      const w = createWrapper({ bg: 'black ' })
      expect(w).toHaveStyleRule('background-color', '#000000')
    })

    it('fgMixin should set the color', () => {
      const w = createWrapper({ fg: 'black' })
      expect(w).toHaveStyleRule('color', '#222222')
    })

    it('textBasedOnColorMixin should set the text color to reverse the bg color', () => {
      const w = createWrapper({ bg: 'black' })
      expect(w).toHaveStyleRule('color', '#FFF')
    })

    it('iconColorMixin should set the fill', () => {
      const w = createWrapper({ bg: 'black' })
      expect(w).toHaveStyleRule('fill', '#222222')
    })

    it('iconReverseColorMixin should reverse the fill and stroke of the bg color', () => {
      const w = createWrapper({ bg: 'black' }, SvgTestComponent)
      expect(w).toHaveStyleRule('fill', '#FFF')
    })

    it('darkenBackgroundColorMixin should darken the background color and border', () => {
      const w = createWrapper({ bg: 'white' })
      expect(w).toHaveStyleRule(
        'background-color',
        Color('#FFF')
          .darken(0.2)
          .hex(),
        {
          modifier: ':hover'
        }
      )

      expect(w).toHaveStyleRule(
        'border',
        `1px solid ${Color('#FFF')
          .darken(0.3)
          .hex()}`,
        {
          modifier: ':hover'
        }
      )
    })

    it('inputColorMixin', () => {
      const C = styled.input`
        ${inputColorMixin};
      `
      const w = createWrapper({}, C)
      expect(w).toHaveStyleRule('color', '#CCC')
    })
  })
})
