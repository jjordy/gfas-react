import { css } from 'styled-components'

export const colorMixin = css``

export const backgroundColorsMixin = css``

export const widthMixin = css`
  width: ${props => props.fluid && '100%'};
`
