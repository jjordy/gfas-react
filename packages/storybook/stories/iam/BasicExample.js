import React from 'react'
import { Header, Form, Input, Checkbox, Button, Container, Segment } from '@jjordy/layout'
import { iamDisabled } from '@jjordy/iam'

const MyTestComponent = ({ policy }) => (
  <Container text>
    <Segment attached='top' color='blue'>
      <Header dividing color='blue'>
        Basic Example Form Component
      </Header>
    </Segment>
    <Segment attached='bottom' clearing>
      <Form>
        <Input
          id='id_email'
          type='text'
          disabled={iamDisabled('email', policy.enabled)}
          label='Email'
          placeholder='email...'
        />
        <Input
          type='password'
          disabled={iamDisabled('password', policy.enabled)}
          label='Password'
          placeholder='password...'
        />
        <Checkbox disabled={iamDisabled('rememberMe', policy.enabled)} label='Remember Me' />
        <Button content='Submit' disabled={iamDisabled('submit', policy.enabled)} float='right' />
      </Form>
    </Segment>
  </Container>
)

export default MyTestComponent
