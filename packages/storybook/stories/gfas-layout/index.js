import React from 'react'
import { Segment, Divider, Container, Grid } from 'gfas-layout'
import { Code } from 'gfas-component-utils'
import { storiesOf } from '@storybook/react'

storiesOf('Gfas Layout', module)
  .add('Segment', () => (
    <Container>
      <h1>Standard Segment</h1>
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
      </Segment>
      <h1>Attached Segment</h1>
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
      <h1>Padded Segment</h1>
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
      <h1>Very Padded Segment</h1>
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
    </Container>
  ))
  .add('Container', () => (
    <div>
      <Container>
        <h3>Sets the margin to auto and the width to 1150px</h3>
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
        <h3>Text Container sets the width to 750px</h3>
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
  ))
  .add('Divider', () => (
    <Container>
      <h3>Divides up the page</h3>
      <Divider />
      <Code code='<Divider />' />
      <h3>Dividers can also be hidden</h3>
      <Divider hidden />
      <Code code='<Divider hidden />' />
    </Container>
  ))
  .add('Grid', () => (
    <Container>
      <h1>Grid Component</h1>
      <Divider />
      <Grid width='33%' gap={8}>
        <div style={{ backgroundColor: '#ccc' }}>Item 1</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 2</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 3</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 4</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 5</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 6</div>
      </Grid>
      <Code
        code={`
        <Grid width='33%' gap={8}>
          <div style={{ backgroundColor: '#ccc' }}>Item 1</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 2</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 3</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 4</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 5</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 6</div>
        </Grid>
      `}
      />
      <Divider />
      <Grid width='20%' gap={8} align='middle'>
        <div style={{ backgroundColor: '#ccc' }}>Item 1</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 2</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 3</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 4</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 5</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 6</div>
      </Grid>
      <Code
        code={`
        <Grid width='20%' gap={16}>
          <div style={{ backgroundColor: '#ccc' }}>Item 1</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 2</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 3</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 4</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 5</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 6</div>
        </Grid>
      `}
      />
    </Container>
  ))
