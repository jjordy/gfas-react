import React from 'react'
import { storiesOf } from '@storybook/react'
import { Header, Container, Grid } from 'semantic-ui-react'
import LiveEditor from './LiveEditor'
import { withInfo } from '@storybook/addon-info'
import BasicExample from './BasicExample'
import basicIAMPolicyExample from './examples/basic_example_iam_policy.json'
import basicUserDataExample from './examples/basic_user_data_example.json'
import { IAMPolicy } from 'gfas-iam-react'
import KitchenSinkExampleComponent from './KitchenSinkExampleComponent'
import kitchenSinkIAMPolicyExample from './examples/kitchen_sink_iam_policy.json'
import kitchenSinkUserData from './examples/kitchen_sink_user_data.json'

storiesOf('IAMPolicy Component', module)
  .add(
    'Basic Example',
    withInfo({
      propTables: [IAMPolicy],
      propTablesExclude: [Header, Grid, LiveEditor, Container]
    })(() => (
      <Container style={{ paddingTop: 50 }}>
        <Header dividing>Basic Example</Header>
        <Grid columns={2}>
          <LiveEditor
            policyName='BasicExample'
            component={BasicExample}
            policy={basicIAMPolicyExample}
            userData={basicUserDataExample}
          />
        </Grid>
      </Container>
    ))
  )
  .add(
    'Kitchen Sink Example',
    withInfo()(() => (
      <Container style={{ paddingTop: 50 }}>
        <Grid columns={2}>
          <LiveEditor
            policyName='KitchenSinkExample'
            component={KitchenSinkExampleComponent}
            policy={kitchenSinkIAMPolicyExample}
            userData={kitchenSinkUserData}
          />
        </Grid>
      </Container>
    ))
  )
