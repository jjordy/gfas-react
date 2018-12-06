import React from 'react'
import {
  Select,
  Button,
  Checkbox,
  Segment,
  Input,
  Text,
  Header,
  Icon,
  Flex
} from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const options = [
  { value: '1', name: 'Mississippi' },
  { value: '2', name: 'Alabama' },
  { value: '3', name: 'Florida' },
  { value: '4', name: 'Lousiana' },
  { value: '5', name: 'Arkansas' }
]

storiesOf('@jjordy/Layout/Select', module)
  .add('Default', () => (
    <Select
      options={options}
      name='test'
      label='Hello There'
      placeholder='yo.....'
    />
  ))
  .add('Error', () => (
    <Select
      options={options}
      name='test'
      label='Hello There'
      placeholder='Shit theres an error...'
      error
    />
  ))
  .add('Disabled', () => (
    <Select
      options={options}
      name='test'
      label='Disabled'
      placeholder='Im disabled'
      disabled
    />
  ))
  .add('Inline', () => (
    <Segment bg='primary' clearing>
      <Header dividing as='h4'>
        DO SOMETHING GREAT TODAY
      </Header>
      <Text small fg='grey' mb={2}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
        tempore saepe assumenda explicabo, magnam asperiores veritatis aliquid
        distinctio rem beatae corporis, sed laudantium blanditiis culpa esse
        nobis officia! Autem, voluptatibus? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Quam et soluta minima fuga aspernatur
        dignissimos recusandae blanditiis, ab nam velit animi iure fugit quo, a
        eaque consectetur accusantium, inventore eius.
      </Text>
      <Input
        inline={boolean('Inline', true)}
        name='FirstName'
        label='First Name'
        required
        message='This is your first name given to you by your family you carry this name your whole life.'
      />
      <Select
        options={options}
        name='test'
        label='Select an option'
        placeholder='johndoe@gmail.com'
        inline={boolean('Inline', true)}
        required
        message='Select an option here. This is where you select it, you can also select an option here. Just please select it please'
      />
      <Select
        options={options}
        name='test2'
        label='Select a second option with an even longer label'
        type='password'
        placeholder='*********'
        inline={boolean('Inline', true)}
      />
      <Flex align='center' justify='center'>
        <Checkbox name='agree' label='I Agree' bg='primary' mb={1} inline />
      </Flex>

      <Button
        float='right'
        children='SAVE'
        bg='primary'
        icon='chevron_right'
        labelPosition='right'
      />
    </Segment>
  ))
  .add('Hide Label', () => (
    <Select
      options={options}
      hideLabel
      label='Label Hidden'
      placeholder='Label Hidden...'
      name='test'
    />
  ))
  .add('Form Message', () => (
    <Select
      options={options}
      label='Name'
      message='You can decorate your form field with a messge.'
      name='test'
    />
  ))
  .add('Action w/ Icon', () => (
    <Select
      options={options}
      label='SSN'
      message='Enter your Social Security Number'
      action={action('Test')}
      actionIcon='eye'
    />
  ))
  .add('Action w/ Text', () => (
    <Select
      options={options}
      label='SSN'
      message='Enter your Social Security Number'
      action={() => (
        <Button onClick={action('Action clicked')}>
          <Icon icon='eye' />
        </Button>
      )}
    />
  ))
