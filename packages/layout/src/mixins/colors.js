import { css } from 'styled-components'
import Color from 'color'

export const findColor = (color, theme) => {
  try {
    if (theme && theme.colors && theme.colors[color]) {
      return Color(theme.colors[color])
    } else {
      return Color(color)
    }
  } catch {
    return Color()
  }
}

export const bgMixin = css`
  ${props =>
    (props.bg || props.color) &&
    `
    background-color: ${findColor(props.bg || props.color, props.theme).hex()};
  `};
`

export const fgMixin = css`
  ${props =>
    props.fg &&
    `
    color: ${findColor(props.fg, props.theme).hex()};
  `};
`

export const colorMixin = css`
  ${props =>
    props.color &&
    `
    color: ${props.color.hex()};
  `};
`

export const iconReverseColorMixin = css`
  ${props =>
    props.color &&
    `
    stroke: ${
  props.color.luminosity() < 0.6
    ? props.theme.colors.white
    : props.theme.colors.black
};
    fill: ${
  props.color.luminosity() < 0.6
    ? props.theme.colors.white
    : props.theme.colors.black
};
  `};
`

export const iconColorMixin = css`
  ${props =>
    props.color &&
    `
    fill: ${props.color.hex()};
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

function handleLightColor (props) {
  if (props.inverted) {
    return props.color.darken(1).hex()
  }
  return '#222'
}

function handleDarkColor (props) {
  if (props.inverted) {
    return props.color.lighten(1).hex()
  }
  return '#FFF'
}

export const textBasedOnColorMixin = css`
  ${props => props.bg ? `
    color: ${findColor(props.bg, props.theme).luminosity() < 0.6
    ? handleDarkColor(props) : handleLightColor(props)};
  ` : props.color && `
      color: ${findColor(props.color, props.theme).luminosity() < 0.6
    ? handleDarkColor(props) : handleLightColor(props)};
  `};
`

export const darkenBackgroundColorMixin = css`
  ${props =>
    props.color &&
    `
    background-color: ${props.color.darken(0.2).hex()};
  `};
`

export const inputColorMixin = css`
  ${props =>
    props.theme &&
    `
    color: ${props.theme.colors.grey};
  `};
`
