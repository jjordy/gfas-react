import React from 'react'
import styled from 'styled-components'
import withTheme from './withTheme'
import { colorMixin, spacing } from './mixins'

const P = styled.p`
  font-size: 1rem;
  margin-bottom: .5rem;
  ${colorMixin}
  ${spacing}

`

const Strong = styled.strong`
  margin-bottom: .5rem;
  display: inline-block;
  ${colorMixin};
  ${spacing}
`

const Small = styled.small`
  display: .5rem;
  margin-bottom: 1rem;
  ${colorMixin};
  ${spacing}
`

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
