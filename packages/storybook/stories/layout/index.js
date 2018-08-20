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
