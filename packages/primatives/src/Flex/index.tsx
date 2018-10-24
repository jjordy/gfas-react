import styled from '../styled-components';
import { spacing } from '../mixins';
import SharedProps from '../types/SharedProps';

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

export interface FlexProps extends SharedProps {
  text?: boolean;
  justify?: JustifyTypes | string;
  align?: AlignTypes | string;
  direction?: DirectionTypes | string;
}

export const Flex = styled<FlexProps, 'div'>('div')`
  box-sizing: border-box;
  display: flex;
  justify-content: ${props => props.justify || JustifyTypes.FlexStart};
  align-items: ${props => props.align || AlignTypes.Normal};
  flex-direction: ${props => props.direction || DirectionTypes.Row};
  ${spacing};
`;

Flex.displayName = 'Flex';
