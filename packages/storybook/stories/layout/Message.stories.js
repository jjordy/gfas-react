import React from 'react'
import { Message, defaultTheme, Icon } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'

const colors = Object.keys(defaultTheme.colors).reduce((acc, curr) => {
  const key = curr.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase()
  })
  acc[key] = curr
  return acc
}, {})

storiesOf('@jjordy/Layout/Message', module)
  .add(
    'Default',
    () => (
      <Message onClose={action('CLOSE')} bg={select('Colors', colors, 'primary')}>
        <Message.Content>
          <Message.Header>Test</Message.Header>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam saepe dolorem cumque earum culpa blanditiis
          sequi? Pariatur vel debitis quasi molestiae iste in optio praesentium! Laboriosam ipsa voluptates enim
          excepturi?
        </Message.Content>
      </Message>
    ),
    { notes: 'An alert message' }
  )
  .add('Icon', () => (
    <Message onClose={action('CLOSE')} bg={select('Colors', colors, 'primary')}>
      <Message.Icon>
        <Icon icon='question' size={2} bg='white' />
      </Message.Icon>
      <Message.Content>
        <Message.Header>Test</Message.Header>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam saepe dolorem cumque earum culpa blanditiis
        sequi? Pariatur vel debitis quasi molestiae iste in optio praesentium! Laboriosam ipsa voluptates enim
        excepturi?
      </Message.Content>
    </Message>
  ))
