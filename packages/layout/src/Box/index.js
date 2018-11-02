import styled from 'styled-components'
import {
  spacing,
  bgMixin,
  fgMixin,
  size,
  borderMixin,
  textBasedOnColorMixin,
  borderRadiusMixin,
  textAlignMixin
} from '../mixins'
import { sharedPropTypes } from '../sharedPropTypes'

const Box = styled.div.attrs({
  size: props => props.size * 10
})`
  box-sizing: border-box;
  ${spacing}
  ${bgMixin}
  ${fgMixin}
  ${size}
  ${borderMixin}
  ${textBasedOnColorMixin}
  ${borderRadiusMixin}
  ${textAlignMixin}
`

Box.propTypes = {
  ...sharedPropTypes
}

Box.displayName = 'Box'

export default Box
