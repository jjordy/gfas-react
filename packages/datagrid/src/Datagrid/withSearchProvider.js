import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchInput, { createFilter } from './Search'
import { Fade, Segment, Grid, Header, Text, Icon } from '@jjordy/layout'
import styled from 'styled-components'

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  box-sizing: border-box;
  background-color: #f8f8f8;
  border-top: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
`

const SearchInputContainer = styled.div`
  width: 75%;
`

const TotalResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  border-right: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  box-sizing: border-box;
  height: 45px;
  align-items: center;
  width: 15%;
  & strong {
    text-align: center;
  }
`

const HelpIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 10%;
  box-sizing: border-box;
`

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
          <SearchContainer>
            <SearchInputContainer>
              {search && (
                <SearchInput
                  name='search'
                  onChange={this.searchUpdated}
                  mb={0}
                  rounded={false}
                  style={{ border: 0, margin: 0, height: 43 }}
                  placeholder='Filter Results...'
                />
              )}
            </SearchInputContainer>
            <TotalResultsContainer>
              <Text fg='grey' small mb={0} px={1}>
                {(filteredResults && filteredResults.length) || 0} Total
              </Text>
            </TotalResultsContainer>
            <HelpIconContainer>
              {search && (
                <Icon
                  onClick={this.toggleHelp}
                  width='32'
                  height='32'
                  icon='question'
                  role='button'
                  style={{ textAlign: 'right' }}
                  aria-label='Show Help Button'
                  bg='gray'
                />
              )}
            </HelpIconContainer>
          </SearchContainer>
          <Fade visible={showHelp} duration={250}>
            <Segment attached p={1}>
              <Header
                as='h4'
                children='Advanced Search for this grid'
                dividing
                my={1}
              />
              <Grid width='20%' gap={8}>
                {search &&
                  Array.isArray(search) &&
                  search.map((column, id) => {
                    return (
                      <span
                        key={id}
                        style={{
                          border: '1px dashed #ccc',
                          paddingLeft: '1rem'
                        }}
                      >
                        <code>
                          <Text m={0} p={0} strong fg='blue'>
                            <code>{column.key.split('.')[0]}:</code>
                          </Text>
                        </code>
                      </span>
                    )
                  })}
              </Grid>
              <Header as='h6' fg='grey' my={1}>
                NOTE: Remember if you are searching for a date always used the
                MM/DD/YYYY format.
              </Header>
            </Segment>
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
