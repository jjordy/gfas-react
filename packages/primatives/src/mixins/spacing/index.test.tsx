import * as React from 'react';
import 'jest-styled-components';
import {
  createRule,
  pxMixin,
  pMixin,
  pyMixin,
  plMixin,
  prMixin,
  pbMixin,
  ptMixin,
  mxMixin,
  myMixin,
  mMixin,
  mbMixin,
  mtMixin,
  mrMixin,
  mlMixin } from '.'

import styled from '../../styled-components';
import renderer from 'react-test-renderer';

const Button = styled.button`
  color: red;
  ${pxMixin}
  ${pMixin}
  ${pyMixin}
  ${plMixin}
  ${prMixin}
  ${pbMixin}
  ${ptMixin}
  ${mMixin}
  ${mxMixin}
  ${myMixin}
  ${mbMixin}
  ${mtMixin}
  ${mrMixin}
  ${mlMixin}
`;

describe('Spacing Mixins', () => {
  describe('Padding Mixins', () => {
    test('Should apply p mixin', () => {
      const tree = renderer.create(<Button p={1} theme={{BASE_SIZE: 1, UNIT: 'rem'}} />).toJSON();
      expect(tree).toHaveStyleRule('padding', '1rem');
    })
    test('Should apply px mixin', () => {
      const tree = renderer.create(<Button px={1} theme={{BASE_SIZE: 1, UNIT: 'rem'}} />).toJSON();
      expect(tree).toHaveStyleRule('padding-right', '1rem');
      expect(tree).toHaveStyleRule('padding-left', '1rem')
    });
    test('Should apply py mixin', () => {
      const tree = renderer.create(<Button py={1} theme={{BASE_SIZE: 1, UNIT: 'rem'}} />).toJSON();
      expect(tree).toHaveStyleRule('padding-top', '1rem');
      expect(tree).toHaveStyleRule('padding-bottom', '1rem')
    })
    test('Should apply pl mixin', () => {
      const tree = renderer.create(<Button pl={1} theme={{BASE_SIZE: 1, UNIT: 'rem'}} />).toJSON();
      expect(tree).toHaveStyleRule('padding-left', '1rem');
    })
    test('Should apply pr mixin', () => {
      const tree = renderer.create(<Button pr={1} theme={{BASE_SIZE: 1, UNIT: 'rem'}} />).toJSON();
      expect(tree).toHaveStyleRule('padding-right', '1rem');
    })
    test('Should apply pb mixin', () => {
      const tree = renderer.create(<Button pb={1} theme={{BASE_SIZE: 1, UNIT: 'rem'}} />).toJSON();
      expect(tree).toHaveStyleRule('padding-bottom', '1rem');
    })
    test('Should apply pt mixin', () => {
      const tree = renderer.create(<Button pt={1} theme={{BASE_SIZE: 1, UNIT: 'rem'}} />).toJSON();
      expect(tree).toHaveStyleRule('padding-top', '1rem');
    })
  })
  describe("Margin Mixins", () => {
    test('Should apply m mixin', () => {
      const tree = renderer.create(<Button m={1} theme={{BASE_SIZE: 1, UNIT: 'rem'}} />).toJSON();
      expect(tree).toHaveStyleRule('margin', '1rem');
    })
    test('Should apply mx mixin', () => {
      const tree = renderer.create(<Button mx={1} theme={{BASE_SIZE: 1, UNIT: 'rem'}} />).toJSON();
      expect(tree).toHaveStyleRule('margin-right', '1rem');
      expect(tree).toHaveStyleRule('margin-left', '1rem')
    });
    test('Should apply my mixin', () => {
      const tree = renderer.create(<Button my={1} theme={{BASE_SIZE: 1, UNIT: 'rem'}} />).toJSON();
      expect(tree).toHaveStyleRule('margin-top', '1rem');
      expect(tree).toHaveStyleRule('margin-bottom', '1rem')
    })
    test('Should apply ml mixin', () => {
      const tree = renderer.create(<Button ml={1} theme={{BASE_SIZE: 1, UNIT: 'rem'}} />).toJSON();
      expect(tree).toHaveStyleRule('margin-left', '1rem');
    })
    test('Should apply mr mixin', () => {
      const tree = renderer.create(<Button mr={1} theme={{BASE_SIZE: 1, UNIT: 'rem'}} />).toJSON();
      expect(tree).toHaveStyleRule('margin-right', '1rem');
    })
    test('Should apply mb mixin', () => {
      const tree = renderer.create(<Button mb={1} theme={{BASE_SIZE: 1, UNIT: 'rem'}} />).toJSON();
      expect(tree).toHaveStyleRule('margin-bottom', '1rem');
    })
    test('Should apply mt mixin', () => {
      const tree = renderer.create(<Button mt={1} theme={{BASE_SIZE: 1, UNIT: 'rem'}} />).toJSON();
      expect(tree).toHaveStyleRule('margin-top', '1rem');
    })
  })

  test('Create rule helper should create the specified rule using the theme BASE_SIZE and unit', () => {
    const Test = styled.button`
      ${createRule(1, 'border-radius')}
    `
    const tree = renderer.create(<Test theme={{BASE_SIZE: 1, UNIT: 'rem'}} />).toJSON()
    expect(tree).toHaveStyleRule('border-radius', '1rem')
  })
})

