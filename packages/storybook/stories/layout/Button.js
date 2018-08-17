import React from 'react'
import { Container, Header, Segment, Button, Grid } from '@jjordy/layout'
import { Code } from 'gfas-component-utils'

export default function ButtonExamples () {
  return (
    <Container>
      <Header color='grey' dividing>
        Buttons
      </Header>
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
      <Header dividing>Floated Button</Header>
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
      <Header dividing>Fluid Button</Header>
      <Segment>
        <Button fluid>Fluid</Button>
      </Segment>
      <Code
        code={`
      <Segment>
        <Button fluid>Fluid</Button>
      </Segment>
`}
      />
    </Container>
  )
}
