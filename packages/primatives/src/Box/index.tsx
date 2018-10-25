import styled from '../styled-components';
import {
  spacing,
  size,
  borderMixin,
  backgroundColorMixin,
  colorMixin,
  borderRadiusMixin,
  textBasedOnColorMixin,
  textAlignMixin
} from '../mixins';
import SharedProps from '../types/SharedProps';

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
  ${textAlignMixin};
`;

Box.displayName = 'Box';
