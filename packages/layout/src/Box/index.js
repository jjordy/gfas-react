import styled from 'styled-components'
import {
  spacing,
  bgMixin,
  fgMixin,
  size,
  borderMixin,
  textBasedOnColorMixin,
  borderRadiusMixin,
  textAlignMixin,
  fluidMixin,
  floatMixin,
  flexMixin,
  invertedBgMixin
} from '../mixins'
import { sharedPropTypes } from '../sharedPropTypes'

const Box = styled.div.attrs(props => ({
  as: props.as ? props.as : 'div',
  size: props.size ? props.size * 10 : null
}))`
  box-sizing: border-box;
  ${flexMixin}
  ${spacing}
  ${bgMixin}
  ${fgMixin}
  ${size}
  ${borderMixin}
  ${textBasedOnColorMixin}
  ${borderRadiusMixin}
  ${textAlignMixin}
  ${fluidMixin}
  ${floatMixin}
  ${invertedBgMixin}
`

Box.propTypes = {
  ...sharedPropTypes
}

Box.displayName = 'Box'

export default Box
