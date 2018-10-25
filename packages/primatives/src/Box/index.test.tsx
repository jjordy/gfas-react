import * as React from 'react';
import { Box } from '.';
import 'jest-styled-components';
import renderer from 'react-test-renderer'

describe('<Box /> Component', () => {
  
  const createWrapper = () => {
    let _wrapper: renderer.ReactTestRendererJSON;
    _wrapper = renderer.create(<Box>Im in a box bitch</Box>).toJSON()
    return _wrapper
  }

  test('<Box />', () => {
    const wrapper = createWrapper()
    expect(wrapper).toMatchSnapshot();
  });
})

