import styled from 'styled-components'
import { heavyFontMixin } from '../mixins'

const StyledLabel = styled.label`
  display: block;
  color: ${props =>
    props.theme && props.theme.colors
      ? props.theme.colors.grey
      : 'rgba(0, 0, 0, 0.87)'};
  ${heavyFontMixin}
  ${props =>
    props.hideLabel &&
    `
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
  `}
  text-transform: none;
  ${props =>
    !props.inline &&
    `
    margin-left: .3rem;
    margin-bottom: .3rem;
  `}
`

export default StyledLabel
