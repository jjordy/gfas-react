import * as Color from 'color';

export enum Sizes {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6
}

export enum Positions {
  Left = 'left',
  Right = 'right',
  Center = 'center',
  Justify = 'justify'
}

export default interface SharedProps {
  fluid?: boolean;
  float?: Positions | string;
  rounded?: boolean;
  secondary?: boolean;
  border?: string;
  textAlign?: Positions | string;
  size?: Sizes;
  /* Should the items background and forground be inverted if applicable? */
  inverted?: boolean;
  /* Object from the color library allowing color manipulations */
  color?: Color;
  /* Object from the color library allowing color manipulations */
  fg?: string;
  /* Object from the color library allowing color manipulations */
  bg?: string;
  backgroundColor?: string;
  /* Padding */
  p?: Sizes;
  /* Padding X-Axis */
  px?: Sizes;
  /* Padding Y-Axis */
  py?: Sizes;
  /* Padding top */
  pt?: Sizes;
  /* Padding Bottom */
  pb?: Sizes;
  /* Padding Right */
  pr?: Sizes;
  /* Padding Left */
  pl?: Sizes;
  /* Margin */
  m?: Sizes;
  /* Margin X-Axis */
  mx?: Sizes;
  /* Margin Y-Axis */
  my?: Sizes;
  /* Margin Top */
  mt?: Sizes;
  /* Margin Bottom */
  mb?: Sizes;
  /* Margin Right */
  mr?: Sizes;
  /* Margin Left */
  ml?: Sizes;
}
