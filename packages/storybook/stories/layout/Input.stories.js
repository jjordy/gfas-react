import React from 'react'
import { Input, Button, Checkbox, Segment, Text, Header } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('@jjordy/Layout/Input', module)
  .add('Default', () => (
    <Input name='test' label='Hello There' placeholder='yo.....' required />
  ))
  .add('Error', () => (
    <Input
      name='test'
      label='Hello There'
      placeholder='Shit theres an error...'
      error
    />
  ))
  .add('Disabled', () => (
    <Input name='test' label='Disabled' placeholder='Im disabled' disabled />
  ))
  .add('Inline', () => (
    <Segment bg='primary' rounded={false}>
      <Header dividing as='h4'>
        DO SOMETHING GREAT TODAY
      </Header>
      <Text strong fg='grey' mb={2}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
        tempore saepe assumenda explicabo, magnam asperiores veritatis aliquid
        distinctio rem beatae corporis, sed laudantium blanditiis culpa esse
        nobis officia! Autem, voluptatibus? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Quam et soluta minima fuga aspernatur
        dignissimos recusandae blanditiis, ab nam velit animi iure fugit quo, a
        eaque consectetur accusantium, inventore eius.
      </Text>
      <div style={{ display: 'flex' }}>
        <Input
          name='test'
          label='Email'
          placeholder='johndoe@gmail.com'
          inline={boolean('Inline', true)}
          required
        />
        <Input
          name='test'
          label='Password'
          type='password'
          placeholder='*********'
          inline={boolean('Inline', true)}
        />
        <Checkbox
          name='agree'
          label='I Agree to the terms and conditions'
          color='primary'
        />
        <Button
          children='SAVE'
          color='primary'
          icon='chevron_right'
          labelPosition='right'
        />
      </div>
    </Segment>
  ))
  .add('Hide Label', () => (
    <Input
      hideLabel
      label='Label Hidden'
      placeholder='Label Hidden...'
      name='test'
    />
  ))
  .add('Form Message', () => (
    <Input
      label='Name'
      message='You can decorate your form field with a messge.'
      name='test'
    />
  ))
  .add('Action', () => (
    <Input
      label='SSN'
      message='Enter your Social Security Number'
      action={() => (
        <Button
          onClick={action('Action Clicked!!!')}
          icon='eye'
          labelPosition='right'
        />
      )}
    />
  ))
  .add('Action w/ Text', () => (
    <Input
      label='SSN'
      message='Enter your Social Security Number'
      action={() => (
        <Button
          onClick={action('Action clicked!!!')}
          icon='eye'
          labelPosition='right'
        >
          Test
        </Button>
      )}
    />
  ))
