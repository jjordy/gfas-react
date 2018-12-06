import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTab = styled.div`
  border-top: ${props => (props.active ? '2px solid orange' : 'none')};
  border-bottom: ${props => (props.active ? '1px solid #FFF' : 'none')};
  border-right: ${props => props.active && '1px solid #e7e7e7'};
  border-left: ${props => props.active && '1px solid #e7e7e7'};
  border-top-right-radius: ${props => props.active && '6px'};
  border-top-left-radius: ${props => props.active && '6px'};
  display: flex;
  justify-content: center;
  ${props =>
    props.justify &&
    `
    width: 100%;
  `} color: #555;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 1rem;
  padding-left: 1rem;
  outline: none;
  &: hover {
    cursor: pointer;
  }
`

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.justify ? 'space-between' : 'flex-start')};
  border-bottom: 1px solid #e7e7e7;
`

const TabContent = styled.div``

export default class Tabs extends React.Component {
  state = { activeTab: '' }

  setActiveTab = n => this.setState({ activeTab: n })

  componentDidMount () {
    if (this.props.children) {
      const firstChild = React.Children.toArray(this.props.children)[0]
      this.setState({
        activeTab: firstChild.props.name
      })
    }
  }

  render () {
    const { children, justify } = this.props
    const { activeTab } = this.state
    return (
      <TabsContainer>
        <TabContainer justify={justify}>
          {React.Children.map(children, (child, id) => (
            <StyledTab
              tabIndex={id}
              role='button'
              justify={justify}
              active={activeTab === child.props.name}
              onClick={() => this.setActiveTab(child.props.name)}
            >
              {child.props.title}
            </StyledTab>
          ))}
        </TabContainer>
        <br />
        <TabContent>
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              activeTab,
              setActiveTab: this.setActiveTab
            })
          )}
        </TabContent>
      </TabsContainer>
    )
  }
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.bool
}

export const Tab = ({
  activeTab,
  name,
  render,
  component,
  children,
  ...rest
}) => {
  const Component = component
  return (
    <div>
      {!component && render && activeTab === name && render()}
      {component && activeTab === name && <Component {...rest} />}
      {children && activeTab === name && children}
    </div>
  )
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  render: PropTypes.func,
  component: PropTypes.node,
  children: PropTypes.node
}
