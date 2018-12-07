import React from 'react'
import { Grid } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { number, text } from '@storybook/addon-knobs'
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
        width={text('Width', '33%')}
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
              backgroundColor: '#e7e7e7',
              height: 100,
              gridColumn: i % 2 ? '1 / span 2' : null,
              color: 'gray',
              padding: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
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
