import { css } from '../styled-components'
import SharedProps from '../types/SharedProps'


export const colorMixin = css<SharedProps>`
  ${props =>
    props.color &&
    `
    color: ${props.color.hex()};
  `};
`

export const iconReverseColorMixin = css<SharedProps>`
  ${(props) =>
    props.color &&
    `
    stroke: ${
  props.color.luminosity() < 0.6 ? props.theme.colors.white : props.theme.colors.black
};
    fill: ${
  props.color.luminosity() < 0.6 ? props.theme.colors.white : props.theme.colors.black
};
  `};
`

export const iconColorMixin = css<SharedProps>`
  ${(props) =>
    props.color &&
    `
    fill: ${props.color.hex()};
  `};
`

export const backgroundColorMixin = css<SharedProps>`
  ${props =>
    props.color &&
    `
    background-color: ${
  props.inverted ? (props.color.darken(0.5).hex()) : props.color.hex()
};
  `};
`

function handleLightColor (props: SharedProps) {
  if (props.inverted) {
    return props.color.darken(1).hex()
  }
  return '#222'
}

function handleDarkColor (props: SharedProps) {
  if (props.inverted) {
    return props.color.lighten(1).hex()
  }
  return '#FFF'
}

export const textBasedOnColorMixin = css<SharedProps>`
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

export const darkenBackgroundColorMixin = css<SharedProps>`
  ${props =>
    props.theme.color &&
    `
    background-color: ${props.color.darken(0.2).hex()};
  `};
`

export const inputColorMixin = css<SharedProps>`
  ${props =>
    props.theme &&
    `
    color: ${props.theme.colors.grey};
  `};
`
