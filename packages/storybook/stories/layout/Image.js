import React from 'react'
import { Divider, Container, Header, Image, Code } from '@jjordy/layout'

const DefaultImage = props => (
  <Image
    {...props}
    alt='A Beautiful Image of a lake and aged dock!'
    src='https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  />
)

export default function ImageExamples () {
  return (
    <Container>
      <Header color='grey'>Images</Header>
      <Divider />
      <Header as='h3' color='grey'>
        Fluid Image
      </Header>
      <DefaultImage fluid />
      <Code
        code={`
      <Image
        fluid
        src='https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      />
      `}
      />
      <Header as='h3' color='grey'>
        Tiny Image
      </Header>
      <DefaultImage size='tiny' />
      <Header as='h3' color='grey'>
        Small Image
      </Header>
      <DefaultImage size='small' />
      <Header as='h3' color='grey'>
        Medium Image
      </Header>
      <DefaultImage size='medium' />
      <Header as='h3' color='grey'>
        Large Image
      </Header>
      <DefaultImage size='large' />
      <Header as='h3' color='grey'>
        Huge Image
      </Header>
      <DefaultImage size='huge' />
      <Header as='h3' color='grey'>
        Massive Image
      </Header>
      <DefaultImage size='massive' />
      <Code
        code={`
      <Image
        size='tiny'
        src='https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      />
      <Image
        size='small'
        src='https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      />
      <Image
        size='medium'
        src='https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      />
      <Image
        size='large'
        src='https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      />
      <Image
        size='huge'
        src='https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      />
      <Image
        size='massize'
        src='https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      />
      `}
      />
      <Header color='grey' as='h3'>
        Thumbnail Image
      </Header>
      <DefaultImage size='medium' thumbnail />
      <Code code='<Image src=&quot;&quot; thumbnail size=&quot;medium&quot; />' />

      <Header color='grey' as='h3'>
        Image Link
      </Header>
      <DefaultImage
        size='medium'
        target='_blank'
        thumbnail
        href='https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      />
      <Code
        code={`
      <Image
        size='medium'
        target='_blank'
        href='https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      />
      `}
      />

      <Header color='grey' as='h3'>
        Text Link
      </Header>
      <DefaultImage
        fluid
        overlay={() => (
          <Header as='h3' inverted style={{ textShadow: '2px 2px 2px #222', textTransform: 'uppercase' }}>
            This is overlay text!
          </Header>
        )}
      />
      <Code
        code={`
      <Image
        fluid
        overlay={() => (
          <Header inverted style={{ textShadow: '2px 2px 2px #222', textTransform: 'uppercase' }}>
            This is overlay text!
          </Header>
        )}
      />
      `}
      />
    </Container>
  )
}
