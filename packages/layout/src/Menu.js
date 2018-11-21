import PropTypes from 'prop-types'
import { spacing, borderRadiusMixin, createRule } from './mixins'
import withTheme from './withTheme'
import styled, { css } from 'styled-components'

const calculateWidth = props => {
  if (props.width) {
    return props.width
  }

  if (props.fluid) {
    return null
  }
  if (props.vertical) {
    return '15rem'
  }
  return null
}

const verticalItemPadding = css`
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
`

const horizontalItemPadding = css`
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const calculateItemPadding = props => {
  if (props.vertical) {
    return verticalItemPadding
  }
  return horizontalItemPadding
}

const MenuItem = styled.div`
  position: relative;
  vertical-align: middle;
  ${createRule(1, 'padding-right')};
  ${createRule(1, 'padding-left')};
  border-right: 1px solid #e7e7e7;
  ${spacing};
  background-color: ${props => (props.active ? 'rgba(0, 0, 0, 0.03)' : null)};
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`

const Menu = styled.div`
  ${createRule(1, 'margin-bottom')};
  border-bottom: ${props => props.secondary && '2px solid #ccc'};
  border: ${props => !props.secondary && '1px solid #e7e7e7'};
  display: flex;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  width: ${props => calculateWidth(props)};
  box-shadow: ${props =>
    !props.secondary && '0 1px 2px 0 rgba(34, 36, 38, 0.15)'};
  ${MenuItem} {
    ${props => calculateItemPadding(props)};
    border-right: ${props => (props.secondary ? 0 : 'inherit')};
  }
  ${spacing};
  ${borderRadiusMixin};
`

Menu.propTypes = {
  vertical: PropTypes.bool
}

const ThemedMenuItem = withTheme(MenuItem)
const ThemedMenu = withTheme(Menu)

ThemedMenu.displayName = 'Menu'

ThemedMenuItem.displayName = 'Menu.Item'

ThemedMenu.Item = ThemedMenuItem
export default ThemedMenu
