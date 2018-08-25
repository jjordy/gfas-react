import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info'

const req = require.context('../stories', true, /\.jsx?$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

setDefaults({
  inline: true
})

addDecorator(story => (
  <div>{story()}</div>
))

configure(loadStories, module)