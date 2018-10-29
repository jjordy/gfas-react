import * as React from 'react';
import { Grid, GridProps } from '.';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

describe('<Grid /> Component', () => {
  const createWrapper = (props: GridProps = { width: '33%', gap: 16 }) => {
    let _wrapper: renderer.ReactTestRendererJSON;
    _wrapper = renderer
      .create(
        <Grid
          span={props.span}
          width={props.width}
          gap={props.gap}
          align={props.align}
          dontBreakOnMobile={props.dontBreakOnMobile}
        >
          <a className="child-1">Child 1</a>
          <a className="child-2">Child 2</a>
          <a className="child-3">Child 3</a>
        </Grid>
      )
      .toJSON();
    return _wrapper;
  };

  test('<Grid /> should render with display grid', () => {
    const wrapper = createWrapper();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('display', 'grid');
  });

  test('<Grid /> Should render the proper gap between each item', () => {
    const wrapper = createWrapper();
    expect(wrapper).toHaveStyleRule('grid-gap', '16px');
  });

  test('<Grid /> Should handle the span property', () => {
    const wrapper = createWrapper({ width: '50%', gap: 16, span: 16 });
    expect(wrapper).toHaveStyleRule('grid-column', 'span 16');
  });
});
