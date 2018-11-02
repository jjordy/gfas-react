import React from 'react'
import {
  pMixin,
  pyMixin,
  pxMixin,
  prMixin,
  plMixin,
  pbMixin,
  ptMixin,
  mMixin,
  myMixin,
  mrMixin,
  mlMixin,
  mbMixin,
  mtMixin,
  mxMixin
} from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import styled, { ThemeProvider } from 'styled-components'

const TestComponent = styled.div`
  ${pMixin}
  ${pyMixin}
  ${pxMixin}
  ${prMixin}
  ${plMixin}
  ${pbMixin}
  ${ptMixin}
  ${mMixin}
  ${myMixin}
  ${mrMixin}
  ${mlMixin}
  ${mbMixin}
  ${mtMixin}
  ${mxMixin}
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

describe('Spacing Mixins and Helper functions', () => {
  describe('Padding Mixins', () => {
    it('Should apply full padding', () => {
      const w = createWrapper({ p: 1 })
      expect(w).toHaveStyleRule('padding', '1rem')
    })

    it('Should apply padding to X axis', () => {
      const w = createWrapper({ px: 1 })
      expect(w).toHaveStyleRule('padding-right', '1rem')
      expect(w).toHaveStyleRule('padding-left', '1rem')
    })

    it('Should apply padding to the Y axis', () => {
      const w = createWrapper({ py: 1 })
      expect(w).toHaveStyleRule('padding-top', '1rem')
      expect(w).toHaveStyleRule('padding-bottom', '1rem')
    })

    it('Should apply padding to the right', () => {
      const w = createWrapper({ pr: 1 })
      expect(w).toHaveStyleRule('padding-right', '1rem')
    })

    it('Should apply padding to the left', () => {
      const w = createWrapper({ pl: 1 })
      expect(w).toHaveStyleRule('padding-left', '1rem')
    })

    it('Should apply padding to the top', () => {
      const w = createWrapper({ pt: 1 })
      expect(w).toHaveStyleRule('padding-top', '1rem')
    })

    it('Should apply padding to the bottom', () => {
      const w = createWrapper({ pb: 1 })
      expect(w).toHaveStyleRule('padding-bottom', '1rem')
    })
  })

  describe('Margin Mixins', () => {
    it('Should apply full margin', () => {
      const w = createWrapper({ m: 1 })
      expect(w).toHaveStyleRule('margin', '1rem')
    })

    it('Should apply margin to X axis', () => {
      const w = createWrapper({ mx: 1 })
      expect(w).toHaveStyleRule('margin-right', '1rem')
      expect(w).toHaveStyleRule('margin-left', '1rem')
    })

    it('Should apply margin to the Y axis', () => {
      const w = createWrapper({ my: 1 })
      expect(w).toHaveStyleRule('margin-top', '1rem')
      expect(w).toHaveStyleRule('margin-bottom', '1rem')
    })

    it('Should apply margin to the right', () => {
      const w = createWrapper({ mr: 1 })
      expect(w).toHaveStyleRule('margin-right', '1rem')
    })

    it('Should apply margin to the left', () => {
      const w = createWrapper({ ml: 1 })
      expect(w).toHaveStyleRule('margin-left', '1rem')
    })

    it('Should apply margin to the top', () => {
      const w = createWrapper({ mt: 1 })
      expect(w).toHaveStyleRule('margin-top', '1rem')
    })

    it('Should apply margin to the bottom', () => {
      const w = createWrapper({ mb: 1 })
      expect(w).toHaveStyleRule('margin-bottom', '1rem')
    })
  })
})
