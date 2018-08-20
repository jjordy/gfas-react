import React from 'react'
import { Divider, Container, Header, Fade, Button, Segment, Message, Grid } from '@jjordy/layout'
import { FiCloudLightning, FiChevronDown } from 'react-icons/fi'
export default class HeaderExamples extends React.Component {
  state = { fade: false }

  handleToggle = key => () => this.setState({ [key]: !this.state[key] })

  render () {
    return (
      <Container>
        <Header color='grey'>Create fading elements</Header>
        <Divider />
        <Segment clearing>
          <Fade visible={this.state.fade}>
            <Message color='red' onClose={this.handleToggle('fade')}>
              <Message.Icon>
                <FiCloudLightning color='white' size='2em' />
              </Message.Icon>
              <Message.Content>
                <Message.Header>Test</Message.Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie ante quis placerat pulvinar.
                  Donec odio enim, tincidunt in rhoncus nec, venenatis vitae nibh. Donec vitae elit est. Aliquam
                  suscipit semper mattis. Fusce accumsan non massa quis pellentesque. Nullam at laoreet lorem. Proin
                  consectetur leo ut tincidunt fermentum. Morbi ultrices tortor in leo molestie aliquam. Praesent
                  vehicula quis massa eu placerat. Aliqu
                </p>
              </Message.Content>
            </Message>
          </Fade>
          <Button onClick={this.handleToggle('fade')} float='right' color='lightBlue'>
            SHOW TEXT
          </Button>
        </Segment>
      </Container>
    )
  }
}
