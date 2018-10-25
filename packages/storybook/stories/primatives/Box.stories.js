import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Flex } from '@jjordy/primatives'

storiesOf('@jjordy/Primatives/Box', module).add('Default', () => (
  <Box bg='primary' fg='pink' rounded={false} p={4}>
    <Flex justify='center' align='center'>
      The Basic Building Block of all components
    </Flex>
  </Box>
))
