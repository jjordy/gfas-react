import React from 'react'
import { Loader, defaultTheme } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

const colors = Object.keys(defaultTheme.colors).reduce((acc, curr) => {
  const key = curr.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase()
  })
  acc[key] = curr
  return acc
}, {})

const loaderTypes = {
  puff: 'puff',
  rings: 'rings',
  audio: 'audio',
  oval: 'oval',
  bars: 'bars',
  'Three Dots': 'three-dots'
}

storiesOf('@jjordy/Layout/Loader', module)
  .add('Default', () => <Loader active />)
  .add('Colors', () => <Loader active color={select('Loader Colors', colors, 'primary')} />)
  .add('Alternate Loaders', () => <Loader active type={select('Loader Type', loaderTypes, 'puff')} />)
