import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchInput, { createFilter } from './Search'
import { Fade, Segment, Button, Grid, Header, Message } from '@jjordy/layout'
import { FiHelpCircle } from 'react-icons/fi'

export default function SearchProvider (C) {
  class SearchProvider extends Component {
    state = { searchTerm: '', showHelp: false };
    searchUpdated = term => this.setState({ searchTerm: term });
    toggleHelp = () => this.setState({ showHelp: !this.state.showHelp });
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
        : search
          ? this.props.columns.map(column => column.id)
          : []

      let mySearchTerm = searchTerm
      if (searchTerm.includes('-') || searchTerm.includes('/')) {
        searchOptions.fuzzy = false
        searchOptions.threshhold = 0.5
        searchOptions.minMatchCharLength = 5
        mySearchTerm = Date.parse(searchTerm).toString()
      }

      const filteredResults = data
        ? data.filter(createFilter(mySearchTerm, searchKeys, searchOptions))
        : null
      return (
        <div>
          <Grid width='33%' gap={16}>
            <React.Fragment>
              {search && (
                <SearchInput
                  className='ui input search'
                  inputClassName='prompt'
                  onChange={this.searchUpdated}
                />
              )}
              {!search && <div />}
            </React.Fragment>
            <strong>
              Total Results: {(filteredResults && filteredResults.length) || 0}
            </strong>
            {search && (
              <Button onClick={this.toggleHelp} ariaLabel='Help'>
                <FiHelpCircle />
              </Button>
            )}
          </Grid>
          <Fade visible={showHelp} duration={500}>
            <div>
              <Header content='Fuzzy Search Help' dividing attached='top' />
              <Segment attached='bottom' style={{ marginBottom: 15 }}>
                <Grid width='50%' gap={16}>
                  <div>
                    <Header as='h5' content='Advanced Search for this grid' />
                    <ul>
                      {search &&
                        Array.isArray(search) &&
                        search.map((column, id) => {
                          const mc = this.props.columns.find(
                            c => c.id === column.key
                          )
                          return (
                            <li key={id}>
                              <span>
                                <small>
                                  <pre>
                                    <code>
                                      {column.key.split('.')[0]}:
                                      {'{your search}'} returns matches for{' '}
                                      {(mc && mc.name) || ''}
                                    </code>
                                  </pre>
                                </small>
                              </span>
                            </li>
                          )
                        })}
                    </ul>
                  </div>
                  <div>
                    <Message>
                      <Message.Header>
                        Search not returning what you want?
                      </Message.Header>
                      <p>
                        NOTE: Remember if you are searching for a date always
                        used the MM/DD/YYYY format.
                      </p>
                      <strong>Examples:</strong>
                      <p>
                        <strong>Date:</strong> 01/01/1999
                      </p>
                    </Message>
                  </div>
                </Grid>
              </Segment>
            </div>
          </Fade>
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
