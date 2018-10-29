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

export interface Border {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export default interface SharedProps {
  /* Should the element be fluid e.g. 100% width */
  fluid?: boolean;
  /* Should the element be floated to the right or left */
  float?: Positions | string;
  /* Should the element be rounded with border radius? */
  rounded?: boolean;
  /* The element can be secondary and take secondary styles */
  secondary?: boolean;
  /* Border for the item */
  border?: string | Border;
  /* Align the text */
  textAlign?: Positions | string;
  /* Sets the width and height to 5 times the BASE_SIZE + UNIT */
  size?: Sizes;
  /* Should the items background and forground be inverted if applicable? */
  inverted?: boolean;
  /* Foreground color */
  fg?: string;
  /* Background color */
  bg?: string;
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
