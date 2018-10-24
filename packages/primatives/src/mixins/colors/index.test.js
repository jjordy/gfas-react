import * as React from 'react'
import 'jest-styled-components';
import renderer from 'react-test-renderer'
import { colorMixin } from '.'
import * as Color from 'color'
import styled from '../../styled-components'
import SharedProps from 'src/types/SharedProps';

const Button = styled.button`
  ${colorMixin}
`
describe('Color functionality', () => {
  test('Should render the proper foreground color', () => {
    const color = Color.default('rgba(255, 255, 255)')
    const tree = renderer.create(<Button color={color} />).toJSON()
    expect(tree).toHaveStyleRule('color', '#FFFFFF')
  })
})
