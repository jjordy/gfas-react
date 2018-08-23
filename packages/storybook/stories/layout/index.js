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
import LoaderExamples from './Loader'
import IconExamples from './Icon'

import { injectGlobal } from 'styled-components'

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
  .add('Loader', () => <LoaderExamples />)
  .add('Icon', () => <IconExamples />)

injectGlobal`
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  a {
    background-color: transparent;
  }


  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }


  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  button,
  input { /* 1 */
    overflow: visible;
  }

  button,
  select { /* 1 */
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }


  details {
    display: block;
  }


  summary {
    display: list-item;
  }



  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`
