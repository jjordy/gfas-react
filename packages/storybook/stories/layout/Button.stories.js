import React from 'react'
import { Button, Grid, Segment } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import _ from 'lodash'
import { withTheme } from 'styled-components'
import { boolean } from '@storybook/addon-knobs'

const WithAllColors = ({ theme }) => (
  <Grid width='15%'>
    {_.times(Object.keys(theme.colors).length, i => (
      <Button bg={Object.keys(theme.colors)[i]}>
        {Object.keys(theme.colors)[i].toUpperCase()}
      </Button>
    ))}
  </Grid>
)

const ColoredButtons = withTheme(WithAllColors)

storiesOf('@jjordy/Layout/Button', module)
  .add('Default', () => <Button type='submit'>SUBMIT</Button>)
  .add('Fluid', () => <Button fluid>FLUID</Button>)
  .add('Colors', () => <ColoredButtons />)
  .add('Inverted', () => <Button inverted>INVERTED</Button>)
  .add('Icon', () => <Button icon='question' />)
  .add('Text w/ Icon', () => <Button icon='chevron_left'>GO BACK</Button>)
  .add('Floated', () => (
    <Segment clearing vertical>
      <Button float='right'>FLOATED RIGHT</Button>
    </Segment>
  ))
  .add('Disabled', () => (
    <Button bg='primary' disabled={boolean('Disable Button', true)}>
      Disabled Button
    </Button>
  ))
  .add('As', () => (
    <Button
      as='a'
      href='#'
      bg='primary'
      icon='chevron_right'
      labelPosition='right'
    >
      Button
    </Button>
  ))
