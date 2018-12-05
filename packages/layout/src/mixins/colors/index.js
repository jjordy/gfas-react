import { css } from 'styled-components'
import Color from 'color'
import { getIn } from '../.'

export const findColor = (props, def = '#000') => {
  const c = props.bg || props.color
  try {
    if (props.theme && props.theme.colors && props.theme.colors[c]) {
      return Color(props.theme.colors[c])
    } else {
      return Color(c)
    }
  } catch {
    return Color(def)
  }
}

export const findFgColor = (props, def = '#000') => {
  const c = props.fg || props.color
  try {
    if (props.theme && props.theme.colors && props.theme.colors[c]) {
      return Color(props.theme.colors[c])
    } else {
      return Color(c)
    }
  } catch {
    return Color(def)
  }
}

export const bgMixin = css`
  ${props =>
    props.bg &&
    `
    background-color: ${findColor(props).hex()};
  `};
`

export const fgMixin = css`
  ${props =>
    props.fg &&
    `
    color: ${findFgColor(props).hex()};
  `};
`

export const iconReverseColorMixin = css`
  ${props =>
    (props.color || props.bg) &&
    `
    stroke: ${findColor(props).luminosity() < 0.6 ? '#FFF' : '#000'};
    fill: ${findColor(props).luminosity() < 0.6 ? '#FFF' : '#000'};
  `};
`

export const iconColorMixin = css`
  ${props =>
    (props.color || props.bg) &&
    `
    fill: ${findColor(props).hex()};
  `};
`

export const backgroundColorMixin = css`
  ${props =>
    props.color &&
    `
    background-color: ${
  props.inverted ? props.color.darken(0.5).hex() : props.color.hex()
};
  `};
`

export function handleLightColor (props) {
  if (props.inverted) {
    return findColor(props)
      .darken(1)
      .hex()
  }
  return '#222'
}

export function handleDarkColor (props) {
  if (props.inverted) {
    return findColor(props)
      .lighten(1)
      .hex()
  }
  return '#FFF'
}

export const textBasedOnColorMixin = css`
  ${props =>
    props.bg
      ? `
    color: ${
  findColor(props).luminosity() < 0.6
    ? handleDarkColor(props)
    : handleLightColor(props)
};
  `
      : props.color &&
        `
      color: ${
  findColor(props).luminosity() < 0.6
    ? handleDarkColor(props)
    : handleLightColor(props)
};
  `};
`

export const darkenBackgroundColorMixin = css`
  ${props =>
    (props.color || props.bg) &&
    `
    background-color: ${findColor(props)
    .darken(0.2)
    .hex()};
    border: 1px solid ${findColor(props)
    .darken(0.3)
    .hex()};
  `};
`

export const inputColorMixin = css`
  ${props =>
    props.theme &&
    `
    color: ${getIn(props.theme, 'colors.grey', '#CCC')};
  `};
`
