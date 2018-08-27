import React from 'react'
import { Text, Responsive } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'

storiesOf('@jjordy/Layout/Responsive', module).add(
  'Default',
  () => (
    <Responsive only='desktop'>
      <Text strong>
        Only On Desktop
      </Text>
    </Responsive>
  ),
  { notes: 'A Responsive Component' }
)
  .add('Mobile', () =>
    <Responsive only='mobile'>
      <Text strong>
      Only On Mobile
      </Text>
    </Responsive>
  )
  .add('Tablet', () =>
    <Responsive only='tablet'>
      <Text strong>
        Only On tablet
      </Text>
    </Responsive>
  )
