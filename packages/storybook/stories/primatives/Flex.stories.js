import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex } from '@jjordy/primatives'
import { select } from '@storybook/addon-knobs/react'

storiesOf('@jjordy/Primatives/Flex', module).add('Default', () => (
  <Flex
    bg='black'
    justify={select(
      'Justify Content',
      {
        'Space Between': 'space-between',
        'Space Around': 'space-around',
        'Flex Start': 'flex-start',
        'Flex End': 'flex-end',
        Center: 'center'
      },
      'space-between'
    )}
    align={select(
      'Align Items',
      {
        'Flex Start': 'flex-start',
        'Flex End': 'flex-end',
        Center: 'center'
      },
      'flex-start'
    )}
  >
    <button>Button 1</button>
    <button>Button 2</button>
  </Flex>
))
