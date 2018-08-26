import React from 'react'
import { Grid } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { number } from '@storybook/addon-knobs'
import { select } from '@storybook/addon-knobs/react'
import _ from 'lodash'

storiesOf('@jjordy/Layout/Grid', module)
  .addDecorator(fn => {
    setOptions({
      selectedAddonPanel: 'storybooks/storybook-addon-knobs'
    })
    return fn()
  })
  .add(
    'Default',
    () => (
      <Grid
        width={number('Width', 250)}
        gap={number('Gap', 8)}
        align={select(
          'Alignment Options',
          {
            Start: 'start',
            End: 'end',
            Center: 'center',
            Auto: 'auto',
            Normal: 'normal',
            Stretch: 'stretch',
            Baseline: 'baseline',
            'First Baseline': 'first baseline',
            'Last Baseline': 'last baseline'
          },
          'start'
        )}
      >
        {_.times(10, i => (
          <div
            key={i}
            style={{
              backgroundColor: 'white',
              height: 100,
              color: 'gray',
              padding: '1rem',
              fontWeight: 700
            }}
          >
            {i}
          </div>
        ))}
      </Grid>
    ),
    { notes: 'A Css Grid Component' }
  )
