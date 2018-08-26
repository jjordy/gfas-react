import PropTypes from 'prop-types'
import React, { Component } from 'react'
import UploadStatusPanel from './UploadStatusPanel'
import UploadPanel from './UploadPanel'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex: 2 2 auto;
  @media(max-width: 768px) {
    flex-direction: column;
  }
`

export default class FileUpload extends Component {
  state = {
    files: [],
    uploading: false,
    completed: false,
    error: null
  }

  onDrop = files => {
    this.setState({ files: files })
    this.props.onDrop(files)
    this.props.onSubmit(files)
  }

  handleClearStagedFiles = () => {
    this.setState({ files: [] })
    this.props.onClear()
  }

  render () {
    const { files } = this.state
    return <StyledContainer>
      <UploadPanel {...this.props} {...this.state} onDrop={this.onDrop} />
      <UploadStatusPanel {...this.props} files={files} clearList={this.handleClearStagedFiles} />
    </StyledContainer>
  }
}

FileUpload.displayName = 'FileUpload'

FileUpload.defaultProps = {
  onClear: () => {},
  onDrop: () => {}
}

FileUpload.propTypes = {
  accept: PropTypes.string,
  onClear: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDrop: PropTypes.func,
  loading: PropTypes.bool,
  completed: PropTypes.bool,
  multiple: PropTypes.bool
}
