import React from 'react'
import { Divider, Container, Header, Message, Button, Loader, Grid } from '@jjordy/layout'
import {
  FiAlertTriangle,
  FiAnchor,
  FiArchive,
  FiBluetooth,
  FiBookmark,
  FiCloudOff,
  FiCloudLightning,
  FiLoader
} from 'react-icons/fi'
import { action } from '@storybook/addon-actions'

export default function MessageExamples () {
  return <Container>
    <Header color='grey'>Message</Header>
    <Divider />
    <Message>
      <Message.Icon>
        <Loader type='three-dots' />
      </Message.Icon>
      <Message.Content>
        <Message.Header strong>Test</Message.Header>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie ante quis placerat pulvinar. Donec
            odio enim, tincidunt in rhoncus nec, venenatis vitae nibh. Donec vitae elit est. Aliquam suscipit semper
            mattis. Fusce accumsan non massa quis pellentesque. Nullam at laoreet lorem. Proin consectetur leo ut
            tincidunt fermentum. Morbi ultrices tortor in leo molestie aliquam. Praesent vehicula quis massa eu
            placerat. Aliqu
        </p>
      </Message.Content>
    </Message>
    <Message color='green' onClose={action('CLOSE CALLED')}>
      <Message.Icon>
        <Loader speed='slow'>
          <FiLoader color='white' size='2em' />
        </Loader>
      </Message.Icon>
      <Message.Content>
        <Message.Header>Test</Message.Header>
        <p style={{ color: '#FFF' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie ante quis placerat pulvinar. Donec
            odio enim, tincidunt in rhoncus nec, venenatis vitae nibh. Donec vitae elit est. Aliquam suscipit semper
            mattis. Fusce accumsan non massa quis pellentesque. Nullam at laoreet lorem. Proin consectetur leo ut
            tincidunt fermentum. Morbi ultrices tortor in leo molestie aliquam. Praesent vehicula quis massa eu
            placerat. Aliqu
        </p>
      </Message.Content>
    </Message>
    <Message color='orange'>
      <Message.Icon>
        <FiAnchor color='white' size='2em' />
      </Message.Icon>
      <Message.Content>
        <Message.Header>Test</Message.Header>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie ante quis placerat pulvinar. Donec
            odio enim, tincidunt in rhoncus nec, venenatis vitae nibh. Donec vitae elit est. Aliquam suscipit semper
            mattis. Fusce accumsan non massa quis pellentesque. Nullam at laoreet lorem. Proin consectetur leo ut
            tincidunt fermentum. Morbi ultrices tortor in leo molestie aliquam. Praesent vehicula quis massa eu
            placerat. Aliqu
        </p>
      </Message.Content>
    </Message>
    <Message color='blue'>
      <Message.Icon>
        <FiArchive color='#94D500' size='2em' />
      </Message.Icon>
      <Message.Content>
        <Message.Header>Test</Message.Header>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie ante quis placerat pulvinar. Donec
            odio enim, tincidunt in rhoncus nec, venenatis vitae nibh. Donec vitae elit est. Aliquam suscipit semper
            mattis. Fusce accumsan non massa quis pellentesque. Nullam at laoreet lorem. Proin consectetur leo ut
            tincidunt fermentum. Morbi ultrices tortor in leo molestie aliquam. Praesent vehicula quis massa eu
            placerat. Aliqu
        </p>
      </Message.Content>
    </Message>
    <Message color='teal'>
      <Message.Icon>
        <FiBluetooth color='white' size='2em' />
      </Message.Icon>
      <Message.Content>
        <Message.Header>Test</Message.Header>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie ante quis placerat pulvinar. Donec
            odio enim, tincidunt in rhoncus nec, venenatis vitae nibh. Donec vitae elit est. Aliquam suscipit semper
            mattis. Fusce accumsan non massa quis pellentesque. Nullam at laoreet lorem. Proin consectetur leo ut
            tincidunt fermentum. Morbi ultrices tortor in leo molestie aliquam. Praesent vehicula quis massa eu
            placerat. Aliqu
        </p>
      </Message.Content>
    </Message>
    <Message color='yellow'>
      <Message.Icon>
        <FiBookmark color='white' size='2em' />
      </Message.Icon>
      <Message.Content>
        <Message.Header>Test</Message.Header>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie ante quis placerat pulvinar. Donec
            odio enim, tincidunt in rhoncus nec, venenatis vitae nibh. Donec vitae elit est. Aliquam suscipit semper
            mattis. Fusce accumsan non massa quis pellentesque. Nullam at laoreet lorem. Proin consectetur leo ut
            tincidunt fermentum. Morbi ultrices tortor in leo molestie aliquam. Praesent vehicula quis massa eu
            placerat. Aliqu
        </p>
      </Message.Content>
    </Message>
    <Message color='darkGrey' onClose={() => console.log('CLOSE CALLED')}>
      <Message.Icon>
        <FiCloudOff color='#94D500' size='2em' />
      </Message.Icon>
      <Message.Content>
        <Message.Header>Test</Message.Header>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie ante quis placerat pulvinar. Donec
            odio enim, tincidunt in rhoncus nec, venenatis vitae nibh. Donec vitae elit est. Aliquam suscipit semper
            mattis. Fusce accumsan non massa quis pellentesque. Nullam at laoreet lorem. Proin consectetur leo ut
            tincidunt fermentum. Morbi ultrices tortor in leo molestie aliquam. Praesent vehicula quis massa eu
            placerat. Aliqu
        </p>
      </Message.Content>
    </Message>
    <Message color='red' onClose={() => console.log('CLOSE CALLED')}>
      <Message.Icon>
        <FiCloudLightning color='white' size='2em' />
      </Message.Icon>
      <Message.Content>
        <Message.Header strong inverted>ERROR</Message.Header>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie ante quis placerat pulvinar. Donec
            odio enim, tincidunt in rhoncus nec, venenatis vitae nibh. Donec vitae elit est. Aliquam suscipit semper
            mattis. Fusce accumsan non massa quis pellentesque. Nullam at laoreet lorem. Proin consectetur leo ut
            tincidunt fermentum. Morbi ultrices tortor in leo molestie aliquam. Praesent vehicula quis massa eu
            placerat. Aliqu
        </p>
      </Message.Content>
    </Message>

    <Message rounded onClose={() => console.log('CLOSE CALLED')} color='lightBlue'>
      <Message.Icon>
        <FiAlertTriangle color='white' size='2em' />
      </Message.Icon>
      <Message.Content>
        <Message.Header>ALERT YOU MUST AGREE TO THE TERMS</Message.Header>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie ante quis placerat pulvinar. Donec
            odio enim, tincidunt in rhoncus nec, venenatis vitae nibh. Donec vitae elit est. Aliquam suscipit semper
            mattis. Fusce accumsan non massa quis pellentesque. Nullam at laoreet lorem. Proin consectetur leo ut
            tincidunt fermentum. Morbi ultrices tortor in leo molestie aliquam. Praesent vehicula quis massa eu
            placerat. Aliqu
        </p>
        <Divider />
        <Grid width='50%' gap={16}>
          <Button color='error'>CANCEL</Button>
          <Button color='success'>I AGREE</Button>
        </Grid>
      </Message.Content>
    </Message>
  </Container>
}
