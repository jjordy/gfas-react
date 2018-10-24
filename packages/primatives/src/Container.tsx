import styled from './styled-components'
import { spacing } from './mixins'
import SharedProps from './types/SharedProps'

export interface ContainerProps extends SharedProps {
  text?: boolean
}

export const Container = styled<ContainerProps, 'div'>('div')`
  box-sizing: border-box;
  max-width: ${props => (props.text ? '750px' : '1150px')};
  margin: auto;
  font-size: ${props => (props.text ? '1.1rem' : 'inherit')};
  ${spacing};
`

Container.displayName = 'Container'