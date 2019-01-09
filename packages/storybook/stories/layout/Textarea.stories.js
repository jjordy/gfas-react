import React from 'react'
import { Textarea } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'

storiesOf('@jjordy/Layout/Textarea', module)
  .add('Default', () => (
    <Textarea name='test' label='Hello There' placeholder='yo.....' />
  ))
  .add('Error', () => (
    <Textarea
      name='test'
      label='Hello There'
      placeholder='Shit theres an error...'
      error
    />
  ))
  .add('Disabled', () => (
    <Textarea name='test' label='Disabled' placeholder='Im disabled' disabled />
  ))
