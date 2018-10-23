import React from 'react'
import { Form, Input, Button, Checkbox } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

storiesOf('@jjordy/Layout/Form', module).add(
  'Default',
  () => (
    <Form onSubmit={action('SUBMIT')}>
      <Input type='text' name='email' label='Email address' />
      <Input type='password' name='password' label='Password' />
      <Checkbox name='agree' label='I Agree to the terms & conditions' mb={1} />
      <Button>SUBMIT</Button>
    </Form>
  ),
  { notes: 'A thin wrapper around the html form' }
)
