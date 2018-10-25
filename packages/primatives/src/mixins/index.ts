import { css } from '../styled-components';
import {
  createRule,
  pxMixin,
  pyMixin,
  mxMixin,
  myMixin,
  pMixin,
  mMixin,
  mbMixin,
  mtMixin,
  pbMixin,
  ptMixin,
  plMixin,
  prMixin,
  mlMixin,
  mrMixin
} from './spacing';

import * as Color from 'color';

import SharedProps from '../types/SharedProps';
import ThemeInterface from '../types/Theme';
/**
 *  HELPER FUNCTIONS
 *
 */

/**
 * figures out if the argument is actually a boolean
 * a string or something else
 **/

export const isBool = (v: boolean | string | null) => typeof v === 'boolean';
/**
 * Figure out if a border needs to be set first checking the passed in property
 * if theres no passed in border property check to see if the theme
 * sets a border property and set it there.
 **/

export const handleSetBorder = (
  val: string | string,
  theme: ThemeInterface
): string => {
  if (val) {
    return val;
  } else if (!val && theme.border) {
    return theme.border;
  }
  return '';
};
/**
 * Lookup the color and create a Color object with it.
 * if some bogus color is passed in just return black.
 **/

export const lookupThemeColor = (
  color: string,
  theme: ThemeInterface
): Color => {
  try {
    if (theme && theme.colors[color]) {
      const themeColor: Color = Color.default(theme.colors[color]);
      return themeColor;
    } else {
      const passedColor: Color = Color.default(color);
      return passedColor;
    }
  } catch (err) {
    const defaultColor: Color = Color.default('#000');
    return defaultColor;
  }
};
/**
 * Handle returning a light color based on the inverted prop else return a default
 **/

export function handleLightColor(props: SharedProps, color: Color): string {
  if (props.inverted) {
    return color.darken(1).hex();
  }
  return '#222';
}
/**
 * Handle returning a dark color based on the inverted prop else return a default
 **/

export function handleDarkColor(props: SharedProps, color: Color): string {
  if (props.inverted) {
    return color.lighten(1).hex();
  }
  return '#FFF';
}
/**
 * Position Mixins
 */
export const fluidMixin = css<SharedProps>`
  width: ${props => props.fluid && '100%'};
`;
export const floatMixin = css<SharedProps>`
  float: ${props => (props.float ? props.float : null)};
`;

/**
 * Border Radius mixins
 */
export const borderTopRadiusMixin = css<SharedProps>`
  ${props =>
    (props.rounded || props.theme.rounded) &&
    `
    border-top-right-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT};
    border-top-left-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT}; 
  `};
`;

export const borderBottomRadiusMixin = css<SharedProps>`
  ${props =>
    (props.rounded || props.theme.rounded) &&
    `
    border-bottom-right-radius: ${props.theme.BASE_SIZE / 3.5}${
      props.theme.UNIT
    };
    border-bottom-left-radius: ${props.theme.BASE_SIZE / 3.5}${
      props.theme.UNIT
    }; 
  `};
`;

export const borderRightRadiusMixin = css<SharedProps>`
  ${props =>
    (props.rounded || props.theme.rounded) &&
    `
    border-top-right-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT};
    border-bottom-right-radius: ${props.theme.BASE_SIZE / 3.5}${
      props.theme.UNIT
    }; 
  `};
`;

export const borderLeftRadiusMixin = css<SharedProps>`
  ${props =>
    (props.rounded || (!isBool(props.rounded) && props.theme.rounded)) &&
    `
    border-top-left-radius: ${props.theme.BASE_SIZE / 3.5}${props.theme.UNIT};
    border-bottom-left-radius: ${props.theme.BASE_SIZE / 3.5}${
      props.theme.UNIT
    }; 
  `};
`;

export const borderRadiusMixin = css<SharedProps>`
  ${props =>
    ((!props.secondary && props.rounded) ||
      (!props.secondary && !isBool(props.rounded) && props.theme.rounded)) &&
    `
    border-radius: ${props.theme.BASE_SIZE / 3.8}${props.theme.UNIT};
  `};
`;
/**
 * Text Alignment Mixins
 */
export const textAlignMixin = css<SharedProps>`
  text-align: ${props => (props.textAlign ? props.textAlign : null)};
  ${props =>
    props.textAlign === 'justify' &&
    `
    &::after {
      display: inline-block;
      content: '';
      width: 100%;
    }
  `};
`;
/**
 * Border Mixins
 */
export const borderMixin = css<SharedProps>`
  border: ${props => handleSetBorder(props.border, props.theme)};
`;
/**
 * Size Mixins
 */
export const size = css<SharedProps>`
  width: ${props =>
    props.size && props.size * props.theme.BASE_SIZE * 5 + props.theme.UNIT};
  height: ${props =>
    props.size && props.size * props.theme.BASE_SIZE * 5 + props.theme.UNIT};
`;
/**
 * Input Mixins
 */
export const inputPaddingMixin = css<SharedProps>`
  ${createRule(0.3, 'padding')};
  box-sizing: border-box;
`;

export const inputMarginMixin = css<SharedProps>`
  margin: ${props => `${props.theme.BASE_SIZE * 0.24}${props.theme.UNIT}`};
  box-sizing: border-box;
`;

export const inputColorMixin = css<SharedProps>`
  ${props =>
    props.theme &&
    `
    color: ${props.theme.colors.grey};
  `};
`;

/**
 * Font Mixins
 */

export const normalFontMixin = css<SharedProps>`
  font-family: inherit;
  font-weight: 400;
  font-size: 1rem;
`;
export const heavyFontMixin = css<SharedProps>`
  font-family: inherit;
  font-weight: 700;
  font-size: 0.8rem;
`;

/**
 * Color Mixins
 */
export const darkenBackgroundColorMixin = css<SharedProps>`
  ${props =>
    props.bg &&
    `
    background-color: ${lookupThemeColor(props.bg, props.theme)
      .darken(0.2)
      .hex()};
  `};
`;

export const colorMixin = css<SharedProps>`
  ${props =>
    props.fg &&
    `
    color: ${lookupThemeColor(props.fg, props.theme).hex()};
  `};
`;

export const iconReverseColorMixin = css<SharedProps>`
  ${props =>
    props.bg &&
    `
    stroke: ${
      lookupThemeColor(props.bg, props.theme).luminosity() < 0.6
        ? props.theme.colors.white
        : props.theme.colors.black
    };
    fill: ${
      lookupThemeColor(props.bg, props.theme).luminosity() < 0.6
        ? props.theme.colors.white
        : props.theme.colors.black
    };
  `};
`;

export const iconColorMixin = css<SharedProps>`
  ${props =>
    props.bg &&
    `
    fill: ${lookupThemeColor(props.bg, props.theme).hex()};
  `};
`;

export const backgroundColorMixin = css<SharedProps>`
  ${props =>
    props.bg &&
    `
    background-color: ${
      props.inverted
        ? lookupThemeColor(props.bg, props.theme)
            .darken(0.5)
            .hex()
        : lookupThemeColor(props.bg, props.theme).hex()
    };
  `};
`;

export const textBasedOnColorMixin = css<SharedProps>`
  ${props =>
    props.bg &&
    !props.fg &&
    `
    color: ${
      lookupThemeColor(props.bg, props.theme).luminosity() < 0.6
        ? handleDarkColor(props, lookupThemeColor(props.bg, props.theme))
        : handleLightColor(props, lookupThemeColor(props.bg, props.theme))
    };
  `};
`;

/**
 * Exports
 */

export const spacing = css<SharedProps>`
  ${pxMixin}
  ${pyMixin}
  ${mxMixin}
  ${myMixin}
  ${pMixin}
  ${mMixin}
  ${mbMixin}
  ${mtMixin}
  ${pbMixin}
  ${ptMixin}
  ${plMixin}
  ${prMixin}
  ${mlMixin}
  ${mrMixin} 
`;

export {
  pxMixin,
  pyMixin,
  mxMixin,
  myMixin,
  pMixin,
  mMixin,
  mbMixin,
  mtMixin,
  pbMixin,
  ptMixin,
  createRule
} from './spacing';
