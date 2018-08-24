import React from 'react'
import styled from 'styled-components'
import withTheme from './withTheme'
import { colorMixin, spacing, createRule } from './mixins'

const P = styled.p`
  font-size: 1rem;
  ${createRule(1, 'margin-bottom')}
  ${colorMixin}
  ${spacing};
`

const Strong = styled.strong`
  ${createRule(1, 'margin-bottom')}
  ${colorMixin};
  ${spacing};
`

const Small = styled.small`
  ${createRule(1, 'margin-bottom')}
  font-weight: ${props => props.bold ? 700 : 400};
  ${colorMixin} 
  ${spacing};
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
