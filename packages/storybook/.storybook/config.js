import React from 'react'
import { configure, addDecorator } from '@storybook/react'

const req = require.context('../stories', true, /\.jsx?$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <div>{story()}</div>
))

configure(loadStories, module)