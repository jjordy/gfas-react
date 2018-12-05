import React from 'react'
import { Segment, defaultTheme } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { select, number, boolean } from '@storybook/addon-knobs/react'

const defaultMargin = 0
const defaultPadding = 1

const marginOptions = {
  range: true,
  min: 0,
  max: 5,
  step: 1
}

const paddingOptions = {
  range: true,
  min: 0,
  max: 5,
  step: 1
}

const attached = { top: 'top', center: true, bottom: 'bottom' }

const segment1 = 'Segment 1'

const colors = Object.keys(defaultTheme.colors).reduce((acc, curr) => {
  const key = curr.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase()
  })
  acc[key] = curr
  return acc
}, {})

storiesOf('@jjordy/Layout/Segment', module)
  .addDecorator(fn => {
    setOptions({
      selectedAddonPanel: 'storybooks/storybook-addon-knobs'
    })
    return fn()
  })
  .add(
    'Default',
    () => (
      <div>
        <Segment
          loading={boolean('Loading', false, segment1)}
          bg={select('Colors', colors, 'primary', segment1)}
          rounded={boolean('Rounded', false, segment1)}
          attached={select('Attached', attached, false, segment1)}
          m={number('Margin', defaultMargin, marginOptions, segment1)}
          p={number('Padding', defaultPadding, paddingOptions, segment1)}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            accusantium tempore voluptatibus iusto deserunt recusandae odio,
            officiis, voluptatem doloremque repellat voluptate ipsum deleniti
            consequatur nostrum dolorum, excepturi magnam molestiae ab?
          </p>
        </Segment>
      </div>
    ),
    { notes: 'Segment Component' }
  )
  .add('Attached', () => (
    <div>
      <Segment attached='top' bg='blue'>
        Attached Top
      </Segment>
      <Segment attached>Attached</Segment>
      <Segment attached='bottom'>Attached Bottom</Segment>
    </div>
  ))
