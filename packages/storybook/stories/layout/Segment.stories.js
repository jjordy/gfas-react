import React from 'react'
import { Segment } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { select, boolean } from '@storybook/addon-knobs/react'

const attached = { top: 'top', center: true, bottom: 'bottom', off: false }

const segment1 = 'Segment 1'

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
          p={0}
          loading={boolean('Loading', false, segment1)}
          attached={select('Attached', attached, false, segment1)}
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
