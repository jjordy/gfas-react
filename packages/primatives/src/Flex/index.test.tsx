import * as React from 'react';
import { Flex, FlexProps } from '.';
import 'jest-styled-components';
import renderer from 'react-test-renderer'


describe('<Flex /> Component', () => {
  
  const createWrapper = (props: FlexProps = {}) => {
    let _wrapper: renderer.ReactTestRendererJSON;
    _wrapper = renderer.create(
      <Flex
        align={props.align}
        justify={props.justify}
        wrap={props.wrap}
        direction={props.direction}
      />).toJSON()
    return _wrapper
  }

  test('<Flex />', () => {
    const wrapper = createWrapper()
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('display', 'flex')
  });
  
  test('<Flex justify="" />', () => {
    const wrapper = createWrapper({justify: 'space-between'});
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('justify-content', 'space-between')
  });
  
  test('<Flex align="" />', () => {
    const wrapper = createWrapper({align: 'center'});
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('align-items', 'center')
  });
  
  test('<Flex direction="" />', () => {
    const wrapper = createWrapper({direction: 'row-reverse'});
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('flex-direction', 'row-reverse')
  });
  
  test('<Flex wrap="" />', () => {
    const wrapper = createWrapper({wrap: 'wrap-reverse'});
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('flex-wrap', 'wrap-reverse')
  });
})

