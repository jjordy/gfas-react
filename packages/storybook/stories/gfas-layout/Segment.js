import React from 'react'
import { Segment, Divider, Container, Header, Button } from 'gfas-layout'
import { Code } from 'gfas-component-utils'

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
      <Segment rounded>
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
        <Button>A Rounded Segment will Round any buttons too!</Button>
      </Segment>
      <Header>Attached Segment</Header>
      <Divider />
      <Segment attached='top'>
        <h4>Top</h4>
      </Segment>
      <Segment attached>
        <h4>Middle</h4>
      </Segment>
      <Segment attached='bottom'>
        <h4>Bottom</h4>
      </Segment>
      <Code
        code={`
          <Segment attached="top" />
          <Segment attached />
          <Segment attached="bottom" />
      `}
      />
      <Header as='h1'>Padded Segment</Header>
      <Divider />
      <Segment padded>
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
      </Segment>
      <Code code={'<Segment padded />'} />
      <Header>Very Padded Segment</Header>
      <Divider />
      <Segment padded='very'>
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
      </Segment>
      <Code code={'<Segment padded="very" />'} />
      <Header>Colored Segment</Header>
      <Divider />
      <Segment color='blue' />
      <Segment color='red' />
      <Segment color='orange' />
      <Segment color='green' />
      <Segment color='yellow' />
      <Segment color='black' />
      <Segment color='lightBlue' />
      <Segment color='teal' />
      <Code code={'<Segment color="blue" />'} />
    </Container>
  )
}
