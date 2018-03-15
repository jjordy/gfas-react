import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchInput, { createFilter } from './Search'
import { Transition, Segment, Button, Grid, Header, List, Message } from 'semantic-ui-react'

export default function SearchProvider (C) {
  class SearchProvider extends Component {
    state = { searchTerm: '', showHelp: false }
    searchUpdated = term => this.setState({ searchTerm: term })
    toggleHelp = () => this.setState({ showHelp: !this.state.showHelp })
    render () {
      const { searchTerm, showHelp } = this.state
      const { data, search } = this.props
      const searchOptions = {
        fuzzy: false,
        maxPatternLength: 10,
        location: 0,
        minMatchCharLength: 1,
        threshold: 0.3
      }

      let searchKeys = Array.isArray(search)
        ? search.map(key => key.key)
        : search ? this.props.columns.map(column => column.id) : []

      let mySearchTerm = searchTerm
      if (searchTerm.includes('-') || searchTerm.includes('/')) {
        searchOptions.fuzzy = false
        searchOptions.threshhold = 0.5
        searchOptions.minMatchCharLength = 5
        mySearchTerm = Date.parse(searchTerm).toString()
      }

      const filteredResults = data ? data.filter(createFilter(mySearchTerm, searchKeys, searchOptions)) : null
      return (
        <div>
          <Grid style={{ marginBottom: 15 }} columns={3} verticalAlign='middle'>
            <Grid.Column>
              {search && (
                <SearchInput className='ui input search' inputClassName='prompt' onChange={this.searchUpdated} />
              )}
              {!search && <div />}
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <strong>Total Results: {(filteredResults && filteredResults.length) || 0}</strong>
            </Grid.Column>
            <Grid.Column textAlign='right'>
              {search && <Button circular basic icon='question' onClick={this.toggleHelp} />}
            </Grid.Column>
          </Grid>
          <Transition visible={showHelp} animation='slide down' duration={500}>
            <div>
              <Header content='Fuzzy Search Help' dividing attached='top' color='orange' />
              <Segment attached='bottom' style={{ marginBottom: 15 }}>
                <Grid padded>
                  <Grid.Column width={10}>
                    <Header as='h5' content='Advanced Search for this grid' />
                    <List divided size='mini'>
                      {search &&
                        Array.isArray(search) &&
                        search.map((column, id) => {
                          const mc = this.props.columns.find(c => c.id === column.key)
                          return (
                            <List.Item key={id}>
                              <List.Content>
                                <small>
                                  <pre>
                                    <code>
                                      {column.key.split('.')[0]}:{'{your search}'} returns matches for{' '}
                                      {(mc && mc.name) || ''}
                                    </code>
                                  </pre>
                                </small>
                              </List.Content>
                            </List.Item>
                          )
                        })}
                    </List>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Message color='blue'>
                      <strong>Search not returning what you want?</strong>
                      <p>
                        NOTE: Remember if you are searching for a date always used the MM/DD/YYYY format.
                      </p>
                      <strong>Examples:</strong>
                      <p>
                        <strong>Date:</strong> 01/01/1999
                      </p>
                    </Message>
                  </Grid.Column>
                </Grid>
              </Segment>
            </div>
          </Transition>
          <C {...this.props} data={filteredResults} />
        </div>
      )
    }
  }

  SearchProvider.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    search: PropTypes.array
  }

  return SearchProvider
}
