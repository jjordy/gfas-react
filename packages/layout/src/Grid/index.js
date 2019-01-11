import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import withTheme from '../withTheme'
import withBrowserType from '../withBrowserType'
import { sharedPropTypes } from '../sharedPropTypes'
import Box from '../Box'

const px = n => (typeof n === 'number' ? n + 'px' : n)

const FallbackGrid = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 768px) {
    display: block;
  }
`

const FallbackGridColumn = styled(Box)`
  width: ${props => props.width};
  padding: ${props => props.gap / 2}px;
  @media (max-width: 768px) {
    width: ${props => (props.dontBreakOnMobile ? props.width : '100%')};
  }
`

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(calc(${props => px(props.width)} - ${props => px(props.gap)}), 1fr)
  );
  grid-gap: ${props => px(props.gap)};
  align-items: ${props => props.align || null};
  grid-column: 1 / span 3;
  ${props =>
    !props.dontBreakOnMobile &&
    `@media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }`};
`

const ThemedGrid = withTheme(Grid)

ThemedGrid.displayName = 'Grid'

ThemedGrid.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  ...sharedPropTypes
}

ThemedGrid.defaultProps = {
  gap: 8
}

const GridWithFallback = React.forwardRef((props, ref) => {
  const browser = withBrowserType()
  if (props.legacy || (browser && browser.isIE)) {
    return (
      <FallbackGrid ref={ref}>
        {React.Children.map(props.children, child => (
          <FallbackGridColumn width={props.width} gap={props.gap}>
            {child}
          </FallbackGridColumn>
        ))}
      </FallbackGrid>
    )
  }
  return <ThemedGrid ref={ref} {...props} />
})

export default GridWithFallback
