import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info'
import { Container, Header, Segment, Divider, Grid } from 'semantic-ui-react'

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