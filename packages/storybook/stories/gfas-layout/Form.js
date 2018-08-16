import React from 'react'
import { Divider, Container, Header, Form, Button, Input, Segment, Checkbox } from 'gfas-layout'
import { Code } from 'gfas-component-utils'
import { action } from '@storybook/addon-actions'

export default function FormExamples () {
  return (
    <Container>
      <Header color='grey'>Form Wrapper Component</Header>
      <Divider />
      <Segment clearing color='lightBlue'>
        <Form onSubmit={action('FORM SUBMITTED')}>
          <Input label='Name' name='Given_Name' />
          <Input label='Age' name='age' />
          <Input label='DOB' name='dob' />
          <Checkbox name='test' label='This is a checkbox!' checked />
          <Button float='right'>Submit</Button>
        </Form>
      </Segment>
      <Code code={`
        <Form onSubmit={action('FORM SUBMITTED')}>
          <Input label='Name' name='Given_Name' required rounded />
          <Input label='Age' name='age' required rounded />
          <Input label='DOB' name='dob' required rounded />
          <Button float='right'>Submit</Button>
        </Form>
      `} />
    </Container>
  )
}
