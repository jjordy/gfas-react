import React from 'react'
import styled from 'styled-components'
import withTheme from './withTheme'
import Color from 'color'
import { spacing, createRule } from './mixins'

function handleDefault (props) {
  const darkGrey = Color(props.theme.grey)
  return darkGrey.darken(0.2).hex()
}

function isDark (props) {
  return props.color && props.color.isDark()
}

const StyledHeader = styled.div`
  font-size: 1.3rem;
  font-weight: ${props => props.strong ? 700 : 400};
`
const StyledContent = styled.div`
  font-weight: ${props => props.strong ? 700 : 400};
  font-size: 0.9rem;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
`

const StyledButton = styled.button`
  background-color: transparent;
  padding: 1rem;
  align-self: flex-start;
  font-size: 1.2rem;
  cursor: pointer;
  color: #fff;
  outline: none;
  border: 0;
  margin: 0;
`

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  ${createRule(1, 'margin-bottom')};
  ${spacing}
`
const ContentIcon = styled.div`
  border-radius: ${props => (props.circular ? '99px' : '0px')};
`

const StyledMessage = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.color && props.color.hex()};
  border-radius: ${props => (props.rounded ? '.28rem' : 0)};
  border: ${props => `1.2px solid ${props.color ? props.color.darken(0.1).hex() : handleDefault(props)}`};
  box-sizing: border-box;
  ${createRule(1, 'margin-bottom')};
  ${createRule(1, 'padding-right')};
  ${createRule(1, 'padding-left')};
  ${createRule(0.5, 'padding-top')};
  ${spacing}
  & ${StyledHeader} {
    text-shadow: ${props => (isDark(props) ? 'none' : '1px 1px 1px #222')};
    color: ${props => {
    return isDark(props) ? 'props.color.darken(1).hex()' : '#FFF'
  }};
  }
  & ${StyledContent} {
      color:${props => (isDark(props) ? '#FFF' : '#222')}
    };
  }
  
  &::after {
    clear: both;
  }
`

const Message = props => {
  return (
    <StyledMessage {...props}>
      <ContentContainer>{props.content || props.children}</ContentContainer>
      {props.onClose && (
        <StyledButton onClick={props.onClose} ariaLabel='Close' role='button' type='button'>
          &#10006;
        </StyledButton>
      )}
    </StyledMessage>
  )
}

const ThemedHeader = withTheme(StyledHeader)

const ThemedMessage = withTheme(Message)

const ThemedContent = withTheme(StyledContent)

const ThemedContentIcon = withTheme(ContentIcon)

ThemedMessage.Header = ThemedHeader

ThemedMessage.Content = ThemedContent

ThemedMessage.Icon = ThemedContentIcon

export default ThemedMessage
