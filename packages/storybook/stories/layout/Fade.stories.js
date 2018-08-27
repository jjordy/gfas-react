import React from 'react'
import { Fade, Message, Icon } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { number, boolean, button } from '@storybook/addon-knobs'

let state = false

storiesOf('@jjordy/Layout/Fade', module)
  .addDecorator(fn => {
    setOptions({
      selectedAddonPanel: 'storybooks/storybook-addon-knobs'
    })
    return fn()
  })
  .add('Default', () => <Fade
    visible={boolean('Visible', state)}
    duration={number('duration', 500)}
  >
    <Message color='red' onClose={button('Toggle Close', () => { state = !state })}>
      <Message.Icon>
        <Icon color='white' size={2} icon='question' />
      </Message.Icon>
      <Message.Content>
        <Message.Header>Test</Message.Header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          molestie ante quis placerat pulvinar. Donec odio enim, tincidunt in
          rhoncus nec, venenatis vitae nibh. Donec vitae elit est. Aliquam
          suscipit semper mattis. Fusce accumsan non massa quis pellentesque.
          Nullam at laoreet lorem. Proin consectetur leo ut tincidunt
          fermentum. Morbi ultrices tortor in leo molestie aliquam. Praesent
          vehicula quis massa eu placerat. Aliqu
        </p>
      </Message.Content>
    </Message>
  </Fade>)
