import React from 'react'
import { Divider, Container, Header, Form, Button, Input, Segment, Checkbox, Grid } from '@jjordy/layout'
import { Code } from 'gfas-component-utils'
import { action } from '@storybook/addon-actions'

export default function FormExamples () {
  return (
    <Container>
      <Header color='grey'>Form Wrapper Component</Header>
      <Divider />
      <Segment clearing color='lightBlue'>
        <Header as='h3' dividing>
          Please sign up
        </Header>
        <Form onSubmit={action('FORM SUBMITTED')}>
          <Grid width='10%' gap={4}>
            <Input label='Name' name='Given_Name' />
            <Input label='Age' name='age' />
            <Input label='DOB' name='dob' />
          </Grid>
          <Checkbox name='test' label='This is a checkbox!' />
          <Button float='right'>Submit</Button>
        </Form>
      </Segment>
      <Code
        code={`
      /* NOTE the segment colors the corresponding children elements */
      <Segment clearing color='blue'>
        <Form onSubmit={action('FORM SUBMITTED')}>
          <Input label='Name' name='Given_Name' />
          <Input label='Age' name='age' />
          <Input label='DOB' name='dob' />
          <Checkbox name='test' label='This is a checkbox!' />
          <Button float='right'>Submit</Button>
        </Form>
      </Segment>
      `}
      />
    </Container>
  )
}
