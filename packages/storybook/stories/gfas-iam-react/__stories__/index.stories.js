import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import LiveEditor from './LiveEditor'
import BasicExample from './BasicExample'
import basicIAMPolicyExample from './examples/basic_example_iam_policy.json'
import basicUserDataExample from './examples/basic_user_data_example.json'
import KitchenSinkExampleComponent from './KitchenSinkExampleComponent'
import kitchenSinkIAMPolicyExample from './examples/kitchen_sink_iam_policy.json'
import kitchenSinkUserData from './examples/kitchen_sink_user_data.json'

storiesOf('IAMPolicy Component', module)
  .add(
    'Basic Example',
    withInfo()(() => (
      <LiveEditor
        policyName='BasicExample'
        component={BasicExample}
        policy={basicIAMPolicyExample}
        userData={basicUserDataExample}
      />
    ))
  )
  .add(
    'Kitchen Sink Example',
    withInfo()(() => (
      <LiveEditor
        policyName='KitchenSinkExample'
        component={KitchenSinkExampleComponent}
        policy={kitchenSinkIAMPolicyExample}
        userData={kitchenSinkUserData}
      />
    ))
  )
