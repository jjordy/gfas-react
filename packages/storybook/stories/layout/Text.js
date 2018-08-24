import React from 'react'
import { Divider, Container, Header, Text } from '@jjordy/layout'

export default function HeaderExamples () {
  return <Container>
    <Header color='grey'>Create text elements</Header>
    <Divider />
    <Header as='h4' color='grey'>Normal Text</Header>
    <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur, minus distinctio illo mollitia
        asperiores sapiente dolorum dignissimos suscipit velit quod porro autem eveniet soluta sit aut dolores
        consequatur ipsa.
    </Text>
    <Header color='grey' as='h4'>Strong Text</Header>
    <Text strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur, minus distinctio illo mollitia
        asperiores sapiente dolorum dignissimos suscipit velit quod porro autem eveniet soluta sit aut dolores
        consequatur ipsa.
    </Text>
    <Header color='grey' as='h4'>Small Text</Header>
    <Text small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur, minus distinctio illo mollitia
        asperiores sapiente dolorum dignissimos suscipit velit quod porro autem eveniet soluta sit aut dolores
        consequatur ipsa.
    </Text>
    <Header color='grey' as='h4'>Colored Text</Header>
    <Text color='yellow'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur, minus distinctio illo mollitia
        asperiores sapiente dolorum dignissimos suscipit velit quod porro autem eveniet soluta sit aut dolores
        consequatur ipsa.
    </Text>
  </Container>
}
