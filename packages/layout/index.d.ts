import { Component, SFC, ReactNode, ReactElement, ComponentClass } from "react";

export enum Sizes {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6
}

export enum Positions {
  Left = "left",
  Right = "right",
  Center = "center",
  Justify = "justify"
}

export interface Border {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export interface SharedProps {
  /* As prop to change any component type */
  as?: any;
  /* Same as Bg Mostly */
  color?: string;
  /* React element or string or anything really */
  children?: any;
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
  /* Style Object */
  style?: object;
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
  /* onClick Handler */
  onClick?: (v: any) => any;
  /* Box could be used as an svg */
  viewBox?: string;
  [x: string]: any;
}

export interface ButtonProps {
  content?: string | ReactElement<any>;
  icon?: string;
}

export interface ContainerProps {
  text?: boolean;
}

export interface CheckboxProps {
  checked?: boolean;
  [a: string]: any;
}

export interface DimmerProps {
  active?: boolean;
  dark?: boolean;
}

export interface DividerProps {
  hidden?: boolean;
  fitted?: boolean;
}

export interface HeaderProps {
  dividing?: boolean;
}

export interface IconProps {
  icon?: string;
}

export interface ImageProps {
  centered?: boolean;
  src: string;
  srcset?: string;
  alt: string;
  title?: string;
  thumbnail?: boolean;
  size?: "tiny" | "small" | "medium" | "large" | "massive";
}

export interface InputProps {
  [a: string]: any;
  name: string;
  value?: string | number;
}

export interface FormProps {
  onSubmit?: (a: any) => any;
}

export interface LabelProps {
  children?: ReactElement<any>;
}

export interface LoaderProps {
  active?: boolean;
  type?: string;
}

export interface GridProps {
  width: string | number;
  align?: string;
  gap: string | number;
}

export interface MenuProps {
  vertical?: boolean;
  secondary?: boolean;
}

export interface MenuItemProps {}

export interface MessageProps {
  onClose: (a: any) => {};
}

export interface ProgressProps {
  percent: number;
}

export interface ResponsiveProps {
  only: "tablet" | "desktop" | "mobile";
}

export interface SegmentProps {
  attached?: "top" | "bottom" | boolean;
}

export interface SelectOption {
  value: any;
  name?: string;
  label?: string;
}

export interface SelectProps extends InputProps {
  options: Array<SelectOption>;
}

export interface TabsProps {
  name?: string;
  title?: string;
  render?: (a: any) => {};
  component?: Component<any>;
}

export interface TextProps {
  strong?: boolean;
  small?: boolean;
}

export interface FlexProps {
  direction?: "column" | "row" | "column-reverse" | "row-reverse";
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  content?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
    | "stretch";
}

declare class Header extends Component<SharedProps & HeaderProps> {}
declare class Icon extends Component<SharedProps & IconProps> {}
declare class Image extends Component<SharedProps & ImageProps> {}
declare class Input extends Component<SharedProps & InputProps> {}
declare class Form extends Component<SharedProps & FormProps> {}
declare class Label extends Component<SharedProps & LabelProps> {}
declare class Loader extends Component<SharedProps & LoaderProps> {}
declare class Grid extends Component<SharedProps & GridProps> {}
declare class Menu extends Component<SharedProps & MenuProps> {
  static Item: Component<SharedProps & MenuItemProps>;
}
declare class Message extends Component<SharedProps & MessageProps> {}
declare class Progress extends Component<SharedProps & ProgressProps> {}
declare class Responsive extends Component<SharedProps & ResponsiveProps> {}
declare class Segment extends Component<SharedProps & SegmentProps> {}
declare class Select extends Component<SharedProps & SelectProps> {}
declare class Tabs extends Component<SharedProps & TabsProps> {}
declare class Tab extends Component<SharedProps & TabsProps> {}
declare class Text extends Component<SharedProps & TextProps> {}
declare class Flex extends Component<SharedProps & FlexProps> {}
declare class Divider extends Component<SharedProps & DividerProps> {}
declare class Box extends Component<SharedProps> {}
declare class Dimmer extends Component<DimmerProps> {}
declare class Checkbox extends Component<SharedProps & CheckboxProps> {}
declare class Container extends Component<SharedProps & ContainerProps> {}
declare class Button extends Component<SharedProps & ButtonProps> {}
