import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Divider from './Divider'
import withTheme from './withTheme'
import { sharedPropTypes } from './sharedPropTypes'

import { colorMixin, floatMixin, spacing, textAlignMixin, createRule } from './mixins'

export const headerStyles = css`
  padding: 0 0;
  font-weight: 700;
  line-height: 1.28em;
  text-transform: none;
  ${createRule(1, 'margin-top')};
  ${createRule(1, 'margin-bottom')};
  ${colorMixin};
  ${floatMixin};
  ${textAlignMixin};
  ${spacing};
`

const getSize = props => {
  switch (props.as) {
    case 'h1':
      return createRule(2.0, 'font-size')
    case 'h2':
      return createRule(1.8, 'font-size')
    case 'h3':
      return createRule(1.6, 'font-size')
    case 'h4':
      return createRule(1.4, 'font-size')
    case 'h5':
      return createRule(1.2, 'font-size')
    case 'h6':
      return createRule(1.0, 'font-size')
    default:
      return createRule(2.0, 'font-size')
  }
}

export const Default = styled.div`
  ${headerStyles};
  ${props => getSize(props)};

`

function Header ({ ...rest }) {
  return <Default {...rest} />
}

const ThemedHeader = withTheme(Header, 'black')

const DividedHeader = ({ color, ...rest }) => (
  <div>
    <ThemedHeader style={{ marginBottom: '.5rem' }} color={color} {...rest} />
    <Divider fitted color={color} />
  </div>
)

HeaderWithDivider.displayName = 'Header'

HeaderWithDivider.propTypes = {
  color: PropTypes.string,
  float: PropTypes.oneOf(['right']),
  dividing: PropTypes.bool,
  textAlign: PropTypes.oneOf(['right', 'center', 'left', 'justify']),
  ...sharedPropTypes
}

export default function HeaderWithDivider ({ dividing, ...props }) {
  return <React.Fragment>{dividing ? <DividedHeader {...props} /> : <ThemedHeader {...props} />}</React.Fragment>
}
