import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Divider from './Divider'
import withTheme from './withTheme'
import { sharedPropTypes } from './sharedPropTypes'

import {
  colorMixin,
  floatMixin,
  spacing,
  textAlignMixin,
  createRule
} from './mixins'

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

export const Default = styled.div`
  ${headerStyles};
  ${createRule(2.0, 'font-size')};
`
const H1 = styled.h1`
  ${headerStyles};
  ${createRule(2.0, 'font-size')};
`
const H2 = styled.h2`
  ${headerStyles};
  ${createRule(1.8, 'font-size')};
`

const H3 = styled.h3`
  ${headerStyles};
  ${createRule(1.6, 'font-size')};
`

const H4 = styled.h4`
  ${headerStyles};
  ${createRule(1.4, 'font-size')};
`

const H5 = styled.h5`
  ${headerStyles};
  ${createRule(1.2, 'font-size')};
`

const H6 = styled.h6`
  ${headerStyles};
  ${createRule(1.0, 'font-size')};
`

function Header ({ as = 'div', ...rest }) {
  switch (as) {
    case 'div':
      return <Default {...rest} />
    case 'h1':
      return <H1 {...rest} />
    case 'h2':
      return <H2 {...rest} />
    case 'h3':
      return <H3 {...rest} />
    case 'h4':
      return <H4 {...rest} />
    case 'h5':
      return <H5 {...rest} />
    case 'h6':
      return <H6 {...rest} />
    default:
      return <Default {...rest} />
  }
}

const ThemedHeader = withTheme(Header, 'black')

const DividedHeader = ({ color, ...rest }) => (
  <div>
    <ThemedHeader style={{marginBottom: '.5rem'}} color={color} {...rest} />
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
  return (
    <React.Fragment>
      {dividing ? <DividedHeader {...props} /> : <ThemedHeader {...props} />}
    </React.Fragment>
  )
}
