import styled from 'styled-components'

export default styled.div`
  border-bottom: ${props => !props.hidden && '2px solid #e7e7e7'}
  margin-bottom: ${props => props.fitted ? '1rem' : '2rem'};
  margin-top: ${props => props.fitted ? '1rem' : '2rem'};
`
