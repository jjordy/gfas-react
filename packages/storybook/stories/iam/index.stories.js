import React from 'react'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Segment } from '@jjordy/layout'
import accessExamplePolicy from './examples/access_example_iam_policy.json'
import { IAMPolicy, IAMVisible } from '@jjordy/iam'

storiesOf('@jjordy/IAM', module).add('Access Example', () => (
  <IAMPolicy
    name='AccessExample'
    policy={object('Access Policy', accessExamplePolicy, 'Access Examples')}
    render={({ policy }) => (
      <Segment color='orange'>
        <IAMVisible field='panel' effects={policy.visible} render={() => <div>I AM VISIBLE PANEL</div>} />
      </Segment>
    )}
    onDeny={action('Denied')}
    onAllow={action('Allowed')}
    userData={object('User Data', { token: { groups: ['billing'] } }, 'Access Examples')}
  />
))
