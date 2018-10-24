import * as React from 'react';
import 'jest-styled-components';
import {
  spacing,
  isBool,
  fluidMixin,
  floatMixin,
  borderBottomRadiusMixin,
  borderTopRadiusMixin,
  borderRadiusMixin,
  borderLeftRadiusMixin,
  borderRightRadiusMixin,
  textAlignMixin,
  size
} from '.'
import styled from '../styled-components';
import renderer from 'react-test-renderer';

const Button = styled.button`
  color: red;
  ${spacing}
  ${fluidMixin}
  ${floatMixin}
  ${borderRadiusMixin}
  ${textAlignMixin}
  ${size}
`;

const theme = {
  BASE_SIZE: 1,
  UNIT: 'rem'
}

describe('General Mixins', () => {
  test('Fluid Mixin should set width to 100% when prop is true', () => {
    const tree = renderer.create(<Button fluid theme={theme} />).toJSON();
    expect(tree).toHaveStyleRule('width', '100%')
  })

  test('Float Mixin should set the float attribute', () => {
    const tree = renderer.create(<Button float='right' theme={theme} />).toJSON();
    expect(tree).toHaveStyleRule('float', 'right')
    const two = renderer.create(<Button float='left' theme={theme} />).toJSON();
    expect(two).toHaveStyleRule('float', 'left')
  })

  test('Should apply text align mixin to text', () => {
    const tree = renderer.create(<Button textAlign='center' theme={theme} />).toJSON()
    expect(tree).toHaveStyleRule('text-align', 'center')
  })

  test('Should apply sizing mixin', () => {
    const tree = renderer.create(<Button size={2} theme={theme} />).toJSON()
    expect(tree).toHaveStyleRule('height', `${theme.BASE_SIZE * 2}${theme.UNIT}`)
    expect(tree).toHaveStyleRule('width', `${theme.BASE_SIZE * 2}${theme.UNIT}`)
  })

  describe('Spacing', () => {
    test('Spacing Mixin should combine all padding and margin mixins', () => {
      const tree = renderer.create(<Button p={1} mb={2} theme={theme} />).toJSON();
      expect(tree).toHaveStyleRule('padding', '1rem');
      expect(tree).toHaveStyleRule('margin-bottom', '2rem')
    })
  })

  describe('Border Radius', () => {
    test('Should apply Border Radius to the element', () => {
      const tree = renderer.create(<Button rounded theme={theme} />).toJSON();
      expect(tree).toHaveStyleRule('border-radius', `${theme.BASE_SIZE / 3.8}${theme.UNIT}`);
    })

    test('Should apply border top radius to the element', () => {
      const Button = styled.button`
        ${borderTopRadiusMixin}
      `
      const tree = renderer.create(<Button rounded theme={theme} />).toJSON()
      expect(tree).toHaveStyleRule('border-top-right-radius', `${theme.BASE_SIZE / 3.5}${theme.UNIT}`)
      expect(tree).toHaveStyleRule('border-top-left-radius', `${theme.BASE_SIZE / 3.5}${theme.UNIT}`)
    })

    test('Should apply border bottom radius to the element', () => {
      const Button = styled.button`
        ${borderBottomRadiusMixin}
      `
      const tree = renderer.create(<Button rounded theme={theme} />).toJSON()
      expect(tree).toHaveStyleRule('border-bottom-right-radius', `${theme.BASE_SIZE / 3.5}${theme.UNIT}`)
      expect(tree).toHaveStyleRule('border-bottom-left-radius', `${theme.BASE_SIZE / 3.5}${theme.UNIT}`)
    })

    test('Should apply border left radius to the element', () => {
      const Button = styled.button`
        ${borderLeftRadiusMixin}
      `
      const tree = renderer.create(<Button rounded theme={theme} />).toJSON()
      expect(tree).toHaveStyleRule('border-bottom-left-radius', `${theme.BASE_SIZE / 3.5}${theme.UNIT}`)
      expect(tree).toHaveStyleRule('border-top-left-radius', `${theme.BASE_SIZE / 3.5}${theme.UNIT}`)
    })

    test('Should apply border right radius to the element', () => {
      const Button = styled.button`
        ${borderRightRadiusMixin}
      `
      const tree = renderer.create(<Button rounded theme={theme} />).toJSON()
      expect(tree).toHaveStyleRule('border-bottom-right-radius', `${theme.BASE_SIZE / 3.5}${theme.UNIT}`)
      expect(tree).toHaveStyleRule('border-top-right-radius', `${theme.BASE_SIZE / 3.5}${theme.UNIT}`)
    })
  })

  describe('Helpers', () => {
    test('isBool helper should only return true if the argument is actually a boolean', () => {
      expect(isBool(null)).toBe(false)
      expect(isBool(false)).toBe(true)
      expect(isBool('false')).toBe(false)
    })
  })
})

