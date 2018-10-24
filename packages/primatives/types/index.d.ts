declare module 'styled-components/test-utils' {
  export function find(element: Element, styledComponent: object): Element;
  export function findAll(element: Element, styledComponent: object): Element;
  export function enzymeFind(wrapper: object, styledComponent: object): object;
}
