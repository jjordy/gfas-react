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

export const borderTopRadiusMixin = css`
  ${props =>
    (props.rounded || props.theme.rounded) &&
    `
    border-top-right-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT};
    border-top-left-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT}; 
  `};
`

export const borderBottomRadiusMixin = css`
  ${props =>
    (props.rounded || props.theme.rounded) &&
    `
    border-bottom-right-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT};
    border-bottom-left-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT}; 
  `};
`

export const borderRightRadiusMixin = css`
  ${props =>
    (props.rounded || props.theme.rounded) &&
    `
    border-top-right-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT};
    border-bottom-right-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT}; 
  `};
`

export const borderLeftRadiusMixin = css`
  ${props =>
    (props.rounded || props.theme.rounded) &&
    `
    border-top-left-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT};
    border-bottom-left-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT}; 
  `};
`

export const borderRadiusMixin = css`
  ${props =>
    (props.rounded || props.theme.rounded) &&
    `
    border-radius: ${props.theme.BASE_SIZE / 3.8}${props.theme.UNIT};
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

export const size = css`
  width: ${props => props.size && props.size * props.theme.BASE_SIZE * 16}px;
  height: ${props => props.size && props.size * props.theme.BASE_SIZE * 16}px;
`

export const inputPaddingMixin = css`
  ${createRule(0.3, 'padding')} box-sizing: border-box;
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
  inputColorMixin,
  iconReverseColorMixin
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
