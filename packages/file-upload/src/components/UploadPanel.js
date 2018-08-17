import React from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'
import { Header, Image } from '@jjordy/layout'

const UploadContainer = styled.div`
  flex-grow: 2;
  max-width: 75%;
`

const StyledDropzone = styled(Dropzone)`
  width: 100%;
  min-height: 300px;
  border-right: 1px dashed #e7e7e7;
`

const UploadMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`

export default class UploadPanel extends React.Component {
  render () {
    const { accept, multiple, onDrop, completed, files, children } = this.props
    return (
      <UploadContainer>
        <StyledDropzone ref='dropzone' accept={accept} multiple={multiple} onDrop={onDrop}>
          {!children && (
            <UploadMessage className='upload-container--message'>
              {files && files.length > 0 ? (
                <div style={{ textAlign: 'center', padding: '1em' }}>
                  {!completed && (
                    <div>
                      <Image
                        src='https://s3.us-east-2.amazonaws.com/globalfas-test/Global_Loader_Small.gif'
                        size='small'
                      />
                      <Header as='h5' color='grey'>
                        Files Uploading...
                      </Header>
                    </div>
                  )}
                  {completed && <strong>Upload Completed</strong>}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '1em' }}>
                  <Header as='h4' color='darkGrey'>
                    Click anywhere in this box to select a file to upload <br />
                    or drag and drop one here
                  </Header>
                </div>
              )}
            </UploadMessage>
          )}
          {children}
        </StyledDropzone>
      </UploadContainer>
    )
  }
}

UploadPanel.propTypes = {
  accept: PropTypes.string,
  children: PropTypes.node,
  multiple: PropTypes.bool,
  onDrop: PropTypes.func.isRequired,
  completed: PropTypes.bool,
  files: PropTypes.array
}
