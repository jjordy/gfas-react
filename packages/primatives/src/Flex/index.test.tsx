import * as React from 'react';
import { Flex } from '.';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import toJson from 'enzyme-to-json';

test('<Flex />', () => {
  const wrapper = shallow(<Flex />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('<Flex justify="" />', () => {
  const wrapper = shallow(<Flex justify="space-between" />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('<Flex align="" />', () => {
  const wrapper = shallow(<Flex align="center" />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('<Flex direction="" />', () => {
  const wrapper = shallow(<Flex direction="row-reverse" />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
