import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import withTheme from '../withTheme'
import Color from 'color'
import {
  spacing,
  createRule,
  textBasedOnColorMixin,
  borderRadiusMixin,
  findColor,
  iconReverseColorMixin
} from '../mixins'
import { sharedPropTypes } from '../sharedPropTypes'
import Icon, { Svg } from '../Icon'

function handleDefault (props) {
  const darkGrey = Color(props.theme.colors.grey)
  return darkGrey.darken(0.2).hex()
}

const StyledHeader = styled.div`
  font-size: 1.5rem;
  font-weight: ${props => (props.strong ? 700 : 400)};
  ${spacing};
`
const StyledContent = styled.div`
  font-weight: ${props => (props.strong ? 700 : 400)};
  font-size: 0.9rem;
  p {
    margin-top: 0.5rem;
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
  ${spacing};
`
const ContentIcon = styled.div`
  border-radius: ${props => (props.circular ? '99px' : '0px')};
  margin-right: 1rem;
  & ${Svg} {
    ${iconReverseColorMixin};
  }
`

const StyledMessage = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => findColor(props).hex()};
  ${borderRadiusMixin}
  border: ${props =>
    `1.2px solid ${
      props.bg
        ? findColor(props)
          .darken(0.1)
          .hex()
        : handleDefault(props)
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
      <ContentContainer>
        {props.icon && (
          <ContentIcon {...props}>
            <Icon {...props} icon={props.icon} size={2} />
          </ContentIcon>
        )}
        {props.content || props.children}
      </ContentContainer>
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

ThemedMessage.defaultProps = {
  bg: 'lightGrey'
}

ThemedMessage.Header = ThemedHeader

ThemedMessage.Content = ThemedContent

ThemedMessage.Icon = ThemedContentIcon

ThemedMessage.displayName = 'Message'

export default ThemedMessage
