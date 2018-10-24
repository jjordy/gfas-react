import styled from './styled-components'
import { spacing } from './mixins'
import SharedProps from './types/SharedProps'

enum JustifyTypes {
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

enum AlignTypes {
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
  text?: boolean
  justify?: JustifyTypes,
  align?: AlignTypes
}

export const Flex = styled<FlexProps, 'div'>('div')`
  box-sizing: border-box;
  display: flex;
  justify-content: ${props => props.justify || JustifyTypes.FlexStart};
  align-items: ${props => props.align || AlignTypes.Normal};
  ${spacing};
`

Flex.displayName = 'Flex'
