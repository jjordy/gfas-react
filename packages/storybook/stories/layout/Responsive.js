import React from 'react'
import { Divider, Container, Header, Image, Responsive } from '@jjordy/layout'

const DefaultImage = ({ width = 760, height = 1240, ...rest }) => (
  <Image
    {...rest}
    alt='A Beautiful Image of a lake and aged dock!'
    src={`https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=${height}&w=${width}`}
  />
)
export default function ResponsiveExamples () {
  return (
    <Container>
      <Header color='grey'>Create Responsive Elements</Header>
      <Divider />
      <p>Switch between mobile / tablet / desktop sizes in devtools to see the responsive container in action</p>
      <Responsive only='desktop'>
        <Header>Only shown on desktop sizes</Header>
        <DefaultImage fluid />
      </Responsive>
      <Responsive only='tablet'>
        <Header>Only shown on tablet sizes</Header>
        <DefaultImage width={1024} height={768} fluid />
      </Responsive>
      <Responsive only='mobile'>
        <Header>Only Shown on mobile sizes</Header>
        <DefaultImage width={568} height={328} fluid />
      </Responsive>
    </Container>
  )
}
