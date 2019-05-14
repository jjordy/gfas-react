import { css } from 'styled-components'
import toPath from 'lodash.topath'

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

export const isBool = v => typeof v === 'boolean'

export function getIn (obj, key, def, p = 0) {
  const path = toPath(key)
  while (obj && p < path.length) {
    obj = obj[path[p++]]
  }
  return obj === undefined ? def : obj
}

export const handleObjBorder = border => {
  let rule = ''
  if (border.top) {
    rule += ` border-top: ${border.top};`
  }

  if (border.bottom) {
    rule += ` border-bottom: ${border.bottom};`
  }

  if (border.right) {
    rule += ` border-right: ${border.right};`
  }

  if (border.left) {
    rule += ` border-left: ${border.left};`
  }
  return rule
}

export const handleSetBorder = (val, theme, handleObj = handleObjBorder) => {
  if (val && typeof val === 'string') {
    return `border: ${val}`
  } else if (val && typeof val === 'object') {
    return handleObj(val)
  } else if (!val && theme.border) {
    return theme.border
  }
  return ''
}

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
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  `};
`

export const borderBottomRadiusMixin = css`
  ${props =>
    (props.rounded || props.theme.rounded) &&
    `
    border-bottom-right-radius: ${props.theme.BASE_SIZE / 3.5}${
  props.theme.UNIT
};
    border-bottom-left-radius: ${props.theme.BASE_SIZE / 3.5}${
  props.theme.UNIT
};
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  `};
`

export const borderRightRadiusMixin = css`
  ${props =>
    (props.rounded || props.theme.rounded) &&
    `
    border-top-right-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT};
    border-bottom-right-radius: ${props.theme.BASE_SIZE / 3.5}${
  props.theme.UNIT
}; 
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  `};
`

export const borderLeftRadiusMixin = css`
  ${props =>
    (props.rounded || (!isBool(props.rounded) && props.theme.rounded)) &&
    `
    border-top-left-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT};
    border-bottom-left-radius: ${props.theme.BASE_SIZE / 3.5}${
  props.theme.UNIT
}; 
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  `};
`

export const borderRadiusMixin = css`
  ${props =>
    ((!props.secondary && props.rounded) ||
      (!props.secondary && !isBool(props.rounded) && props.theme.rounded)) &&
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

export const borderMixin = css`
  ${props => handleSetBorder(props.border, props.theme)};
`

export const size = css`
  width: ${props =>
    props.size && props.size * props.theme.BASE_SIZE + props.theme.UNIT};
  height: ${props =>
    props.size && props.size * props.theme.BASE_SIZE + props.theme.UNIT};
`

export const inputPaddingMixin = css`
  ${createRule(0.3, 'padding')};
  box-sizing: border-box;
`

export const inputMarginMixin = css`
  margin: ${props => `${props.theme.BASE_SIZE * 0.24}${props.theme.UNIT}`};
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
  font-size: 0.8rem;
`

export const flexMixin = css`
  ${props =>
    props.flex &&
    `
    flex: ${props.flex};
  `};
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
  textBasedOnColorMixin,
  darkenBackgroundColorMixin,
  inputColorMixin,
  iconReverseColorMixin,
  iconColorMixin,
  handleDarkColor,
  handleLightColor,
  bgMixin,
  fgMixin,
  findColor,
  invertedBgMixin,
  textReverseBasedOnColorMixin
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
  createRule,
  hasPaddingProp
} from './spacing'
