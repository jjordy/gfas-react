import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Loader, Segment, Button } from '@jjordy/layout'

export default class Starwars extends React.Component {
  state = { things: [], loading: false, loaded: false, error: null, next: null, previous: null }

  async fetch (url) {
    try {
      const { things } = this.state
      this.setState({ loading: true, loaded: false, error: null })
      const {
        data: { results, next, previous }
      } = await axios.get(url)
      this.setState({
        things: [...things, ...results],
        next,
        previous,
        loaded: true,
        loading: false
      })
    } catch ({ response: { data } }) {
      this.setState({ error: data, loading: false })
    }
  }

  async componentDidMount () {
    const { thing = 'people' } = this.props
    const url = `https://swapi.co/api/${thing}/`
    await this.fetch(url)
  }

  fetchNext = async () => {
    const { next } = this.state
    await this.fetch(next)
  }

  fetchPrevious = async () => {
    const { previous } = this.state
    await this.fetch(previous)
  }

  render () {
    const { render } = this.props
    const { things, loading, error, next } = this.state
    return (
      <div>
        {things && things.length > 0 && !loading && render({ data: things, error })}
        {loading && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Loader active />
          </div>
        )}
        <Segment clearing>
          <Button onClick={this.fetchNext} disabled={!next} children='LOAD MORE' fluid />
        </Segment>
      </div>
    )
  }
}

Starwars.propTypes = {
  render: PropTypes.func.isRequired
}
