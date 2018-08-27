import React from 'react'
import { Image } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs/react'

const src =
  'https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

const sizes = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  huge: 'huge',
  massive: 'massive'
}
storiesOf('@jjordy/Layout/Image', module).add(
  'Default',
  () => (
    <Image src={src} alt='Default Image' />
  ),
  { notes: 'A thin wrapper around the html form' }
)
  .add('Sizes', () => <Image src={src} alt='Sized Image' size={select('Size', sizes, 'small')} />)
  .add('Fluid', () => <Image src={src} alt='Fluid Image' fluid />)
  .add('Thumbnail', () => <Image src={src} thumbnail />)
  .add('Link', () => <Image src={src} alt='Link Image' href='#' target='_blank' />)
  .add('Overlay Image', () =>
    <Image
      src={src}
      alt='Overlay Image'
      overlay={() => (
        <div style={{color: 'white'}}>Overlay Text</div>
      )} />
  )