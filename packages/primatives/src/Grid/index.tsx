import * as React from 'react';
import styled from '../styled-components';
import { Box, BoxProps } from '../Box';
import SharedProps from '../types/SharedProps';

const px = (n: number | string) => (typeof n === 'number' ? n + 'px' : n);

const Base: React.SFC<GridProps & BoxProps> = ({
  width,
  gap,
  align,
  ...rest
}) => <Box {...rest} />;

export const Grid = styled(Base)`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(calc(${props => px(props.width)} - ${props => px(props.gap)}), 1fr)
  );
  grid-gap: ${props => px(props.gap)};
  align-items: ${props => props.align || null};
  grid-column: ${props => (props.span ? `span ${props.span}` : null)};
  ${props =>
    !props.dontBreakOnMobile &&
    `@media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }`};
`;

Grid.displayName = 'Grid';

export interface GridProps extends SharedProps {
  width: number | string;
  gap: number | string;
  align?: string;
  span?: number | string;
  dontBreakOnMobile?: boolean;
}
