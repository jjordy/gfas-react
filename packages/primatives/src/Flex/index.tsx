import * as React from 'react';
import styled from '../styled-components';
import SharedProps from '../types/SharedProps';
import { Box, BoxProps } from '../Box';

export enum JustifyTypes {
  Center = 'center',
  Start = 'start',
  End = 'end',
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Left = 'left',
  Right = 'right',
  SpaceBetween = 'space-between',
  SpaceAround = 'space-around',
  Stretch = 'stretch',
  SpaceEvenly = 'space-evenly'
}

export enum DirectionTypes {
  Row = 'row',
  RowReverse = 'row-reverse',
  Column = 'column',
  ColumnReverse = 'column-reverse'
}

export enum AlignTypes {
  Normal = 'normal',
  Center = 'center',
  Start = 'start',
  End = 'end',
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Left = 'left',
  Right = 'right'
}

export enum WrapTypes {
  NoWrap = 'nowrap',
  Wrap = 'wrap',
  WrapReverse = 'wrap-reverse'
}

export interface FlexProps extends SharedProps {
  justify?: JustifyTypes | string;
  align?: AlignTypes | string;
  direction?: DirectionTypes | string;
  wrap?: WrapTypes | string;
}

const Base: React.SFC<FlexProps & BoxProps> = ({
  justify,
  align,
  direction,
  wrap,
  ...rest
}) => {
  return <Box {...rest} />;
};

export const Flex = styled(Base)`
  display: flex;
  justify-content: ${props => props.justify || JustifyTypes.FlexStart};
  align-items: ${props => props.align || AlignTypes.Normal};
  flex-direction: ${props => props.direction || DirectionTypes.Row};
  flex-wrap: ${props => props.wrap || WrapTypes.NoWrap};
`;

Flex.displayName = 'Flex';
