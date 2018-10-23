import React from 'react'
import { Label, defaultTheme } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

const colors = Object.keys(defaultTheme.colors).reduce((acc, curr) => {
  const key = curr.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase()
  })
  acc[key] = curr
  return acc
}, {})
storiesOf('@jjordy/Layout/Label', module)
  .add('Default', () => <Label>Default Label</Label>, { notes: 'An informative label' })
  .add('Color', () => <Label color={select('Color', colors, 'primary')}>Im a Label</Label>)
  .add('Icon', () => <Label icon='question'>Icon Label</Label>)
