import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
const widthInPxs = {
  tiny: { width: '64px', height: '48px' },
  small: { width: '128px', height: '96px' },
  medium: { width: '256px', height: '192px' },
  large: { width: '512px', height: '384px' },
  huge: { width: '768px', height: '576px' },
  massive: { width: '1280px', height: '960px' }
}

function handleNonFluidWidth (props) {
  if (props.size) {
    return widthInPxs[props.size].width
  }
}

function handleNonFluidHeight (props) {
  if (props.size) {
    return widthInPxs[props.size].height
  }
}

const widthMixin = css`
  width: ${props => (props.fluid ? '100%' : handleNonFluidWidth(props))};
`
const thumbnailMixin = css`
  padding: 2px;
  border: 2px solid #e7e7e7;
  border-radius: 2px;
`

const StyledImage = styled.img`
  height: ${props => props.height || 'auto'};
  display: block;
  ${props =>
    props.centered &&
    `
    margin: auto;
  `}
  ${widthMixin} 
  ${props => props.thumbnail && thumbnailMixin};
`

const StyledBackgroundImage = styled.div.attrs({
  role: 'image',
  'aria-label': props => props.alt,
  title: props => props.title || null
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height || handleNonFluidHeight(props)};
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  ${widthMixin} ${props => props.thumbnail && thumbnailMixin};
`

const AnchorImage = ({ href, target, ...rest }) => (
  <a href={href} target={target}>
    <StyledImage {...rest} />
  </a>
)

const Image = props => {
  if (props.href) {
    return <AnchorImage {...props} />
  } else if (props.overlay) {
    return <StyledBackgroundImage {...props}>{props.overlay({ ...props })}</StyledBackgroundImage>
  }
  return <StyledImage {...props} />
}

Image.propTypes = {
  centered: PropTypes.bool,
  src: PropTypes.string.isRequired,
  srcset: PropTypes.string,
  href: PropTypes.string,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  fluild: PropTypes.bool,
  thumbnail: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge', 'massive'])
}

Image.defaultProps = {
  size: 'large'
}
export default Image
