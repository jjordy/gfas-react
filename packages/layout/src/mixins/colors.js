import { css } from 'styled-components'
import Color from 'color'

export const findColor = (props) => {
  const c = props.bg || props.color
  try {
    if (props.theme && props.theme.colors && props.theme.colors[c]) {
      return Color(props.theme.colors[c])
    } else {
      return Color(props.color)
    }
  } catch {
    return Color()
  }
}

export const bgMixin = css`
  ${props =>
    (props.bg || props.color) &&
    `
    background-color: ${findColor(props).hex()};
  `};
`

export const fgMixin = css`
  ${props =>
    props.fg &&
    `
    color: ${findColor(props).hex()};
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
    color: ${findColor(props).luminosity() < 0.6
    ? handleDarkColor(props) : handleLightColor(props)};
  ` : props.color && `
      color: ${findColor(props).luminosity() < 0.6
    ? handleDarkColor(props) : handleLightColor(props)};
  `};
`

export const darkenBackgroundColorMixin = css`
  ${props =>
    (props.color || props.bg) &&
    `
    background-color: ${findColor(props).darken(0.2).hex()};
    border: 1px solid ${findColor(props).darken(0.3).hex()};
  `};
`

export const inputColorMixin = css`
  ${props =>
    props.theme &&
    `
    color: ${props.theme.colors.grey};
  `};
`
