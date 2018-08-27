import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  spacing,
  createRule,
  borderRadiusMixin,
  backgroundColorMixin,
  textBasedOnColorMixin,
  iconReverseColorMixin
} from './mixins'
import withTheme from './withTheme'
import Icon, { Svg } from './Icon'
import { sharedPropTypes } from './sharedPropTypes'

const InlineWrapper = styled.div`
  display: inline-block;
`

const StyledLabel = styled.div`
  ${createRule(0.5, 'padding-right')}
  ${createRule(0.5, 'padding-left')}
  ${createRule(0.2, 'padding-top')}
  ${createRule(0.2, 'padding-bottom')}
  ${spacing}
  display: flex;
  align-items: center;
  vertical-align: middle;
  ${createRule(0.7, 'font-size')}
  font-weight: 700;
  ${textBasedOnColorMixin}
  ${borderRadiusMixin}
  ${backgroundColorMixin}

  & ${Svg} {
      ${iconReverseColorMixin};
  }
`
const ThemedLabel = withTheme(StyledLabel)

const Label = ({ icon, children, color, content, ...rest }) => (
  <InlineWrapper>
    <ThemedLabel color={color} {...rest}>
      {icon && <Icon icon={icon} mr={1} mb={0} color={color} />}
      {children || content}
    </ThemedLabel>
  </InlineWrapper>

)

Label.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  ...sharedPropTypes
}
export default Label