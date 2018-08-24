import React from 'react'
import { Segment, Divider, Code, Container, Header, Button, Text } from '@jjordy/layout'

export default function HeaderExamples () {
  return (
    <Container>
      <Header>Standard Segment</Header>
      <Divider />
      <Segment>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sem sagittis, pellentesque erat at,
          scelerisque dolor. Quisque auctor dignissim orci. Quisque suscipit tincidunt velit, ut ornare arcu ornare a.
          Pellentesque nec viverra mauris, id pulvinar felis. Sed at tempor ante, mattis gravida tellus. Nulla suscipit
          lectus sit amet viverra porttitor. Vivamus porttitor ex vitae ligula finibus, vel molestie lacus congue.
          Pellentesque sapien elit, ultrices non maximus id, viverra eu metus. Donec leo mi, blandit ac dapibus vitae,
          vestibulum quis lacus. Praesent porta blandit orci, eu ornare ex lacinia pellentesque. Fusce at lacinia neque,
          sit amet luctus libero. Donec malesuada elit quam, et fringilla purus aliquam nec. Suspendisse euismod
          consectetur ante, sit amet posuere mi bibendum nec. Aliquam lobortis, lorem vitae maximus consequat, metus
          lorem venenatis nisl, sed efficitur mauris ex sit amet ligula. Sed sit amet finibus enim, eu semper lacus.
        </p>
        <Button>Do it Big!</Button>
      </Segment>
      <Header>Rounded Segment</Header>
      <Divider />
      <Segment rounded clearing>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sem sagittis, pellentesque erat at,
          scelerisque dolor. Quisque auctor dignissim orci. Quisque suscipit tincidunt velit, ut ornare arcu ornare a.
          Pellentesque nec viverra mauris, id pulvinar felis. Sed at tempor ante, mattis gravida tellus. Nulla suscipit
          lectus sit amet viverra porttitor. Vivamus porttitor ex vitae ligula finibus, vel molestie lacus congue.
          Pellentesque sapien elit, ultrices non maximus id, viverra eu metus. Donec leo mi, blandit ac dapibus vitae,
          vestibulum quis lacus. Praesent porta blandit orci, eu ornare ex lacinia pellentesque. Fusce at lacinia neque,
          sit amet luctus libero. Donec malesuada elit quam, et fringilla purus aliquam nec. Suspendisse euismod
          consectetur ante, sit amet posuere mi bibendum nec. Aliquam lobortis, lorem vitae maximus consequat, metus
          lorem venenatis nisl, sed efficitur mauris ex sit amet ligula. Sed sit amet finibus enim, eu semper lacus.
        </p>
        <Button rounded float='right'>
          Do Something Awesome
        </Button>
      </Segment>
      <Header>Attached Segment</Header>
      <Divider />
      <Segment attached='top'>
        <p>Top</p>
      </Segment>
      <Segment attached>
        <p>Middle</p>
      </Segment>
      <Segment attached='bottom'>
        <p>Bottom</p>
      </Segment>
      <Code
        code={`
          <Segment attached="top" />
          <Segment attached />
          <Segment attached="bottom" />
      `}
      />
      <Header>Colored Segment</Header>
      <Divider />
      <Segment color='blue' children='lorem' />
      <Segment color='red' children='lorem' />
      <Segment color='orange' children='lorem' />
      <Segment color='green' children='lorem' />
      <Segment color='yellow' children='lorem' />
      <Segment color='black' children='lorem' />
      <Segment color='lightBlue' children='lorem' />
      <Segment color='teal' children='lorem' />
      <Code
        code={`
      <Segment color='blue' />
      <Segment color='red' />
      <Segment color='orange' />
      <Segment color='green' />
      <Segment color='yellow' />
      <Segment color='black' />
      <Segment color='lightBlue' />
      <Segment color='teal' />
      `}
      />
      <Header>Loading Segment</Header>
      <Divider />
      <Segment loading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos veritatis doloremque quibusdam voluptates
          ducimus cumque officiis quia minus cum, minima magnam esse, tempore illo praesentium. Cum dolores adipisci
          reiciendis.
        </Text>
      </Segment>
      <Code
        code={`
          <Segment loading />
      `}
      />
    </Container>
  )
}
