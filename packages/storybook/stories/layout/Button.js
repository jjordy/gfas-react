import React from 'react'
import { Divider, Container, Header, Segment, Button, Grid } from '@jjordy/layout'
import { Code } from 'gfas-component-utils'

export default function ButtonExamples () {
  return (
    <Container>
      {/* <Header>Buttons</Header> */}
      <Divider />
      <Grid width='10%' gap={16} align='middle'>
        <Button>Button</Button>
        <Button color='blue'>Button</Button>
        <Button color='green'>Button</Button>
        <Button color='orange'>Button</Button>
        <Button color='yellow'>Button</Button>
        <Button color='lightBlue'>Button</Button>
        <Button color='red'>Button</Button>
        <Button color='teal'>Button</Button>
        <Button color='black'>Button</Button>
      </Grid>
      <Code
        code={`
    <Button>Button</Button>
    <Button color='blue'>Button</Button>
    <Button color='green'>Button</Button>
    <Button color='orange'>Button</Button>
    <Button color='yellow'>Button</Button>
    <Button color='lightBlue'>Button</Button>
    <Button color='red'>Button</Button>
    <Button color='teal'>Button</Button>
    <Button color='black'>Button</Button>
  `}
      />
      <Header>Floated Button</Header>
      <Divider />
      <Segment clearing>
        <Button float='right'>Floated Right</Button>
        <Button float='left'>Floated Left</Button>
      </Segment>
      <Code
        code={`
  <Segment clearing>
    <Button float='right'>Floated Right</Button>
    <Button float='left'>Floated Left</Button>
  </Segment>
`}
      />
    </Container>
  )
}
