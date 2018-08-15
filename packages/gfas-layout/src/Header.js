import React from 'react'
import styled, { css } from 'styled-components'
import ThemeContext from './Theme'
import Color from 'color'

const floatMixin = css`
  float: ${props => (props.float ? props.float : null)};
  margin-left: 0.5em;
`

const textAlignMixin = css`
  text-align: ${props => (props.textAlign ? props.textAlign : null)};
  ${props =>
    props.textAlign === 'justify' &&
    `
    &::after {
      display: inline-block;
      content: '';
      width: 100%;
    }
  `};
`

const headerMixin = css`
  padding: 0 0;
  font-weight: 700;
  line-height: 1.28em;
  text-transform: none;
  color: ${props => (props.color ? props.color.hex() : 'rgba(0, 0, 0, 0.87)')};
  ${floatMixin};
  ${textAlignMixin};
`

const Default = styled.div`
  ${headerMixin} font-size: 2rem;
  margin: calc(2rem - 0.14285714em) 0 1rem;
`
const H1 = styled.h1`
  ${headerMixin} font-size: 2.0rem;
  margin: calc(2rem - 0.14285714em) 0 1rem;
`
const H2 = styled.h2`
  ${headerMixin} font-size: 1.7rem;
  margin: calc(1.7rem - 0.14285714em) 0 1rem;
`

const H3 = styled.h3`
  ${headerMixin} font-size: 1.4rem;
  margin: calc(1.4rem - 0.14285714em) 0 1rem;
`

const H4 = styled.h4`
  ${headerMixin} font-size: 1.1rem;
  margin: calc(1.1rem - 0.14285714em) 0 1rem;
`

const H5 = styled.h5`
  ${headerMixin} font-size: .8rem;
  margin: calc(0.8rem - 0.14285714em) 0 1rem;
`

const H6 = styled.h6`
  ${headerMixin} font-size: .5rem;
  margin: calc(0.5rem - 0.14285714em) 0 1rem;
`

function Header ({ as = 'div', color, theme, ...rest }) {
  let colorObj = null
  if (color) {
    colorObj = Color(theme[color])
  }
  switch (as) {
    case 'div':
      return <Default {...rest} color={colorObj} />
    case 'h1':
      return <H1 {...rest} color={colorObj} />
    case 'h2':
      return <H2 {...rest} color={colorObj} />
    case 'h3':
      return <H3 {...rest} color={colorObj} />
    case 'h4':
      return <H4 {...rest} color={colorObj} />
    case 'h5':
      return <H5 {...rest} color={colorObj} />
    case 'h6':
      return <H6 {...rest} color={colorObj} />
    default:
      return <Default {...rest} />
  }
}

export default function ThemedHeader (props) {
  return <ThemeContext.Consumer>{theme => <Header {...props} theme={theme} />}</ThemeContext.Consumer>
}
