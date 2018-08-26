import React from 'react'
import { Fade, Message, Header } from '@jjordy/layout'
import { FiCloudLightning } from 'react-icons/fi'
import { storiesOf } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { number, boolean } from '@storybook/addon-knobs'

export default class FadeExample extends React.Component {
  state = { fade: false };

  handleToggle = key => () => this.setState({ [key]: !this.state[key] });

  render () {
    return (
      <Fade
        visible={boolean('Visible', false)}
        duration={number('duration', 500)}
      >
        <Message color='red' onClose={this.handleToggle('fade')}>
          <Message.Icon>
            <FiCloudLightning color='white' size='2em' />
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
      </Fade>
    )
  }
}

storiesOf('@jjordy/Layout/Fade', module)
  .addDecorator(fn => {
    setOptions({
      selectedAddonPanel: 'storybooks/storybook-addon-knobs'
    })
    return fn()
  })
  .add('Default', () => <FadeExample />)
