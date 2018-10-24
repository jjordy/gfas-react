import * as React from 'react';
import { Container } from '.';
import renderer from 'react-test-renderer'
import 'jest-styled-components';

describe('<Container /> Component', () => {
  test('Should render a 1150px wide container', () => {
    const wrapper = renderer.create(<Container />).toJSON();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('max-width', '1150px')
  });
  
  test('Should render a 750px wide Text Container with the font size set a bit larger', () => {
    const wrapper = renderer.create(<Container text />).toJSON();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('max-width', '750px')
    expect(wrapper).toHaveStyleRule('font-size', '1.1rem')
  });
})

