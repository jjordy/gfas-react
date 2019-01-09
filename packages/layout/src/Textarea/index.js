import React from 'react'
import styled from 'styled-components'
import Flex from '../Flex'
import FormLabel from '../FormLabel'

const StyledTextarea = styled.textarea`
  border-radius: 6px;
  border: ${props =>
    props.error ? `2px solid ${props.theme.colors.red}` : '1px solid #e7e7e7'};
  margin-bottom: 1rem;
`

const Textarea = ({ id, label, rows, ...rest }) => (
  <Flex direction='column'>
    <FormLabel htmlFor={id}>{label}</FormLabel>
    <StyledTextarea {...rest} rows={rows} />
  </Flex>
)

Textarea.defaultProps = {
  rows: 5
}

export default Textarea
