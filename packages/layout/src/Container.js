import styled from 'styled-components'

export default styled.div`
  margin: auto;
  width: ${props => (props.text ? '750px' : '1150px')};
  @media(max-width: 1024px) {
    width: 100%;
  }
`
