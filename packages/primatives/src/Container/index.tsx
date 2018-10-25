import * as React from 'react';
import styled from '../styled-components';
import SharedProps from '../types/SharedProps';
import { Box, BoxProps } from '../Box';

export interface ContainerProps extends SharedProps {
  text?: boolean;
}

const Base: React.SFC<ContainerProps & BoxProps> = ({ text, ...rest }) => (
  <Box {...rest} />
);

export const Container = styled(Base)`
  max-width: ${props => (props.text ? '750px' : '1150px')};
  margin: auto;
  font-size: ${props => (props.text ? '1.1rem' : 'inherit')};
`;

Container.displayName = 'Container';
