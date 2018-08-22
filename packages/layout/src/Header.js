import React from 'react'
import styled, { css } from 'styled-components'
import Divider from './Divider'
import withTheme from './withTheme'

import {
  colorMixin,
  floatMixin,
  spacing,
  textAlignMixin
} from './mixins'

export const headerStyles = css`
  padding: 0 0;
  font-weight: 700;
  line-height: 1.28em;
  text-transform: none;
  ${colorMixin}
  ${floatMixin};
  ${textAlignMixin};
  ${spacing}
`

export const Default = styled.div`
  ${headerStyles}
  ${props => `
    font-size: ${props.theme.BASE_SIZE * 3.5}${props.theme.UNIT};
  `}

`
const H1 = styled.h1`
  ${headerStyles}
  ${props => `
    font-size: ${props.theme.BASE_SIZE * 3.5}${props.theme.UNIT};
  `}
`
const H2 = styled.h2`
  ${headerStyles}
  ${props => `
    font-size: ${props.theme.BASE_SIZE * 3.0}${props.theme.UNIT};
  `}
`

const H3 = styled.h3`
  ${headerStyles}
  ${props => `
    font-size: ${props.theme.BASE_SIZE * 2.5}${props.theme.UNIT};
  `}
`

const H4 = styled.h4`
  ${headerStyles}
  ${props => `
    font-size: ${props.theme.BASE_SIZE * 2.0}${props.theme.UNIT};
  `}
`

const H5 = styled.h5`
  ${headerStyles}
  ${props => `
    font-size: ${props.theme.BASE_SIZE * 1.5}${props.theme.UNIT};
  `}
`

const H6 = styled.h6`
  ${headerStyles}
  ${props => `
    font-size: ${props.theme.BASE_SIZE}${props.theme.UNIT};
  `}
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

const ThemedHeader = withTheme(Header, '#000')

const DividedHeader = (props) => (
  <div>
    <ThemedHeader {...props} />
    <Divider fitted />
  </div>
)

export default function HeaderWithDivider ({ dividing, ...props }) {
  return (
    <React.Fragment>
      {dividing ? <DividedHeader {...props} /> : <ThemedHeader {...props} />}
    </React.Fragment>
  )
}
