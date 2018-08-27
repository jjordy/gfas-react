import React from 'react'
import { Text, defaultTheme } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs/react'

const colors = Object.keys(defaultTheme.colors).reduce((acc, curr) => {
  const key = curr.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase()
  })
  acc[key] = curr
  return acc
}, {})

storiesOf('@jjordy/Layout/Text', module)
  .add(
    'Default',
    () => (
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
        debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur
        quos ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet
        iusto?
      </Text>
    ),
    { notes: 'A thin wrapper around the p element' }
  )
  .add(
    'Strong',
    () => (
      <Text strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
        debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur
        quos ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet
        iusto?
      </Text>
    ),
    { notes: 'A thin wrapper around the p > strong element' }
  )
  .add(
    'Small',
    () => (
      <Text small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
        debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur
        quos ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet
        iusto?
      </Text>
    ),
    { notes: 'A thin wrapper around the p > strong element' }
  )
  .add(
    'Color',
    () => (
      <Text color={select('Color', colors, 'primary')}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
        debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur
        quos ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet
        iusto?
      </Text>
    ),
    { notes: 'A thin wrapper around the p > strong element' }
  )
