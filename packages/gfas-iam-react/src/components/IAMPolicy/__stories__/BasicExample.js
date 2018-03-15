import React from 'react'
import { Header, Form } from 'semantic-ui-react'
import { iamDisabled } from '../'

const MyTestComponent = ({ policy }) => (
  <div>
    <Header dividing color='blue'>
      Basic Example Form Component
    </Header>
    <Form>
      <Form.Input
        id='id_email'
        type='text'
        disabled={iamDisabled('email', policy.enabled)}
        label='Email'
        placeholder='email...'
      />
      <Form.Input
        type='password'
        disabled={iamDisabled('password', policy.enabled)}
        label='Password'
        placeholder='password...'
      />
      <Form.Checkbox disabled={iamDisabled('rememberMe', policy.enabled)} label='Remember Me' />
      <Form.Button content='Submit' disabled={iamDisabled('submit', policy.enabled)} />
    </Form>
  </div>
)

export default MyTestComponent
