import React from 'react'
import { Fade, Message, Icon, Text } from '@jjordy/layout'
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
  .add('Default', () => (
    <div>
      <Fade
        visible={boolean('Visible', state)}
        duration={number('duration', 200)}
        style={{ minHeight: 130 }}
      >
        <Message bg='yellow' icon='warning'>
          <Message.Content>
            <Message.Header strong>EEK something went wrong!!!</Message.Header>
            <Text>
              It looks like there was an error we wanted to let you know about
              it so you can take an action.
            </Text>
          </Message.Content>
        </Message>
      </Fade>
      <Text strong>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie
        ante quis placerat pulvinar. Donec odio enim, tincidunt in rhoncus nec,
        venenatis vitae nibh. Donec vitae elit est. Aliquam suscipit semper
        mattis. Fusce accumsan non massa quis pellentesque. Nullam at laoreet
        lorem. Proin consectetur leo ut tincidunt fermentum. Morbi ultrices
        tortor in leo molestie aliquam. Praesent vehicula quis massa eu
        placerat. Aliqu
      </Text>
    </div>
  ))
