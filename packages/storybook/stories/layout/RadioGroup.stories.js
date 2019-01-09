import React from 'react'
import { RadioGroup } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'

storiesOf('@jjordy/Layout/RadioGroup', module).add('Default', () => (
  <RadioGroup
    name='Test'
    value='test2'
    label='Nice Clean Label'
    fluid
    id='test'
    options={[
      { label: 'Hey this is option number 1', value: 'test' },
      { label: 'Hey this is option number 2', value: 'test2' }
    ]}
  />
))
