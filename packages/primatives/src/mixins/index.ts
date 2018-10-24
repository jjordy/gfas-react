import { css } from '../styled-components'
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
import SharedProps from '../types/SharedProps'

export const isBool = (v: boolean | string | null) => typeof v === 'boolean'

export const fluidMixin = css<SharedProps>`
  width: ${props => props.fluid && '100%'};
`
export const floatMixin = css<SharedProps>`
  float: ${props => (props.float ? props.float : null)};
`

export const borderTopRadiusMixin = css<SharedProps>`
  ${props =>
    (props.rounded || props.theme.rounded) &&
    `
    border-top-right-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT};
    border-top-left-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT}; 
  `};
`

export const borderBottomRadiusMixin = css<SharedProps>`
  ${props =>
    (props.rounded || props.theme.rounded) &&
    `
    border-bottom-right-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT};
    border-bottom-left-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT}; 
  `};
`

export const borderRightRadiusMixin = css<SharedProps>`
  ${props =>
    (props.rounded || props.theme.rounded) &&
    `
    border-top-right-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT};
    border-bottom-right-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT}; 
  `};
`

export const borderLeftRadiusMixin = css<SharedProps>`
  ${props =>
    (props.rounded || (!isBool(props.rounded) && props.theme.rounded)) &&
    `
    border-top-left-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT};
    border-bottom-left-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT}; 
  `};
`

export const borderRadiusMixin = css<SharedProps>`
  ${props =>
    ((!props.secondary && props.rounded) || (!props.secondary && !isBool(props.rounded) && props.theme.rounded)) &&
    `
    border-radius: ${props.theme.BASE_SIZE / 3.8}${props.theme.UNIT};
  `};
`

export const textAlignMixin = css<SharedProps>`
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

export const size = css<SharedProps>`
  width: ${props => props.size && props.size * props.theme.BASE_SIZE + props.theme.UNIT};
  height: ${props => props.size && props.size * props.theme.BASE_SIZE + props.theme.UNIT};
`

export const inputPaddingMixin = css<SharedProps>`
  ${createRule(0.3, 'padding')};
  box-sizing: border-box;
`

export const inputMarginMixin = css<SharedProps>`
  margin: ${props => `${props.theme.BASE_SIZE * 0.24}${props.theme.UNIT}`};
  box-sizing: border-box;
`

export const normalFontMixin = css<SharedProps>`
  font-family: inherit;
  font-weight: 400;
  font-size: 1rem;
`
export const heavyFontMixin = css<SharedProps>`
  font-family: inherit;
  font-weight: 700;
  font-size: 0.8rem;
`

export const spacing = css<SharedProps>`
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
  iconReverseColorMixin,
  iconColorMixin
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
