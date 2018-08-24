import { css } from 'styled-components'
import {
  createRule,
  pxMixin,
  pyMixin,
  mxMixin,
  myMixin,
  pMixin,
  mMixin,
  mbMixin,
  mtMixin,
  pbMixin,
  ptMixin,
  plMixin,
  prMixin,
  mlMixin,
  mrMixin
} from './spacing'

export const fluidMixin = css`
  width: ${props => props.fluid && '100%'};
`
export const floatMixin = css`
  float: ${props => (props.float ? props.float : null)};
`
export const borderRadiusMixin = css`
  ${props =>
    props.rounded &&
    `
    border-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT}; 
  `};
`

export const textAlignMixin = css`
  text-align: ${props => (props.textAlign ? props.textAlign : null)};
  ${props =>
    props.textAlign === 'justify' &&
    `
    &::after {
      display: inline-block;
      content: '';
      width: 100%;
    }
  `};
`

export const inputPaddingMixin = css`
  ${createRule(0.3, 'padding')}
  box-sizing: border-box;
`

export const inputMarginMixin = css`
  margin: ${props => `${props.theme.BASE_SIZE * 0.48}${props.theme.UNIT}`};
  box-sizing: border-box;
`

export const normalFontMixin = css`
  font-family: inherit;
  font-weight: 400;
  font-size: 1rem;
`
export const heavyFontMixin = css`
  font-family: inherit;
  font-weight: 700;
  font-size: 1rem;
`

export const spacing = css`
  ${pxMixin}
  ${pyMixin}
  ${mxMixin}
  ${myMixin}
  ${pMixin}
  ${mMixin}
  ${mbMixin}
  ${mtMixin}
  ${pbMixin}
  ${ptMixin}
  ${plMixin}
  ${prMixin}
  ${mlMixin}
  ${mrMixin} 
`

export {
  backgroundColorMixin,
  colorMixin,
  textBasedOnColorMixin,
  darkenBackgroundColorMixin,
  inputColorMixin
} from './colors'

export {
  pxMixin,
  pyMixin,
  mxMixin,
  myMixin,
  pMixin,
  mMixin,
  mbMixin,
  mtMixin,
  pbMixin,
  ptMixin,
  createRule
} from './spacing'
