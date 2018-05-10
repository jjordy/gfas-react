import React from 'react'
import PropTypes from 'prop-types'
import { Header, Checkbox, Button, Grid } from 'semantic-ui-react'
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
      <Grid>
        <Grid.Column width={12}>
          <Header>User Data</Header>
          <textarea style={this.userDatastyles} value={this.state.userValue} onChange={this.handleChangeUserData} />

          <Header>IAM Policy</Header>
          <textarea style={this.iAMPolicystyles} value={this.state.value} onChange={this.handleTextChange} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Header as='h5'>UserTypes</Header>
          <Checkbox
            checked={this.state.userTypes.administrator}
            value='administrator'
            label='Administrator'
            onClick={this.handleUserTypesChange}
          />
          <br />
          <Checkbox
            checked={this.state.userTypes.billing}
            value='billing'
            label='Billing'
            onClick={this.handleUserTypesChange}
          />
          <br />
          <Checkbox
            checked={this.state.userTypes.user}
            value='user'
            label='User'
            onClick={this.handleUserTypesChange}
          />
          <br />
          <br />
          <Button onClick={this.handleUpdateUserTypes} content='Update UserTypes' />
          <br />
          <br />
          <Header as='h5'>Groups</Header>
          <Checkbox
            checked={this.state.groups.group1}
            value='group1'
            label='group1'
            onClick={this.handleGroupsChange}
          />
          <br />
          <Checkbox
            checked={this.state.groups.group2}
            value='group2'
            label='group2'
            onClick={this.handleGroupsChange}
          />
          <br />
          <br />
          <Button onClick={this.handleUpdateGroups} content='Update UserTypes' />
        </Grid.Column>
      </Grid>
    )
  }
}

JSONEditor.propTypes = {
  policy: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired
}
