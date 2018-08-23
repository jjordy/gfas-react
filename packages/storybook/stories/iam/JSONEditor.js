import React from 'react'
import PropTypes from 'prop-types'
import { Header, Checkbox, Button, Grid, Segment } from '@jjordy/layout'
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
      group2: true
    }
  }

  handleUserTypesChange = (evt, { value, checked }) => {
    const newValues = Object.assign({}, this.state.userTypes, { [value]: checked })
    this.setState({ userTypes: newValues })
  }

  handleUpdateUserTypes = () => {
    this.props.updateUserTypes(this.state.userTypes)
  }

  handleUpdateGroups = () => {
    this.props.updateGroups(this.state.groups)
  }

  handleGroupsChange = (evt, { value, checked }) => {
    const newValues = Object.assign({}, this.state.groups, { [value]: checked })
    this.setState({ groups: newValues })
  }

  iAMPolicystyles = {
    width: '100%',
    height: 400,
    fontSize: 15,
    focus: 'none'
  }

  userDatastyles = {
    width: '100%',
    height: 400,
    fontSize: 15,
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
      <Grid width='50%' gap={16}>
        <Segment color='blue'>
          <Header>User Data</Header>
          <textarea style={this.userDatastyles} value={this.state.userValue} onChange={this.handleChangeUserData} />

          <Header>IAM Policy</Header>
          <textarea style={this.iAMPolicystyles} value={this.state.value} onChange={this.handleTextChange} />
        </Segment>
        <Segment color='blue'>
          <Header>UserTypes</Header>
          <Checkbox
            checked={this.state.userTypes.administrator}
            value='administrator'
            label='Administrator'
            onClick={this.handleUserTypesChange}
          />
          <Checkbox
            checked={this.state.userTypes.billing}
            value='billing'
            label='Billing'
            onClick={this.handleUserTypesChange}
          />
          <Checkbox
            checked={this.state.userTypes.user}
            value='user'
            label='User'
            onClick={this.handleUserTypesChange}
          />
          <Button mt={2} onClick={this.handleUpdateUserTypes} content='Update UserTypes' />
          <Header>Groups</Header>
          <Checkbox
            checked={this.state.groups.group1}
            value='group1'
            label='group1'
            onClick={this.handleGroupsChange}
          />

          <Checkbox
            checked={this.state.groups.group2}
            value='group2'
            label='group2'
            onClick={this.handleGroupsChange}
          />
          <Button mt={2} onClick={this.handleUpdateGroups} content='Update UserTypes' />
        </Segment>
      </Grid>
    )
  }
}

JSONEditor.propTypes = {
  policy: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired
}
