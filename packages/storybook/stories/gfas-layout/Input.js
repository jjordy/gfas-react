import React from 'react'
import { Divider, Container, Header, Form, Input, Segment, Button } from 'gfas-layout'
import { Code } from 'gfas-component-utils'
import { action } from '@storybook/react'

export default function InputExamples () {
  return (
    <Container text>
      <Header color='grey'>Simple Inputs</Header>
      <Divider />
      <Segment color='darkGrey' clearing>
        <Form onSubmit={action('FORM SUBMITTED')}>
          <Input label='Name' name='Given_Name' required placeholder='Given Name' />
          <Input label='Age' name='age' placeholder='Your Age' />
          <Input label='DOB' name='dob' placeholder='Date of Birth' />
          <Button float='right' color='black'>Submit</Button>
        </Form>
      </Segment>
      <Header color='grey'>Rounded Inputs</Header>
      <Divider />
      <Segment color='darkGrey' clearing rounded>
        <Header as='h4' dividing>Round is cascading meaning you round a parent segment it will round children like form inputs and buttons.</Header>
        <Form onSubmit={action('FORM SUBMITTED')}>
          <Input label='Name' name='Given_Name' required placeholder='Given Name' />
          <Input label='Age' name='age' placeholder='Your Age' />
          <Input label='DOB' name='dob' placeholder='Date of Birth' />
          <Button float='right' color='black'>Submit</Button>
        </Form>
      </Segment>
      <Code code={`
        <Segment color='darkGrey' clearing rounded>
          <Header as='h4' dividing>Round is cascading meaning you round a parent segment it will round children like form inputs and buttons.</Header>
          <Form onSubmit={action('FORM SUBMITTED')}>
            <Input label='Name' name='Given_Name' required placeholder='Given Name' />
            <Input label='Age' name='age' placeholder='Your Age' />
            <Input label='DOB' name='dob' placeholder='Date of Birth' />
            <Button float='right' color='black'>Submit</Button>
          </Form>
        </Segment>
      `} />
    </Container>
  )
}
