import React from 'react'
import { Container, Header, Segment, Button, Grid } from '@jjordy/layout'
import { Code } from 'gfas-component-utils'
import {
  FiAlertTriangle,
  FiCheckCircle,
  FiChevronRight
} from 'react-icons/fi'

export default function ButtonExamples () {
  return <Container>
    <Header color='grey' dividing>
        Buttons
    </Header>
    <Grid width='20%' gap={16} align='middle'>
      <Button>
        <Button.Content>Button</Button.Content>
        <Button.Icon>
          <FiAlertTriangle />
        </Button.Icon>
      </Button>
      <Button color='blue'>
        <Button.Content>Button</Button.Content>
        <Button.Icon>
          <FiCheckCircle />
        </Button.Icon>
      </Button>
      <Button color='green'>Button</Button>
      <Button color='orange'>Button</Button>
      <Button color='yellow'>Button</Button>
      <Button color='lightBlue'>Button</Button>
      <Button color='red'>Button</Button>
      <Button color='teal'>Button</Button>
      <Button color='black'>Button</Button>
    </Grid>
    <Code code={`
      <Button>
        <Button.Content>Button</Button.Content>
        <Button.Icon>
          <FiAlertTriangle />
        </Button.Icon>
      </Button>
      <Button color='blue'>
        <Button.Content>Button</Button.Content>
        <Button.Icon>
          <FiCheckCircle />
        </Button.Icon>
      </Button>
      <Button color='green'>Button</Button>
      <Button color='orange'>Button</Button>
      <Button color='yellow'>Button</Button>
      <Button color='lightBlue'>Button</Button>
      <Button color='red'>Button</Button>
      <Button color='teal'>Button</Button>
      <Button color='black'>Button</Button>
  `} />
    <Header dividing>Floated Button</Header>
    <Segment clearing>
      <Button float='right'>
        <Button.Content>Floated Right</Button.Content>
        <Button.Icon>
          <FiChevronRight />
        </Button.Icon>
      </Button>
      <Button float='left'>Floated Left</Button>
    </Segment>
    <Code code={`
    <Segment clearing>
      <Button float='right'>
          <Button.Content>Floated Right</Button.Content>
        <Button.Icon>
          <FiAlertTriangle />
        </Button.Icon>
      </Button>
      <Button float='left'>Floated Left</Button>
    </Segment>
`} />
    <Header dividing>Fluid Button</Header>
    <Segment>
      <Button fluid>
        <Button.Content>Im Fluid</Button.Content>
        <Button.Icon>
          <FiChevronRight />
        </Button.Icon>
      </Button>
    </Segment>
    <Code code={`
    <Segment>
      <Button fluid>
        <Button.Content>Im Fluid</Button.Content>
        <Button.Icon>
          <FiAlertTriangle />
        </Button.Icon>
      </Button>
    </Segment>
`} />

    <Header dividing>Rounded Button</Header>
    <Segment>
      <Button rounded>
        <Button.Content>Im round</Button.Content>
      </Button>
    </Segment>
    <Code code={`
    <Segment>
      <Button rounded>
        <Button.Content>Im Fluid</Button.Content>
        <Button.Icon>
          <FiAlertTriangle />
        </Button.Icon>
      </Button>
    </Segment>
`} />
  </Container>
}
