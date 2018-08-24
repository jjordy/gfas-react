import React from 'react'
import PropTypes from 'prop-types'
import { Header, Checkbox, Button, Grid } from '@jjordy/layout'
import deepEqual from 'deep-equal'

export default class JSONEditor extends React.Component {
  state = {
    value: '',
    userValue: '',
    userTypes: {
      administrator: true,
      user: true,
      billing: true
    },
    groups: {
      group1: true,
      group2: true,
      myApp: true
    }
  }

  handleUserTypesChange = ({ value, checked }) => {
    const newValues = Object.assign({}, this.state.userTypes, { [value]: checked })
    this.setState({ userTypes: newValues })
  }

  handleUpdateUserTypes = () => {
    this.props.updateUserTypes(this.state.userTypes)
  }

  handleUpdateGroups = () => {
    this.props.updateGroups(this.state.groups)
  }

  handleGroupsChange = ({ value, checked }) => {
    const newValues = Object.assign({}, this.state.groups, { [value]: checked })
    this.setState({ groups: newValues })
  }

  iAMPolicystyles = {
    width: '100%',
    height: 200,
    fontSize: '1rem',
    focus: 'none'
  }

  userDatastyles = {
    width: '100%',
    height: 200,
    fontSize: '1rem',
    focus: 'none'
  }

  handleTextChange = evt => {
    this.setState({ value: evt.target.value })
    this.props.onChange({ iam: evt.target.value, user: this.state.userValue })
  }
  handleChangeUserData = evt => {
    this.setState({ userValue: evt.target.value })
    this.props.onChange({ user: evt.target.value, iam: this.state.value })
  }

  componentWillReceiveProps (nextProps) {
    if (!deepEqual(this.props.policy, nextProps.policy) || !deepEqual(this.props.userData, nextProps.userData)) {
      this.setState({
        value: JSON.stringify(nextProps.policy, null, 2), // eslint-disable-line
        userValue: JSON.stringify(nextProps.userData, null, 2) // eslint-disable-line
      })
    }
  }

  componentDidMount () {
    this.setState({
      value: JSON.stringify(this.props.policy, null, 2), // eslint-disable-line
      userValue: JSON.stringify(this.props.userData, null, 2) // eslint-disable-line
    })
  }
  render () {
    return (
      <Grid width='100%' gap={8}>
        <Grid width='50%' gap={8}>
          <div>
            <Header as='h5' my={1}>
              User Data
            </Header>
            <textarea style={this.userDatastyles} value={this.state.userValue} onChange={this.handleChangeUserData} />
          </div>
          <div>
            <Header as='h5' my={1}>
              IAM Policy
            </Header>
            <textarea style={this.iAMPolicystyles} value={this.state.value} onChange={this.handleTextChange} />
          </div>
        </Grid>
        <Grid width='50%'>
          <div>
            <Header as='h5' my={1}>
              UserTypes
            </Header>
            <Checkbox
              checked={this.state.userTypes.administrator}
              value='administrator'
              label='Administrator'
              name='administrator'
              onChange={checked => this.handleUserTypesChange({ checked, value: 'administrator' })}
            />
            <Checkbox
              checked={this.state.userTypes.billing}
              value='billing'
              label='Billing'
              name='billing'
              onChange={checked => this.handleUserTypesChange({ checked, value: 'billing' })}
            />
            <Checkbox
              checked={this.state.userTypes.user}
              value='user'
              label='User'
              name='user'
              onChange={checked => this.handleUserTypesChange({ checked, value: 'user' })}
            />

          </div>
          <div>
            <Header as='h5' my={1}>Groups</Header>
            <Checkbox
              checked={this.state.groups.group1}
              value='group1'
              label='group1'
              name='group1'
              onChange={this.handleGroupsChange}
            />
            <Checkbox
              checked={this.state.groups.group2}
              value='group2'
              label='group2'
              name='group2'
              onChange={this.handleGroupsChange}
            />
            <Checkbox
              checked={this.state.groups.myApp}
              value='myApp'
              label='myApp'
              name='myApp'
              onChange={this.handleGroupsChange} />
          </div>

        </Grid>
        <Button onClick={this.handleUpdateUserTypes} content='UPDATE' />
      </Grid>
    )
  }
}

JSONEditor.propTypes = {
  policy: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired
}
