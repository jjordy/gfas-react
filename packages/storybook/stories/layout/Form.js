import React from 'react'
import { Divider, Container, Header, Form, Button, Input, Segment, Checkbox, Grid, Select } from '@jjordy/layout'
import { Code } from 'gfas-component-utils'
import { action } from '@storybook/addon-actions'

export default function FormExamples () {
  return (
    <Container>
      <Header color='grey'>Form Wrapper Component</Header>
      <Divider />
      <Segment clearing color='lightBlue'>
        <Header as='h2' dividing>
          Please sign up
        </Header>
        <Form onSubmit={action('FORM SUBMITTED')}>
          <Grid width='33%' gap={16}>
            <Input label='Name' name='Given_Name' placeholder='Mike Honcho' required />
            <Input label='Age' name='age' placeholder='32' required />
            <Input label='Date of Birth' name='dob' placeholder='1/24/1986' required />
          </Grid>
          <Grid width='50%' gap={16} dontBreakOnMobile>
            <Input label='Address' name='age' placeholder='10467 Corporate Dr' required />
            <Input label='City' name='city' placeholder='Gulfport' required />
            <Select
              label='State'
              name='state'
              placeholder='MS'
              required
              options={[{ value: '1', name: 'Mississippi' }, { value: '2', name: 'Alabama' }, { value: '3', name: 'Louisiana' }]}
            />
            <Input label='Zip' name='zip' placeholder='39507' required />
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
