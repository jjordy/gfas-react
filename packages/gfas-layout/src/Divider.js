import styled from 'styled-components'

export default styled.div`
  border-bottom: ${props => !props.hidden && '2px solid #e7e7e7'}
  margin-bottom: 2rem;
  margin-top: 2rem;
`
