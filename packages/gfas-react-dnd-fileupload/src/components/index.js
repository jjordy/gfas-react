import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { Button, Progress, Segment, Sidebar, Menu } from 'semantic-ui-react'

const styles = {
  width: '100%',
  minHeight: 300,
  marginBottom: 15,
  maxHeight: 300,
  border: '1px dashed #e7e7e7',
  borderRadius: 6
}

export default class FileDrop extends Component {
  state = {
    files: [],
    uploading: false,
    completed: false,
    error: null,
    progress: 0
  }

  onDrop = files => {
    this.setState({
      files: files,
      progress: 20
    })
    this.simulateProgress()
    this.props.onDrop(files)
    this.props.onSubmit(files)
  }

  onOpenClick = () => {
    this.refs.dropzone.open()
  }

  simulateProgress = () => {
    this.simulate = setInterval(() => {
      const { progress } = this.state
      this.setState({ progress: progress < 91 ? progress + 10 : 100 })
    }, 200)
  }

  handleClearStagedFiles = () => {
    this.setState({ files: [] })
    this.props.onClear()
  }

  componentWillReceiveProps (nextProps) {
    if (!this.props.completed && nextProps.completed) {
      clearInterval(this.simulate)
    }
  }

  componentWillUnmount () {
    clearInterval(this.simulate)
  }

  render () {
    const { files } = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment} attached='top'>
          <Sidebar.Pusher>
            {this.props.loading && <Progress attached='top' indicating percent={this.state.progress} autoSuccess />}
            <Dropzone style={styles} ref='dropzone' multiple={this.props.multiple} onDrop={this.onDrop}>
              {this.state.files.length > 0 ? (
                <div style={{ textAlign: 'center', padding: '1em' }}>
                  {!this.props.completed && <strong>{this.state.files.length} files uploading...</strong>}
                  {this.props.completed && <strong>Upload Completed</strong>}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '1em' }}>
                  <strong>Click anywhere in this box to select a file to upload <br />or drag and drop one here</strong>
                </div>
              )}
            </Dropzone>
          </Sidebar.Pusher>
          <Sidebar animation='push' width='wide' as={Menu} visible={files.length > 0}>
            Test
          </Sidebar>
        </Sidebar.Pushable>
        <Button
          attached='bottom'
          type='button'
          content='CLEAR'
          icon='trash'
          negative
          onClick={this.handleClearStagedFiles}
        />
      </div>
    )
  }
}

FileDrop.defaultProps = {
  onClear: () => { },
  onDrop: () => { }
}

FileDrop.propTypes = {
  onClear: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDrop: PropTypes.func,
  loading: PropTypes.bool,
  completed: PropTypes.bool,
  multiple: PropTypes.bool
}
