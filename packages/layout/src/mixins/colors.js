import { css } from 'styled-components'

export const colorMixin = css`
  ${props => props.color && `
    color: ${props.color.hex()};
  `}
`

export const backgroundColorMixin = css`
  ${props => props.color && `
    background-color: ${props.color.hex()};
  `}
`

export const textBasedOnColorMixin = css`
  ${props => props.color && `
    color: ${props.color.isDark() ? '#FFF' : '#222'};
  `}
`

export const darkenBackgroundColorMixin = css`
  ${props => props.color && `
    background-color: ${props.color.darken(0.1).hex()};
  `}
`

export const inputColorMixin = css`
  ${props => props.theme && `
    color: ${props.theme.darkGrey};
  `}
`
