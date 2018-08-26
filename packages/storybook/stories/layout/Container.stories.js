import React from 'react'
import { Header, Divider, Container } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import _ from 'lodash'

storiesOf('@jjordy/Layout/Container', module).add(
  'Default',
  () => (
    <Container>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sem
        sagittis, pellentesque erat at, scelerisque dolor. Quisque auctor
        dignissim orci. Quisque suscipit tincidunt velit, ut ornare arcu ornare
        a. Pellentesque nec viverra mauris, id pulvinar felis. Sed at tempor
        ante, mattis gravida tellus. Nulla suscipit lectus sit amet viverra
        porttitor. Vivamus porttitor ex vitae ligula finibus, vel molestie lacus
        congue. Pellentesque sapien elit, ultrices non maximus id, viverra eu
        metus. Donec leo mi, blandit ac dapibus vitae, vestibulum quis lacus.
        Praesent porta blandit orci, eu ornare ex lacinia pellentesque. Fusce at
        lacinia neque, sit amet luctus libero. Donec malesuada elit quam, et
        fringilla purus aliquam nec. Suspendisse euismod consectetur ante, sit
        amet posuere mi bibendum nec. Aliquam lobortis, lorem vitae maximus
        consequat, metus lorem venenatis nisl, sed efficitur mauris ex sit amet
        ligula. Sed sit amet finibus enim, eu semper lacus.
      </p>
    </Container>
  ),
  { notes: 'Sets the margin to auto and the width to 1150px' }
).add('Text', () => (
  <Container text>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sem
      sagittis, pellentesque erat at, scelerisque dolor. Quisque auctor
      dignissim orci. Quisque suscipit tincidunt velit, ut ornare arcu ornare
      a. Pellentesque nec viverra mauris, id pulvinar felis. Sed at tempor
      ante, mattis gravida tellus. Nulla suscipit lectus sit amet viverra
      porttitor. Vivamus porttitor ex vitae ligula finibus, vel molestie lacus
      congue. Pellentesque sapien elit, ultrices non maximus id, viverra eu
      metus. Donec leo mi, blandit ac dapibus vitae, vestibulum quis lacus.
      Praesent porta blandit orci, eu ornare ex lacinia pellentesque. Fusce at
      lacinia neque, sit amet luctus libero. Donec malesuada elit quam, et
      fringilla purus aliquam nec. Suspendisse euismod consectetur ante, sit
      amet posuere mi bibendum nec. Aliquam lobortis, lorem vitae maximus
      consequat, metus lorem venenatis nisl, sed efficitur mauris ex sit amet
      ligula. Sed sit amet finibus enim, eu semper lacus.
    </p>
  </Container>
), { notes: 'Sets the margin to auto and the width to 750px'})
