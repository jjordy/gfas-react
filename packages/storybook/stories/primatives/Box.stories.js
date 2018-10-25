import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Flex } from '@jjordy/primatives'

storiesOf('@jjordy/Primatives/Box', module).add('Default', () => (
  <Box bg='primary' p={4} textAlign='center'>
    <strong>The Basic Building Block of all components</strong>
  </Box>
))
