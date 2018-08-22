import React from 'react'
import { Divider, Container, Header, Code } from '@jjordy/layout'

export default function HeaderExamples () {
  return (
    <Container>
      <Header color='grey'>Divides up the page</Header>
      <Divider />
      <Code code='<Divider />' />
      <Header color='grey'>Dividers can also be hidden</Header>
      <Divider hidden />
      <Code code='<Divider hidden />' />
      <Header color='grey'>Dividers can also be fitted</Header>
      <Divider fitted />
      <Code code='<Divider hidden />' />
    </Container>
  )
}
