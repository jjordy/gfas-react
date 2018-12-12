import React from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'
import { Header, Loader, findColor } from '@jjordy/layout'

const UploadContainer = styled.div`
  flex-grow: 2;
  max-width: 75%;
  background-color: #fff;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const StyledDropzone = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-height: 300px;
  border-right: 2px dashed #e7e7e7;
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 2px dashed #e7e7e7;
  }
  & :focus {
    border-color: ${props => !props.error && props.theme.colors.info};
    outline: none;
    border-right: none !important;
    box-shadow: 0 0 0 0.2rem
      rgba(
        ${props =>
    !props.error &&
          findColor(props.theme.colors.info)
            .rgb()
            .array()
            .join(',')},
        0.25
      );
  }
`

const UploadMessage = styled.div`
  display: flex;
  margin: 0px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: 300px;
`

export default class UploadPanel extends React.Component {
  render () {
    const { accept, multiple, onDrop, completed, files, children } = this.props
    return (
      <UploadContainer>
        <Dropzone
          ref='dropzone'
          accept={accept}
          multiple={multiple}
          onDrop={onDrop}
        >
          {({ getRootProps, getInputProps, isDragActive }) => (
            <StyledDropzone {...getRootProps()}>
              <input {...getInputProps()} />
              {!children && (
                <UploadMessage className='upload-container--message'>
                  {files && files.length > 0 ? (
                    <div style={{ textAlign: 'center', padding: '1em' }}>
                      {!completed && (
                        <div>
                          <Loader active />
                          <Header as='h5' fg='grey'>
                            Files Uploading...
                          </Header>
                        </div>
                      )}
                      {completed && <strong>Upload Completed</strong>}
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '1em' }}>
                      <Header as='h4' fg='darkGrey'>
                        Click anywhere in this box to select a file to upload{' '}
                        <br />
                        or drag and drop one here
                      </Header>
                    </div>
                  )}
                </UploadMessage>
              )}
              {children}
            </StyledDropzone>
          )}
        </Dropzone>
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
