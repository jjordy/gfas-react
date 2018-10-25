import * as React from 'react';
import 'jest-styled-components';
import {
  spacing,
  isBool,
  fluidMixin,
  floatMixin,
  borderBottomRadiusMixin,
  borderTopRadiusMixin,
  borderRadiusMixin,
  borderLeftRadiusMixin,
  borderRightRadiusMixin,
  textAlignMixin,
  size,
  inputMarginMixin,
  handleDarkColor,
  handleLightColor,
  colorMixin,
  backgroundColorMixin,
  textBasedOnColorMixin,
  iconColorMixin,
  iconReverseColorMixin,
  darkenBackgroundColorMixin,
  lookupThemeColor,
  inputColorMixin,
  handleSetBorder
} from '.';
import styled, { ThemeProvider } from '../styled-components';
import renderer from 'react-test-renderer';
import * as Color from 'color';
const Button = styled.button`
  color: red;
  ${spacing}
  ${fluidMixin}
  ${floatMixin}
  ${borderRadiusMixin}
  ${textAlignMixin}
  ${size}
`;

const theme = {
  BASE_SIZE: 1,
  UNIT: 'rem'
};

describe('General Mixins', () => {
  test('Fluid Mixin should set width to 100% when prop is true', () => {
    const tree = renderer.create(<Button fluid theme={theme} />).toJSON();
    expect(tree).toHaveStyleRule('width', '100%');
  });

  test('Input margin mixin should add proper margins', () => {
    const Input = styled.input`
      ${inputMarginMixin};
    `;
    const tree = renderer.create(<Input theme={theme} />).toJSON();
    expect(tree).toHaveStyleRule(
      'margin',
      `${theme.BASE_SIZE * 0.24}${theme.UNIT}`
    );
  });

  test('Float Mixin should set the float attribute', () => {
    const tree = renderer
      .create(<Button float="right" theme={theme} />)
      .toJSON();
    expect(tree).toHaveStyleRule('float', 'right');
    const two = renderer.create(<Button float="left" theme={theme} />).toJSON();
    expect(two).toHaveStyleRule('float', 'left');
  });

  test('Should apply text align mixin to text', () => {
    const tree = renderer
      .create(<Button textAlign="center" theme={theme} />)
      .toJSON();
    expect(tree).toHaveStyleRule('text-align', 'center');
  });

  test('Should apply the proper :after modifer if justify is selected as the text align type', () => {
    const tree = renderer
      .create(<Button textAlign="justify" theme={theme} />)
      .toJSON();
    expect(tree).toHaveStyleRule('display', 'inline-block', {
      modifier: '::after'
    });

    expect(tree).toHaveStyleRule('content', "''", {
      modifier: '::after'
    });

    expect(tree).toHaveStyleRule('width', '100%', {
      modifier: '::after'
    });
  });

  test('Should apply sizing mixin BASE_UNIT * 10', () => {
    const tree = renderer.create(<Button size={2} theme={theme} />).toJSON();
    expect(tree).toHaveStyleRule(
      'height',
      `${theme.BASE_SIZE * 5 * 2}${theme.UNIT}`
    );
    expect(tree).toHaveStyleRule(
      'width',
      `${theme.BASE_SIZE * 5 * 2}${theme.UNIT}`
    );
  });

  describe('Spacing', () => {
    test('Spacing Mixin should combine all padding and margin mixins', () => {
      const tree = renderer
        .create(<Button p={1} mb={2} theme={theme} />)
        .toJSON();
      expect(tree).toHaveStyleRule('padding', '1rem');
      expect(tree).toHaveStyleRule('margin-bottom', '2rem');
    });
  });

  describe('Border Radius', () => {
    test('Should apply Border Radius to the element', () => {
      const tree = renderer.create(<Button rounded theme={theme} />).toJSON();
      expect(tree).toHaveStyleRule(
        'border-radius',
        `${theme.BASE_SIZE / 3.8}${theme.UNIT}`
      );
    });

    test('Direct rounded prop should always override theme for border radius', () => {
      const tree = renderer
        .create(
          <Button
            rounded={false}
            theme={Object.assign({}, theme, { rounded: true })}
          />
        )
        .toJSON();
      expect(tree).toHaveStyleRule('border-radius', undefined);
      const tree2 = renderer
        .create(
          <Button
            rounded={true}
            theme={Object.assign({}, theme, { rounded: false })}
          />
        )
        .toJSON();
      expect(tree2).toHaveStyleRule(
        'border-radius',
        `${theme.BASE_SIZE / 3.8}${theme.UNIT}`
      );
    });

    test('Should apply border top radius to the element', () => {
      const Button = styled.button`
        ${borderTopRadiusMixin};
      `;
      const tree = renderer.create(<Button rounded theme={theme} />).toJSON();
      expect(tree).toHaveStyleRule(
        'border-top-right-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
      expect(tree).toHaveStyleRule(
        'border-top-left-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
    });

    test('Should apply border top radius to the element via theme', () => {
      const Button = styled.button`
        ${borderTopRadiusMixin};
      `;
      const tree = renderer
        .create(<Button theme={Object.assign({}, theme, { rounded: true })} />)
        .toJSON();
      expect(tree).toHaveStyleRule(
        'border-top-right-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
      expect(tree).toHaveStyleRule(
        'border-top-left-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
    });

    test('Should apply border bottom radius to the element', () => {
      const Button = styled.button`
        ${borderBottomRadiusMixin};
      `;
      const tree = renderer.create(<Button rounded theme={theme} />).toJSON();
      expect(tree).toHaveStyleRule(
        'border-bottom-right-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
      expect(tree).toHaveStyleRule(
        'border-bottom-left-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
    });

    test('Should apply border bottom radius to the element via theme', () => {
      const Button = styled.button`
        ${borderBottomRadiusMixin};
      `;
      const tree = renderer
        .create(<Button theme={Object.assign({}, theme, { rounded: true })} />)
        .toJSON();
      expect(tree).toHaveStyleRule(
        'border-bottom-right-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
      expect(tree).toHaveStyleRule(
        'border-bottom-left-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
    });

    test('Should apply border left radius to the element', () => {
      const Button = styled.button`
        ${borderLeftRadiusMixin};
      `;
      const tree = renderer.create(<Button rounded theme={theme} />).toJSON();
      expect(tree).toHaveStyleRule(
        'border-bottom-left-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
      expect(tree).toHaveStyleRule(
        'border-top-left-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
    });

    test('Should apply border left radius to the element via theme', () => {
      const Button = styled.button`
        ${borderLeftRadiusMixin};
      `;
      const tree = renderer
        .create(<Button theme={Object.assign({}, theme, { rounded: true })} />)
        .toJSON();
      expect(tree).toHaveStyleRule(
        'border-bottom-left-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
      expect(tree).toHaveStyleRule(
        'border-top-left-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
    });

    test('Should apply border right radius to the element', () => {
      const Button = styled.button`
        ${borderRightRadiusMixin};
      `;
      const tree = renderer.create(<Button rounded theme={theme} />).toJSON();
      expect(tree).toHaveStyleRule(
        'border-bottom-right-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
      expect(tree).toHaveStyleRule(
        'border-top-right-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
    });

    test('Should apply border right radius to the element via theme', () => {
      const Button = styled.button`
        ${borderRightRadiusMixin};
      `;
      const tree = renderer
        .create(<Button theme={Object.assign({}, theme, { rounded: true })} />)
        .toJSON();
      expect(tree).toHaveStyleRule(
        'border-bottom-right-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
      expect(tree).toHaveStyleRule(
        'border-top-right-radius',
        `${theme.BASE_SIZE / 3.5}${theme.UNIT}`
      );
    });
  });

  describe('Helpers', () => {
    test('isBool helper should only return true if the argument is actually a boolean', () => {
      expect(isBool(null)).toBe(false);
      expect(isBool(false)).toBe(true);
      expect(isBool('false')).toBe(false);
    });

    describe('Border helper function', () => {
      test('Should use a passed border first and foremost', () => {
        expect(
          handleSetBorder('1px solid #e7e7e7', {
            BASE_SIZE: 1,
            UNIT: 'rem',
            border: '2px solid #e7e7e7'
          })
        ).toEqual('1px solid #e7e7e7');
      });

      test('Should use a theme border if border property is null', () => {
        expect(
          handleSetBorder(null, {
            BASE_SIZE: 1,
            UNIT: 'rem',
            border: '2px solid #e7e7e7'
          })
        ).toEqual('2px solid #e7e7e7');
      });
    });
  });

  describe('Color functionality', () => {
    const Button = styled.button`
      ${colorMixin}
      ${backgroundColorMixin}
      ${textBasedOnColorMixin}
      ${iconColorMixin}
      &:hover {
        ${darkenBackgroundColorMixin}
        ${iconReverseColorMixin}
      }
    `;

    const theme = {
      BASE_SIZE: 1,
      UNIT: 'rem',
      colors: {
        primary: '#ffffff',
        white: '#FFFFFF',
        black: '#222222',
        grey: '#ccc'
      }
    };
    test('Should render the proper foreground color', () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={theme}>
            <Button fg="primary" />
          </ThemeProvider>
        )
        .toJSON();
      expect(tree).toHaveStyleRule('color', '#FFFFFF');
    });

    test('Should render the proper background color', () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={theme}>
            <Button bg="primary" />
          </ThemeProvider>
        )
        .toJSON();
      expect(tree).toHaveStyleRule('background-color', '#FFFFFF');
    });

    test('Should render the proper background color when the inverted prop is passed', () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={theme}>
            <Button bg="primary" inverted />
          </ThemeProvider>
        )
        .toJSON();
      expect(tree).toHaveStyleRule(
        'background-color',
        new Color.default(theme.colors.primary).darken(0.5).hex()
      );
    });

    describe('Text Based on Color mixin', () => {
      test('Should return white color when background is dark', () => {
        const tree = renderer
          .create(
            <ThemeProvider theme={theme}>
              <Button bg="#000" />
            </ThemeProvider>
          )
          .toJSON();
        expect(tree).toHaveStyleRule('color', '#FFF');
      });
      test('Should return #222 color when background is light', () => {
        const tree = renderer
          .create(
            <ThemeProvider theme={theme}>
              <Button bg="#FFF" />
            </ThemeProvider>
          )
          .toJSON();
        expect(tree).toHaveStyleRule('color', '#222');
      });
    });
    describe('Helper Functions', () => {
      describe('Lookup Color helper function', () => {
        test('Should lookup the color inside the theme and if it exists should use that', () => {
          const c: Color = lookupThemeColor('primary', theme);
          expect(c.hex()).toEqual('#FFFFFF');
          const d: Color = lookupThemeColor('#000000', theme);
          expect(d.hex()).toEqual('#000000');
        });

        test('Should just return black if a bogus color is passed in', () => {
          const c: Color = lookupThemeColor('someBogusColor', theme);
          expect(c.hex()).toEqual('#000000');
        });
      });

      describe('Handle Light Color Helper function', () => {
        test('If inverted Prop is passed in darken the color', () => {
          const lightColor: Color = new Color.default('#FFF');
          const result: string = handleLightColor(
            { inverted: true },
            lightColor
          );
          expect(result).toEqual(new Color.default('#FFF').darken(1).hex());
        });

        test('Should return a nice dark #222 by default', () => {
          const lightColor: Color = new Color.default('#FFF');
          const result: string = handleLightColor(
            { inverted: false },
            lightColor
          );
          expect(result).toEqual('#222');
        });
      });

      describe('Handle Dark Color Helper function', () => {
        test('If inverted Prop is passed in lighten the color', () => {
          const darkColor: Color = new Color.default('#000');
          const result: string = handleDarkColor({ inverted: true }, darkColor);
          expect(result).toEqual(new Color.default('#000').lighten(1).hex());
        });

        test('Should return a nice white #fff by default', () => {
          const darkColor: Color = new Color.default('#000');
          const result: string = handleDarkColor(
            { inverted: false },
            darkColor
          );
          expect(result).toEqual('#FFF');
        });
      });

      describe('Darken background color mixin', () => {
        test('Should darken the background color using theme.color', () => {
          const darkenedColor: string = new Color.default('#f30')
            .darken(0.2)
            .hex();
          const tree = renderer
            .create(<Button bg="#f30" theme={theme} />)
            .toJSON();
          expect(tree).toHaveStyleRule('background-color', darkenedColor, {
            modifier: ':hover'
          });
        });
      });

      describe('Icon Reverse color mixin', () => {
        test('Should reverse the fill and stroke of an element', () => {
          // color with luminosity greater than 0.6 will return a light color
          const tree = renderer
            .create(<Button bg="#f30" theme={theme} />)
            .toJSON();
          expect(tree).toHaveStyleRule('fill', '#FFFFFF', {
            modifier: ':hover'
          });
          expect(tree).toHaveStyleRule('stroke', '#FFFFFF', {
            modifier: ':hover'
          });
          // color with luminosity less than 0.6 will return a light color
          const tree2 = renderer
            .create(<Button bg="#FFF" theme={theme} />)
            .toJSON();
          expect(tree2).toHaveStyleRule('fill', '#222222', {
            modifier: ':hover'
          });
          expect(tree2).toHaveStyleRule('stroke', '#222222', {
            modifier: ':hover'
          });
        });
      });
      describe('Icon Color Mixin', () => {
        test('Should set the fill on the element to the bg color', () => {
          const tree = renderer
            .create(<Button theme={theme} bg="primary" />)
            .toJSON();
          expect(tree).toHaveStyleRule(
            'fill',
            new Color.default(theme.colors.primary).hex()
          );
        });
      });

      describe('Input Color Mixin', () => {
        test('Should set the color to the grey on the theme prop', () => {
          const Input = styled.input`
            ${inputColorMixin};
          `;
          const tree = renderer.create(<Input theme={theme} />).toJSON();
          expect(tree).toHaveStyleRule('color', theme.colors.grey);
        });
      });
    });
  });
});
