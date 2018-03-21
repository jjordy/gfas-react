import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { Flex, FlexItem } from 'gfas-layout'
import Filesize from './Filesize'

const styles = {
  width: '100%',
  minHeight: 300,
  marginBottom: 15,
  maxHeight: 300,
  border: '1px dashed #e7e7e7',
  borderRadius: 6
}

const defaultBtnStyles = {
  width: '100%',
  borderRadius: 6,
  fontSize: '1rem',
  padding: 15,
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 6,
  paddingBottom: 6,
  border: 'none',
  backgroundColor: 'rgb(224, 225, 226)',
  boxShadow: '0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset',
  fontWeight: 700,
  color: 'rgba(0, 0, 0, 0.6)'
}

const removeBtn = {
  borderRadius: 6,
  backgroundColor: '#f30',
  border: 0,
  fontSize: '.8rem',
  color: '#FFF'
}

export default class FileDrop extends Component {
  state = {
    files: [],
    uploading: false,
    completed: false,
    error: null
  };

  onDrop = files => {
    this.setState({ files: files })
    this.props.onDrop(files)
    this.props.onSubmit(files)
  };

  onOpenClick = () => {
    this.refs.dropzone.open()
  };

  handleClearStagedFiles = () => {
    this.setState({ files: [] })
    this.props.onClear()
  };

  render () {
    const { files } = this.state
    return (
      <Flex>
        <FlexItem width={8}>
          <Dropzone
            style={styles}
            ref='dropzone'
            accept={this.props.accept}
            multiple={this.props.multiple}
            onDrop={this.onDrop}
          >
            {this.state.files.length > 0 ? (
              <div style={{ textAlign: 'center', padding: '1em' }}>
                {!this.props.completed && (
                  <strong>{this.state.files.length} files uploading...</strong>
                )}
                {this.props.completed && <strong>Upload Completed</strong>}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '1em' }}>
                <strong>
                  Click anywhere in this box to select a file to upload <br />or
                  drag and drop one here
                </strong>
              </div>
            )}
          </Dropzone>
        </FlexItem>
        <FlexItem
          width={4}
          style={{
            maxHeight: 300,
            overflowY: 'scroll',
            border: '1px solid #e7e7e7',
            padding: 10,
            borderRadius: 6
          }}
        >
          <strong>Uploaded Files</strong>
          <div
            style={{
              borderBottom: '1px solid #e7e7e7',
              marginTop: 10,
              marginBottom: 10
            }}
          />
          {files.length > 0 &&
            files.map((file, key) => (
              <Flex column key={key}>
                <FlexItem
                  grow
                  style={{
                    padding: 10,
                    borderBottom:
                      key < files.length - 1 ? '1px solid #e7e7e7' : null
                  }}
                >
                  <Flex justify='space-between'>
                    <strong style={{ color: 'grey' }}>
                      <a href={file.preview} target='_blank'>
                        {file.name}
                      </a>
                    </strong>
                    <button style={removeBtn}>X</button>
                  </Flex>
                  <Flex>
                    &#128193;
                    <strong>
                      <small>
                        <Filesize fileSize={file.size} />
                      </small>
                    </strong>
                  </Flex>
                </FlexItem>
              </Flex>
            ))}
          {files.length === 0 && (
            <strong style={{ color: 'grey' }}>No Files</strong>
          )}
          <div style={{ marginTop: 5, marginBottom: 5 }} />
          {files.length > 0 && (
            <button
              onClick={this.handleClearStagedFiles}
              style={defaultBtnStyles}
            >
              Clear All
            </button>
          )}
        </FlexItem>
      </Flex>
    )
  }
}

FileDrop.defaultProps = {
  onClear: () => {},
  onDrop: () => {}
}

FileDrop.propTypes = {
  accept: PropTypes.string,
  onClear: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDrop: PropTypes.func,
  loading: PropTypes.bool,
  completed: PropTypes.bool,
  multiple: PropTypes.bool
}
