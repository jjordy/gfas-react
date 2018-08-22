import React from 'react'
import { storiesOf } from '@storybook/react'
import HeaderExamples from './Header'
import SegmentExamples from './Segment'
import ContainerExamples from './Container'
import DividerExamples from './Divider'
import GridExamples from './Grid'
import ButtonExamples from './Button'
import ImageExamples from './Image'
import FormExamples from './Form'
import InputExamples from './Input'
import TextExamples from './Text'
import FadeExamples from './Fade'
import MessageExamples from './Message'
import ResponsiveExamples from './Responsive'
import ProgressExamples from './Progress'
import Loader from './Loader'

import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    background-color: #f6f9fc;
    box-sizing: border-box;
  }
`

storiesOf('Gfas Layout', module)
  .add('Header', () => <HeaderExamples />)
  .add('Segment', () => <SegmentExamples />)
  .add('Container', () => <ContainerExamples />)
  .add('Divider', () => <DividerExamples />)
  .add('Grid', () => <GridExamples />)
  .add('Button', () => <ButtonExamples />)
  .add('Image', () => <ImageExamples />)
  .add('Form', () => <FormExamples />)
  .add('Input', () => <InputExamples />)
  .add('Text', () => <TextExamples />)
  .add('Fade', () => <FadeExamples />)
  .add('Message', () => <MessageExamples />)
  .add('Responsive', () => <ResponsiveExamples />)
  .add('Progress', () => <ProgressExamples />)
  .add('Loader', () => <Loader />)
