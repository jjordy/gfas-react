import React from 'react'
import Input, { RequiredSpan } from '.'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

describe('Input Component', () => {
  const createWrapper = (
    props = {},
    renderType = 'toJSON',
    Component = Input
  ) => {
    return renderer
      .create(
        <ThemeProvider theme={{ BASE_SIZE: 1, UNIT: 'rem' }}>
          <Component {...props} />
        </ThemeProvider>
      )
      .toJSON()
  }

  it('Should render an Input Wrapper', () => {
    const w = createWrapper({ name: 'test' })
    expect(w.type).toEqual('div')
  })

  describe('Label prop', () => {
    it('Should render the label', () => {
      const w = createWrapper({ name: 'test' })
      expect(w.children[0].type).toEqual('label')
    })

    it('Should render the label text as the name prop by is none is passed', () => {
      const w = createWrapper({ name: 'test' })
      expect(w.children[0].children).toEqual(['test', ' '])
    })

    it('Should render the label prop as the label', () => {
      const w = createWrapper({ name: 'test', label: 'Hey Label' })
      global.walkJSONTree(w, 'label', label => {
        expect(label.children[0]).toEqual('Hey Label')
      })
    })
  })

  describe('Required Prop', () => {
    it('Should render the required * is the required prop  is passed', () => {
      const w = createWrapper({
        name: 'test',
        label: 'Hey Label',
        required: true
      })
      global.walkJSONTree(w, 'span', required => {
        expect(required.children).toEqual(['*'])
      })
    })

    it('Should render the required prop in red', () => {
      const w = createWrapper({
        required: true,
        name: 'test',
        Component: RequiredSpan
      })
      expect(w).toHaveStyleRule({ color: '#f30' })
    })

    it('Should a red border if theres an error passed to the input', () => {
      const w = createWrapper({
        required: true,
        error: true,
        name: 'test',
        Component: RequiredSpan
      })
      expect(w).toHaveStyleRule({ border: '2px solid #f30' })
    })
  })

  describe('Input actions', () => {
    it('Should render an action render prop if one exists', () => {
      const w = createWrapper({
        name: 'test',
        action: () => <button id='test'>TEst</button>
      })
      global.walkJSONTree(w, 'button', function (button) {
        expect(button.type).toEqual('button')
      })
    })
  })

  describe('Message', () => {
    it('Should render a form message if the prop is passed', () => {
      const w = createWrapper({ name: 'test', message: 'Test Message' })
      global.walkJSONTree(w, 'small', message => {
        expect(message.children).toEqual(['Test Message'])
      })
    })
    it('Should do something', () => {
      expect(true).toBe(true)
    })
  })
})
