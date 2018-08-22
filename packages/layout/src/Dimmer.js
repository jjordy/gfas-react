import styled from 'styled-components'
import Loader from './Loader'

const StyledLoader = styled(Loader)``

const Dimmer = styled.div`
  display: ${props => props.active ? 'flex !important' : 'none'};
  position: absolute;
  top: 0 !important;
  left: 0 !important;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  background-color: rgba(255, 255, 255, 0.85);
  opacity: ${props => props.active ? 1 : 0};
  line-height: 1;
  animation-fill-mode: both;
  animation-duration: 0.5s;
  transition: background-color 0.5s linear;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  will-change: opacity;
  z-index: 1000;
  & ${StyledLoader} {
    opacity: 1;
  }
`

export default Dimmer
