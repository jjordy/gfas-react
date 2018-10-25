import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container } from '@jjordy/primatives'

storiesOf('@jjordy/Primatives/Container', module)
  .add('Default', () => (
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam laboriosam porro quaerat fuga quidem
      facere, sint nobis atque reiciendis officia maxime debitis. Aut blanditiis praesentium unde necessitatibus,
      officia explicabo.
    </Container>
  ))
  .add('Text', () => (
    <Container text border='2px solid #f30' p={4}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam laboriosam porro quaerat fuga quidem
      facere, sint nobis atque reiciendis officia maxime debitis. Aut blanditiis praesentium unde necessitatibus,
      officia explicabo.
    </Container>
  ))
