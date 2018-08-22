import { css } from 'styled-components'

export const colorMixin = css`
  ${props =>
    props.color &&
    `
    color: ${props.color.hex()};
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
    return props.color.lighten(0.5).hex()
  }
  return '#222'
}

function handleDarkColor (props) {
  if (props.inverted) {
    return props.color.lighten(0.5).hex()
  }
  return '#FFF'
}

export const textBasedOnColorMixin = css`
  ${props =>
    props.color &&
    `
    color: ${
  props.color.isDark() ? handleDarkColor(props) : handleLightColor(props)
};
  `};
`

export const darkenBackgroundColorMixin = css`
  ${props =>
    props.color &&
    `
    background-color: ${props.color.darken(0.1).hex()};
  `};
`

export const inputColorMixin = css`
  ${props =>
    props.theme &&
    `
    color: ${props.theme.darkGrey};
  `};
`
