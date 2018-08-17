import React from 'react'
import { Divider, Container, Header } from '@jjordy/layout'
import { Code } from 'gfas-component-utils'

export default function HeaderExamples () {
  return (
    <div>
      <Container>
        <Header color='grey'>Sets the margin to auto and the width to 1150px</Header>
        <Divider />
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
        <Code code='<Container />' />
      </Container>
      <Container text>
        <Header color='grey'>Text Container sets the width to 750px</Header>
        <Divider />
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
        <Code code='<Container text />' />
      </Container>
    </div>
  )
}
