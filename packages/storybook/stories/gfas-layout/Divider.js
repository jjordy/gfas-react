import React from 'react'
import { Divider, Container, Header } from 'gfas-layout'
import { Code } from 'gfas-component-utils'

export default function HeaderExamples () {
  return (
    <Container>
      <Header color='grey'>Divides up the page</Header>
      <Divider />
      <Code code='<Divider />' />
      <Header color='grey'>Dividers can also be hidden</Header>
      <Divider hidden />
      <Code code='<Divider hidden />' />
    </Container>
  )
}
