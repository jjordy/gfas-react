import React from 'react'
import { Header } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { select } from '@storybook/addon-knobs/react'

storiesOf('@jjordy/Layout/Header', module)
  .addDecorator(fn => {
    setOptions({
      selectedAddonPanel: 'storybooks/storybook-addon-knobs'
    })
    return fn()
  })
  .add(
    'Default',
    () => (
      <div>
        <Header>Default</Header>
        <Header as='h1'>H1</Header>
        <Header as='h2'>H2</Header>
        <Header as='h3'>H3</Header>
        <Header as='h4'>H4</Header>
        <Header as='h5'>H5</Header>
        <Header as='h6'>H6</Header>
      </div>
    ),
    { notes: 'Header' }
  )
  .add(
    'Colored',
    () => (
      <div>
        <Header
          color={select(
            'Color',
            {
              Black: 'black',
              'Light Grey': 'lightGrey',
              Grey: 'grey',
              'Dark Grey': 'darkGrey',
              Primary: 'primary',
              Secondary: 'secondary',
              Success: 'success',
              Info: 'info',
              Error: 'error',
              Blue: 'blue',
              Green: 'green',
              Yellow: 'yellow',
              Orange: 'orange'
            },
            'primary'
          )}
        >
          Default
        </Header>
      </div>
    ),
    { notes: 'Header' }
  )
  .add('Dividing', () => (
    <Header dividing color='grey'>
      Header
    </Header>
  ))
  .add('Floated', () => <Header float='right'>Floated Header</Header>)
  .add('Text Align', () => (
    <div>
      <Header textAlign='right'>Right Aligned</Header>
      <Header textAlign='center'>Center Aligned</Header>
      <Header textAlign='left'>Left Aligned</Header>
      <Header textAlign='justify'>
        This will take up the full width of the container
      </Header>
    </div>
  ))
