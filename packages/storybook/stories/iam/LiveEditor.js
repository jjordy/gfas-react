import React from 'react'
import { Grid, Header, Message, Dimmer } from 'semantic-ui-react'
import { IAMPolicy } from '@jjordy/iam'
import { action } from '@storybook/addon-actions'
import JSONEditor from './JSONEditor'

export default class LiveEditor extends React.Component {
  state = {
    livePolicy: null,
    invalid: false,
    userData: null,
    deny: false,
    error: null
  }
  componentDidCatch (err) {
    console.log(err)
    this.setState({ error: err })
  }
  componentWillMount () {
    this.setState({
      livePolicy: this.props.policy,
      userData: this.props.userData
    })
  }
  onEditorUpdate = ({ iam, user }) => {
    try {
      const p = JSON.parse(iam)
      const u = JSON.parse(user)
      this.setState({ livePolicy: p, invalid: false, userData: u })
    } catch (err) {
      this.setState({ invalid: true, userData: null, livePolicy: null })
    }
  }

  onDeny = errors => {
    if (errors) {
      action('DENIED')(errors)
      this.setState({ deny: true })
    }
  }

  handleUpdateUserTypes = userTypes => {
    const keys = Object.keys(userTypes)
    const filtered = keys.filter(key => userTypes[key])
    const token = this.state.userData.token
    const newToken = Object.assign({}, token, { userTypes: filtered })
    this.setState({
      userData: Object.assign({}, this.state.userData, { token: newToken })
    })
  }

  handleUpdateGroups = groups => {
    const keys = Object.keys(groups)
    const filtered = keys.filter(key => groups[key])
    const token = this.state.userData.token
    const newToken = Object.assign({}, token, { groups: filtered })
    this.setState({
      userData: Object.assign({}, this.state.userData, { token: newToken })
    })
  }

  onAllow = () => {
    action('ALLOWED')()
    this.setState({ deny: false })
  }

  render () {
    const { livePolicy, invalid, userData } = this.state
    const deny = <Dimmer active={this.state.deny} content='Access Denied' />
    return (
      <Grid container columns={2}>
        <Grid.Row>
          <Grid.Column>
            {this.state.error && <div>{this.state.error}</div>}
            {this.state.deny && deny}
            {userData &&
              livePolicy && (
              <IAMPolicy
                policy={livePolicy}
                userData={userData}
                name={this.props.policyName}
                onDeny={this.onDeny}
                onAllow={this.onAllow}
                render={({ display, policy }) => (
                  <div>
                    {display &&
                        React.createElement(this.props.component, {
                          policy: policy,
                          userData: userData
                        })}
                  </div>
                )}
              />
            )}
          </Grid.Column>
          <Grid.Column>
            <Header dividing color='blue'>
              Live Edit
            </Header>
            <JSONEditor
              updateUserTypes={this.handleUpdateUserTypes}
              updateGroups={this.handleUpdateGroups}
              policy={this.props.policy}
              onChange={this.onEditorUpdate}
              userData={this.state.userData}
            />
            {invalid && <Message negative>Invalid JSON</Message>}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
