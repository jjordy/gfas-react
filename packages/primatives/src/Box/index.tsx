import styled from '../styled-components';
import {
  spacing,
  size,
  borderMixin,
  backgroundColorMixin,
  colorMixin,
  borderRadiusMixin,
  textBasedOnColorMixin
} from '../mixins';
import SharedProps from '../types/SharedProps';
// import { backgroundColorMixin } from '../mixins/colors';

export interface BoxProps extends SharedProps {}

export const Box = styled<BoxProps, 'div'>('div')`
  box-sizing: border-box;
  ${spacing};
  ${size};
  ${borderMixin};
  ${backgroundColorMixin};
  ${colorMixin};
  ${borderRadiusMixin};
  ${textBasedOnColorMixin};
`;

Box.displayName = 'Box';
