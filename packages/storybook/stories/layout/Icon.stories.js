import React from 'react'
import { Icon } from '@jjordy/layout'
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
      <Icon
        icon='question'
        color='success'
        size={number('Icon Size', defaultValue, options, iconDefault)}
      />
    ),
    {
      notes: 'Icon Component'
    }
  )
  .add('Color', () => <Icon icon='question' color='primary' size={2} />)
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
