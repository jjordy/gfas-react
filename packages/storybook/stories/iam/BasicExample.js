import React from 'react'
import { Header, Form, Input, Checkbox, Button, Segment, Dump, Icon } from '@jjordy/layout'
import { iamDisabled } from '@jjordy/iam'

const MyTestComponent = ({ policy }) => (
  <div>
    <Segment bg='blue' clearing>
      <Icon icon='checkbox_checked' />
      <Header dividing fg='blue' clearing>
        Basic Example Form Component
      </Header>
      <Form>
        <Input
          id='id_email'
          type='text'
          name='email'
          disabled={iamDisabled('email', policy.enabled)}
          label='Email'
          placeholder='email...'
        />
        <Input
          type='password'
          name='password'
          disabled={iamDisabled('password', policy.enabled)}
          label='Password'
          placeholder='password...'
        />
        <Checkbox disabled={iamDisabled('rememberMe', policy.enabled)} label='Remember Me' />
        <Button type='submit' content='Submit' disabled={iamDisabled('submit', policy.enabled)} float='right' />
      </Form>
    </Segment>
  </div>
)

export default MyTestComponent
