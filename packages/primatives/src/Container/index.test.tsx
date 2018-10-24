import * as React from 'react';
import { Container } from '.';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import toJson from 'enzyme-to-json';

test('<Container />', () => {
  const wrapper = shallow(<Container />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('<Container text />', () => {
  const wrapper = shallow(<Container text />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
