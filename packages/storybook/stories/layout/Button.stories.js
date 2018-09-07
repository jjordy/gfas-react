import React from 'react'
import { Button, Grid, withTheme, Segment } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import _ from 'lodash'
import { boolean } from '@storybook/addon-knobs'

const WithAllColors = ({ theme }) => (
  <Grid width='15%'>
    {_.times(Object.keys(theme.colors).length, i => (
      <Button color={Object.keys(theme.colors)[i]}>{Object.keys(theme.colors)[i].toUpperCase()}</Button>
    ))}
  </Grid>
)

const ColoredButtons = withTheme(WithAllColors)

storiesOf('@jjordy/Layout/Button', module)
  .add('Default', () => <Button>SUBMIT</Button>)
  .add('Fluid', () => <Button fluid>FLUID</Button>)
  .add('Colors', () => <ColoredButtons />)
  .add('Inverted', () => <Button inverted>INVERTED</Button>)
  .add('Icon', () => <Button icon='question' />)
  .add('Text w/ Icon', () => <Button icon='chevron_left'>GO BACK</Button>)
  .add('Padding', () => (
    <Grid width='50%' gap={16}>
      <Button>BUTTON</Button>
      <Button p={1}>IM PADDED MORE</Button>
    </Grid>
  ))
  .add('Margin', () => (
    <Grid width='50%' gap={16} style={{ backgroundColor: '#e7e7e7' }}>
      <Button m={1}>I HAVE LOTS OF SPACE AROUND ME</Button>
      <div>More content</div>
    </Grid>
  ))
  .add('Not Rounded', () => (
    <Button icon='chevron_left' rounded={false}>
      GO BACK
    </Button>
  ))
  .add('Floated', () => (
    <Segment clearing vertical>
      <Button float='right'>FLOATED RIGHT</Button>
    </Segment>
  ))
  .add('Disabled', () => (
    <Button color='primary' disabled={boolean('Disable Button', false)}>
      Disabled Button
    </Button>
  ))
