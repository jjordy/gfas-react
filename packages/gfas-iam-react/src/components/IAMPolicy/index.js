import React, { Component } from 'react' // eslint-disable-line
import PropTypes from 'prop-types'
import { createEffectsFromPolicy } from '../../util/effect'
import { IAMDisabled, iamDisabled } from './IAMDisabled'
import { IAMVisible, iamVisible } from './IAMVisible'
import PolicyValidator from '../../util/policyValidator'
import deepEqual from 'deep-equal'

class IAMPolicy extends Component {
  state = {
    statement: null,
    display: false,
    error: null,
    userData: null
  }

  getUserData = (userData) => {
    return (key, subkey) => {
      if (userData) {
        const k = userData[key] ? userData[key] : null
        if (k && subkey) {
          const v = k[subkey] ? k[subkey] : null
          return v
        } else if (k) {
          return k
        } else {
          return null
        }
      } else {
        return null
      }
    }
  }

  createStatementEffects ({ policy, name, userData }) {
    const p = new PolicyValidator(policy)
    const validPolicy = p.valid()
    // if its an array we have errors
    if (validPolicy && !validPolicy.length) {
      const { statement } = policy
      const s = statement.find(item => item.action === name)
      if (s) {
        const { visible, enabled, deny } = createEffectsFromPolicy(s, this.getUserData(userData))
        if (deny) {
          this.props.onDeny(deny)
          return
        }
        if (!deny) this.props.onAllow()
        this.setState({
          statement: { originalPolicy: policy, enabled, visible, originalStatement: s },
          display: true,
          error: null,
          userData: userData,
          policyErrors: null
        })
      } else {
        this.setState({ statement: null, display: false, userData: userData })
      }
    } else {
      this.setState({
        error: 'You must provide a valid policy',
        userData: userData,
        policyErrors: validPolicy
      })
    }
  }

  componentDidMount () {
    this.createStatementEffects({
      policy: this.props.policy,
      name: this.props.name,
      userData: this.props.userData
    })
  }

  componentWillReceiveProps (nextProps) {
    if (!deepEqual(this.props.userData, nextProps.userData) && nextProps.userData !== null) {
      this.createStatementEffects({
        userData: nextProps.userData,
        policy: nextProps.policy,
        name: nextProps.name
      })
    } else if (!deepEqual(this.props.policy, nextProps.policy)) {
      this.createStatementEffects({
        userData: nextProps.userData,
        policy: nextProps.policy,
        name: nextProps.name
      })
    } else if (this.props.name !== nextProps.name) {
      this.createStatementEffects({
        userData: nextProps.userData,
        policy: nextProps.policy,
        name: nextProps.name
      })
    }
    // if (
    //   (!deepEqual(this.props.userData, nextProps.userData) && nextProps.userData !== null) ||
    //   !deepEqual(this.props.policy, nextProps.policy) ||
    //   this.props.name !== nextProps.name
    // ) {
    //   this.createStatementEffects({
    //     userData: nextProps.userData,
    //     policy: nextProps.policy,
    //     name: nextProps.name
    //   })
    // }
  }
  render () {
    const { statement, display, error, policyErrors } = this.state
    if (display && !error) {
      return this.props.render({ policy: statement, display: display })
    } else if (error) {
      return (
        <div>
          {error}
          <br />
          {policyErrors &&
            policyErrors.length > 0 &&
            policyErrors.map((val, i) => (
              <code key={i} className='errors'>
                {JSON.stringify(val, null, 2)}
              </code>
            ))}
        </div>
      )
    } else {
      return null
    }
  }
}

IAMPolicy.propTypes = {
  render: PropTypes.func.isRequired,
  onAllow: PropTypes.func,
  onDeny: PropTypes.func,
  userData: PropTypes.object,
  policy: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
    statement: PropTypes.array.isRequired
  }),
  name: PropTypes.string.isRequired
}

IAMPolicy.defaultProps = {
  onDeny: () => {},
  onAllow: () => {}
}

export { IAMPolicy, IAMDisabled, iamDisabled, iamVisible, IAMVisible }
