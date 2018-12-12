import React from 'react'
import {
  isBool,
  getIn,
  // handleObjBorder,
  handleSetBorder,
  fluidMixin,
  floatMixin,
  borderRadiusMixin,
  borderTopRadiusMixin,
  borderBottomRadiusMixin,
  borderRightRadiusMixin,
  borderLeftRadiusMixin,
  textAlignMixin,
  borderMixin,
  size,
  heavyFontMixin,
  normalFontMixin,
  inputMarginMixin
} from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import styled, { ThemeProvider } from 'styled-components'

const TestComponent = styled.div`
  ${fluidMixin};
  ${floatMixin};
  ${borderRadiusMixin};
  ${textAlignMixin};
  ${borderMixin};
  ${size};
  ${normalFontMixin};
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

describe('General Mixins and Helper functions', () => {
  describe('Helper Functions', () => {
    it('isBool should let us know if the value is a boolean or not', () => {
      expect(isBool(false)).toBe(true)
      expect(isBool('false')).toBe(false)
    })

    describe('getIn Function', () => {
      it('getIn Function should return a nested object path based on dot notation', () => {
        expect(
          getIn({ test: { a: { b: { c: 'Hey' } } } }, 'test.a.b.c')
        ).toEqual('Hey')
      })

      it('getIn function should return the passed default value if the search value doesnt exist', () => {
        expect(
          getIn({ test: { a: { b: { c: 'Hey' } } } }, 'test.a.b.d', 'Default')
        ).toEqual('Default')
      })
    })

    // describe('handleObjBorder function', () => {
    //   it('Should set the border based on an object passing each side', () => {
    //     const t = handleObjBorder({ top: '1px solid #e7e7e7', bottom: '1px solid #e6e6e6' })
    //     expect(t).toEqual(expect.stringContaining(' border-top: 1px solid #e7e7e7; border-bottom: 1px soild #e6e6e6;'))
    //   })
    // })

    describe('handleSetBorder helper function', () => {
      it('Should set a string based border', () => {
        expect(handleSetBorder('1px solid #e7e7e7')).toEqual(
          'border: 1px solid #e7e7e7'
        )
      })

      it('Should call off to handle the object border if one is passed', () => {
        const h = jest.fn() // eslint-disable-line
        expect(h).toHaveBeenCalledTimes(0)
        handleSetBorder({ top: '1px solid #ccc' }, theme, h)
        expect(h).toHaveBeenCalledTimes(1)
      })

      it('Should use the theme property if one exists', () => {
        const w = handleSetBorder(
          null,
          Object.assign({}, theme, { border: '1px solid #e7e7e7' })
        )
        expect(w).toEqual('1px solid #e7e7e7')
      })
    })

    describe('Mixins', () => {
      it('Float mixin should float the item based on the property', () => {
        const w = createWrapper({ float: 'right' })
        expect(w).toHaveStyleRule('float', 'right')
      })

      it('Fluid mixin should set the width to 100%', () => {
        const w = createWrapper({ fluid: true })
        expect(w).toHaveStyleRule('width', '100%')
      })

      it('Border mixin should set the border', () => {
        const w = createWrapper({ border: '1px solid #e7e7e7' })
        expect(w).toHaveStyleRule('border', '1px solid #e7e7e7')

        const w2 = createWrapper({ border: { top: '1px solid #e7e7e7' } })
        expect(w2).toHaveStyleRule('border-top', '1px solid #e7e7e7')
      })

      describe('Border radius mixins', () => {
        it('border radius should set overall border radius on rounded prop', () => {
          const w = createWrapper({ rounded: true })
          expect(w).toHaveStyleRule(
            'border-radius',
            `${theme.BASE_SIZE / 3.8}${theme.UNIT}`
          )
        })

        it('borderTopRadiusMixin should only set top border radius', () => {
          const C = styled.div`
            ${borderTopRadiusMixin};
          `
          const w = createWrapper({ rounded: true }, C)
          expect(w).toHaveStyleRule(
            'border-top-right-radius',
            `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
          )
          expect(w).toHaveStyleRule(
            'border-top-left-radius',
            `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
          )
          expect(w).toHaveStyleRule('border-bottom-right-radius', '0px')
          expect(w).toHaveStyleRule('border-bottom-left-radius', '0px')
        })

        it('borderBottomRadiusMixin should only set top border radius', () => {
          const C = styled.div`
            ${borderBottomRadiusMixin};
          `
          const w = createWrapper({ rounded: true }, C)
          expect(w).toHaveStyleRule(
            'border-bottom-right-radius',
            `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
          )
          expect(w).toHaveStyleRule(
            'border-bottom-left-radius',
            `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
          )
          expect(w).toHaveStyleRule('border-top-right-radius', '0px')
          expect(w).toHaveStyleRule('border-top-left-radius', '0px')
        })

        it('borderRightRadiusMixin should only set top border radius', () => {
          const C = styled.div`
            ${borderRightRadiusMixin};
          `
          const w = createWrapper({ rounded: true }, C)
          expect(w).toHaveStyleRule(
            'border-bottom-right-radius',
            `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
          )
          expect(w).toHaveStyleRule(
            'border-top-right-radius',
            `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
          )
          expect(w).toHaveStyleRule('border-top-left-radius', '0px')
          expect(w).toHaveStyleRule('border-bottom-left-radius', '0px')
        })

        it('borderLeftRadiusMixin should only set top border radius', () => {
          const C = styled.div`
            ${borderLeftRadiusMixin};
          `
          const w = createWrapper({ rounded: true }, C)
          expect(w).toHaveStyleRule(
            'border-bottom-left-radius',
            `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
          )
          expect(w).toHaveStyleRule(
            'border-top-left-radius',
            `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
          )
          expect(w).toHaveStyleRule('border-top-right-radius', '0px')
          expect(w).toHaveStyleRule('border-bottom-right-radius', '0px')
        })
      })
      describe('Text Alignment', () => {
        it('textAlignMixin should set the text alignment', () => {
          const w = createWrapper({ textAlign: 'center' })
          expect(w).toHaveStyleRule('text-align', 'center')
        })

        it('textAlignMixin should handle text justify', () => {
          const w = createWrapper({ textAlign: 'justify' })
          expect(w).toHaveStyleRule('content', '\'\'', {
            modifier: '::after'
          })

          expect(w).toHaveStyleRule('display', 'inline-block', {
            modifier: '::after'
          })

          expect(w).toHaveStyleRule('width', '100%', {
            modifier: '::after'
          })
        })
      })

      describe('Font Mixins', () => {
        it('normal font mixin should set the font weight 400 and the font family to inherit', () => {
          const w = createWrapper({})
          expect(w).toHaveStyleRule('font-weight', '400')
          expect(w).toHaveStyleRule('font-family', 'inherit')
          expect(w).toHaveStyleRule('font-size', '1rem')
        })

        it('normal font mixin should set the font weight 400 and the font family to inherit', () => {
          const C = styled.div`
            ${heavyFontMixin};
          `
          const w = createWrapper({}, C)
          expect(w).toHaveStyleRule('font-weight', '700')
          expect(w).toHaveStyleRule('font-family', 'inherit')
          expect(w).toHaveStyleRule('font-size', '0.8rem')
        })
      })

      describe('Input Mixins', () => {
        it('inputMarginMixin should set some margins', () => {
          const C = styled.input`
            ${inputMarginMixin};
          `
          const w = createWrapper({}, C)
          expect(w).toHaveStyleRule(
            'margin',
            `${theme.BASE_SIZE * 0.24}${theme.UNIT}`
          )
        })
      })

      it('Size mixin should set the width and height based on the BASE_SIZE and UNIT', () => {
        const w = createWrapper({ size: 1 })
        expect(w).toHaveStyleRule('width', '1rem')
        expect(w).toHaveStyleRule('height', '1rem')
      })
    })
  })
})
