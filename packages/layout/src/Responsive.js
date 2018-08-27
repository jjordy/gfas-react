import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const showMobile = css`
  @media (max-width: 768px) {
    display: block;
  }
`

const hideMobile = css`
  @media (max-width: 768px) {
    display: none;
  }
`

const showTablet = css`
  @media (max-width: 1024px) and (min-width: 768px) {
    display: block;
  }
`

const hideTablet = css`
  @media (max-width: 1024px) and (min-width: 768px) {
    display: none;
  }
`

const showDesktop = css`
  @media (min-width: 1024px) {
    display: block;
  }
`

const hideDesktop = css`
  @media (min-width: 1024px) {
    display: none;
  }
`

const Responsive = styled.div`
  ${props =>
    props.only === 'mobile' &&
    `
    ${hideDesktop}
    ${hideMobile}
    ${showMobile}
  `};
  ${props =>
    props.only === 'desktop' &&
    `
    ${showDesktop}
    ${hideTablet}
    ${hideMobile}
  `};
  ${props =>
    props.only === 'tablet' &&
    `
    ${hideDesktop}
    ${showTablet}
    ${hideMobile}
  `};
`

Responsive.propTypes = {
  only: PropTypes.oneOf(['mobile', 'desktop', 'tablet'])
}

Responsive.displayName = 'Responsive'

export default Responsive
