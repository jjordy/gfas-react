import React from 'react'
import styled from 'styled-components'
import withTheme from './withTheme'
import { colorMixin, spacing } from './mixins'

const P = styled.p`
  font-size: 1rem;
  ${colorMixin} ${spacing};
`

const Strong = styled.strong`
  display: block;
  margin-bottom: 1rem;
  ${colorMixin} ${spacing};
`

Strong.defaultProps = {
  mb: 1
}

P.defaultProps = {
  mb: 1
}

const Small = styled.small`
  display: block;
  ${colorMixin} ${spacing};
`
Small.defaultProps = {
  mb: 1
}

const ThemedP = withTheme(P, 'black')

const ThemedSmall = withTheme(Small, 'black')

const ThemedStrong = withTheme(Strong, 'black')

export default function Text ({ strong, small, ...props }) {
  if (strong) {
    return <ThemedStrong {...props} />
  }
  if (small) {
    return <ThemedSmall {...props} />
  }
  return <ThemedP {...props} />
}
