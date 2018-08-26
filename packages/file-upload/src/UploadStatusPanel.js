import React from 'react'
import PropTypes from 'prop-types'
import { FileSize, Header, Button } from '@jjordy/layout'
import styled from 'styled-components'

const StatusContainer = styled.div`
  padding: 1rem;
  flex-grow: 1;
  max-width: 25%;
  max-height: 300px;
  overflow-y: scroll;
  background-color: #FFF;
  @media(max-width: 768px) {
    max-width: 100%;
    border-bottom: 2px solid #e7e7e7;
  }
`

export default function UploadStatusPanel ({ files, clearList, renderUploadStatusPanel }) {
  if (renderUploadStatusPanel) {
    return <div>{renderUploadStatusPanel(files, clearList)}</div>
  } else {
    return (
      <StatusContainer>
        <Header as='h4' color='darkGrey' dividing>
          Uploaded Files
        </Header>
        {files.length > 0 &&
          files.map((file, key) => (
            <div key={`Upload_List_File_${key}`}>
              <div style={{ padding: 10, borderBottom: key < files.length - 1 ? '1px solid #e7e7e7' : null }}>
                <div>
                  <strong style={{ color: 'grey' }}>
                    <a href={file.preview} target='_blank'>
                      {file.name}
                    </a>
                  </strong>
                </div>
                <div>
                  &#128193;
                  <strong>
                    <small>
                      <FileSize fileSize={file.size} />
                    </small>
                  </strong>
                </div>
              </div>
            </div>
          ))}
        {files.length === 0 && (
          <Header as='h5' color='grey'>
            No Files
          </Header>
        )}
        <div style={{ marginTop: 5, marginBottom: 5 }} />
        {files.length > 0 && (
          <Button onClick={clearList} fluid>
            Clear List
          </Button>
        )}
      </StatusContainer>
    )
  }
}

UploadStatusPanel.propTypes = {
  files: PropTypes.array,
  clearList: PropTypes.func.isRequired
}
