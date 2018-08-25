import { css } from 'styled-components'

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
    ${console.log(props.color.luminosity())}
    stroke: ${
  props.color.luminosity() < 0.6 ? props.theme.colors.white : props.theme.colors.black
};
    fill: ${
  props.color.luminosity() < 0.6 ? props.theme.colors.white : props.theme.colors.black
};
    color
  `};
`

export const backgroundColorMixin = css`
  ${props =>
    props.color &&
    `
    background-color: ${
  props.inverted ? (props.color.darken(0.5).hex()) : props.color.hex()
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

function isDark (color) {
  return color.luminosity() >= 0.55
}

export const textBasedOnColorMixin = css`
  ${props =>
    props.color &&
    `
    color: ${
  props.color.luminosity() < 0.6
    ? handleDarkColor(props)
    : handleLightColor(props)
};
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
