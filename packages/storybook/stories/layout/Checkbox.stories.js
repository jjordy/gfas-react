import React from 'react'
import { Box, Checkbox, Header } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('@jjordy/Layout/Checkbox', module)
  .add(
    'Default',
    () => (
      <Box rounded={false} p={3} textAlign='center' border='2px solid #f30'>
        <Checkbox label='Im a Checkbox' />
      </Box>
    ),
    { notes: 'Default uncontrolled checkbox' }
  )

  .add(
    'Controlled',
    () => (
      <Box rounded={false} p={3} textAlign='center' border='2px solid #f30'>
        <Header>Check out the knobs panel to toggle this checkbox</Header>
        <Checkbox label='Im a Checkbox' checked={boolean('Checked', false)} onChange={action('ON Change Called')} />
        <Checkbox label='Im a Checkbox' checked={boolean('Checked', false)} onChange={action('ON Change Called')} />
        <Checkbox label='Im a Checkbox' checked={boolean('Checked', false)} onChange={action('ON Change Called')} />
        <Checkbox label='Im a Checkbox' checked={boolean('Checked', false)} onChange={action('ON Change Called')} />
        <Checkbox label='Im a Checkbox' checked={boolean('Checked', false)} onChange={action('ON Change Called')} />
      </Box>
    ),
    { notes: 'Controlled Checkbox' }
  )
