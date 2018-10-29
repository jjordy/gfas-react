import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grid, Box } from '@jjordy/primatives'
import { select } from '@storybook/addon-knobs/react'
import _ from 'lodash'

storiesOf('@jjordy/Primatives/Grid', module).add('Default', () => (
  <Grid
    gap={16}
    width={select(
      'Width',
      {
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%'
      },
      '10%'
    )}
  >
    {_.times(9, i => (
      <Box border='2px solid orange' p={3} bg='pink' key={i}>
        {i}
      </Box>
    ))}
  </Grid>
))
