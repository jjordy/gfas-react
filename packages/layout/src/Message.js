import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import withTheme from './withTheme'
import Color from 'color'
import { spacing, createRule, textBasedOnColorMixin } from './mixins'
import { sharedPropTypes } from './sharedPropTypes'
function handleDefault (props) {
  const darkGrey = Color(props.theme.colors.grey)
  return darkGrey.darken(0.2).hex()
}

const StyledHeader = styled.div`
  font-size: 1.3rem;
  font-weight: ${props => (props.strong ? 700 : 400)};
  ${createRule(0.5, 'margin-bottom')};
  ${spacing};
`
const StyledContent = styled.div`
  font-weight: ${props => (props.strong ? 700 : 400)};
  font-size: 0.9rem;
  ${createRule(0.5, 'margin-left')};
  ${createRule(0.5, 'margin-bottom')};
  p {
    ${createRule(0.5, 'margin')};
  }
`

const StyledButton = styled.button`
  background-color: transparent;
  ${createRule(1, 'padding')};
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
  ${spacing};
`
const ContentIcon = styled.div`
  border-radius: ${props => (props.circular ? '99px' : '0px')};
`

const StyledMessage = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.bg && props.bg.hex()};
  border-radius: ${props => (props.rounded ? '.28rem' : 0)};
  border: ${props =>
    `1.2px solid ${
      props.bg ? props.bg.darken(0.1).hex() : handleDefault(props)
    }`};
  box-sizing: border-box;
  ${createRule(1, 'margin-bottom')};
  ${createRule(1, 'padding-right')};
  ${createRule(1, 'padding-left')};
  ${createRule(0.5, 'padding-top')};
  ${spacing}
  & ${StyledHeader} {
      ${textBasedOnColorMixin}
  };
  & ${StyledContent} {
      ${textBasedOnColorMixin}
    };
  }
  
  &::after {
    clear: both;
  }
`

const Message = props => {
  return (
    <StyledMessage {...props} role='alert'>
      <ContentContainer>{props.content || props.children}</ContentContainer>
      {props.onClose && (
        <StyledButton onClick={props.onClose} ariaLabel='Close' type='button'>
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

ThemedHeader.displayName = 'Message.Header'
ThemedContent.displayName = 'Message.Content'
ThemedContentIcon.displayName = 'Message.Icon'

ThemedHeader.propTypes = {
  ...sharedPropTypes
}

ThemedContent.propTypes = {
  ...sharedPropTypes
}

ThemedContentIcon.propTypes = {
  ...sharedPropTypes
}

ThemedMessage.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  ...sharedPropTypes
}

ThemedMessage.Header = ThemedHeader

ThemedMessage.Content = ThemedContent

ThemedMessage.Icon = ThemedContentIcon

ThemedMessage.displayName = 'Message'

export default ThemedMessage
