import React from 'react'
import { Icon, Grid } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs/react'
import { setOptions } from '@storybook/addon-options'

const defaultValue = 2
const options = {
  range: true,
  min: 1,
  max: 10,
  step: 1
}

const iconDefault = 'Icon Default'

storiesOf('@jjordy/Layout/Icon', module)
  .addDecorator(fn => {
    setOptions({
      selectedAddonPanel: 'storybooks/storybook-addon-knobs'
    })
    return fn()
  })
  .add(
    'Default',
    () => (
      <Grid width='10%' gap={8}>
        <Icon
          icon='question'
          size={number('Icon Size', defaultValue, options, iconDefault)}
        />
        <Icon
          icon='settings'
          size={number('Icon Size', defaultValue, options, iconDefault)}
        />
        <Icon
          icon='download'
          size={number('Icon Size', defaultValue, options, iconDefault)}
        />
        <Icon
          icon='school'
          size={number('Icon Size', defaultValue, options, iconDefault)}
        />
      </Grid>
    ),
    {
      notes: 'Icon Component'
    }
  )
  .add('Color', () => <Icon icon='question' bg='success' size={2} />)
  .add('Chevron Right', () => <Icon icon='chevron_right' size={2} />, {
    notes: 'Icon Component'
  })
  .add('Chevron Left', () => <Icon icon='chevron_left' size={2} />, {
    notes: 'Icon Component'
  })
  .add('Chevron Up', () => <Icon icon='chevron_up' size={2} />, {
    notes: 'Icon Component'
  })
  .add('Chevron Down', () => <Icon icon='chevron_down' size={2} />, {
    notes: 'Icon Component'
  })
  .add('Question', () => <Icon icon='question' size={2} />, {
    notes: 'Icon Component'
  })
  .add('Settings', () => <Icon icon='settings' size={2} />)
  .add('Download', () => <Icon icon='download' size={2} />)
  .add('School', () => <Icon icon='school' size={2} />)
  .add('Phone', () => <Icon icon='phone' size={2} />)
  .add('Eye', () => <Icon icon='eye' size={2} />)
  .add('Eye Slash', () => <Icon icon='eye_slash' size={2} />)
  .add('Search', () => <Icon icon='search' size={2} />)
  .add('Close', () => <Icon icon='close' size={2} />)
  .add('Check', () => <Icon icon='check' size={2} />)
  .add('User', () => <Icon icon='user' size={2} />)
