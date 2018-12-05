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
  .add('Fluid', () => (
    <div>
      <Button fluid>FLUID</Button>
      <div style={{ maxWidth: 200 }}>
        <Button fluid icon='chevron_right' type='submit'>
          Signup
        </Button>
        <br />
        <Button fluid icon='chevron_right'>
          Forgot Password
        </Button>
      </div>
    </div>
  ))
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
    <Button bg='primary' disabled={boolean('Disable Button', false)}>
      Disabled Button
    </Button>
  ))
  .add('As', () => (
    <Button as='a' bg='primary' fluid>
      Button
    </Button>
  ))
