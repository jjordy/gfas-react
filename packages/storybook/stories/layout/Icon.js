import React from 'react'
import { Divider, Container, Header, Icon } from '@jjordy/layout'

export default function HeaderExamples () {
  return (
    <Container>
      <Header color='grey'>Icons</Header>
      <Divider />
      Checked Icon
      <Icon icon='checkbox_checked' />
      <br />
      UnChecked Icon
      <Icon icon='checkbox_unchecked' />
      <br />
      Chevron Down
      <Icon icon='chevron_down' />
      <br />
      Chevron UP
      <Icon icon='chevron_up' />
      <br />
      Chevron RIGHT
      <Icon icon='chevron_right' />
      <br />
      Chevron RIGHT
      <Icon icon='chevron_left' />
      <br />
      Question Circle
      <Icon icon='question' />
    </Container>
  )
}
