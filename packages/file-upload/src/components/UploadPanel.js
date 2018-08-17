import React from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import { FlexItem } from 'gfas-layout'

const styles = {
  width: '100%',
  minHeight: 300,
  marginBottom: 15,
  maxHeight: 300,
  border: '1px dashed #e7e7e7',
  borderRadius: 6
}

export default class UploadPanel extends React.Component {
  render () {
    const { accept, multiple, onDrop, completed, files, uploadPanelStyles, children } = this.props
    return (
      <FlexItem width={8}>
        <Dropzone
          style={uploadPanelStyles || styles}
          ref='dropzone'
          accept={accept}
          multiple={multiple}
          onDrop={onDrop}
        >
          {!children && <div className='upload-container--message'>
            {files && files.length > 0 ? (
              <div style={{ textAlign: 'center', padding: '1em' }}>
                {!completed && <strong>{files.length} files uploading...</strong>}
                {completed && <strong>Upload Completed</strong>}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '1em' }}>
                <strong>
                Click anywhere in this box to select a file to upload <br />or drag and drop one here
                </strong>
              </div>
            )}
          </div>}
          {children}
        </Dropzone>
      </FlexItem>
    )
  }
}

UploadPanel.propTypes = {
  accept: PropTypes.string,
  children: PropTypes.node,
  multiple: PropTypes.bool,
  onDrop: PropTypes.func.isRequired,
  completed: PropTypes.bool,
  files: PropTypes.array,
  uploadPanelStyles: PropTypes.object
}
