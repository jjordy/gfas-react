import React from 'react'
import styled from 'styled-components'
import withTheme from './withTheme'
import { fgMixin, spacing, createRule } from './mixins'

const P = styled.p`
  font-size: 1rem;
  ${createRule(1, 'margin-bottom')}
  ${fgMixin}
  ${spacing};
`
const ThemedP = withTheme(P, 'black')

export default function Text ({ strong, small, children, ...props }) {
  if (strong) {
    return (
      <ThemedP {...props}>
        <strong>{children}</strong>
      </ThemedP>
    )
  }
  if (small) {
    return (
      <ThemedP {...props}>
        <small>{children}</small>
      </ThemedP>
    )
  }
  return <ThemedP {...props} children={children} />
}
