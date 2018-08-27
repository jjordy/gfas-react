import React from 'react'
import PropTypes from 'prop-types'
import { FileSize, Header, Button, Text, Label } from '@jjordy/layout'
import styled from 'styled-components'

const StatusContainer = styled.div`
  padding: 0.8rem;
  flex-grow: 1;
  max-width: 25%;
  max-height: 300px;
  overflow-y: scroll;
  background-color: #fff;
  @media (max-width: 768px) {
    max-width: 100%;
    border-bottom: 2px solid #e7e7e7;
  }
`

const FilePreviewLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.grey};
  font-size: 0.8rem;
`

export default function UploadStatusPanel ({
  files,
  clearList,
  renderUploadStatusPanel
}) {
  if (renderUploadStatusPanel) {
    return <div>{renderUploadStatusPanel(files, clearList)}</div>
  } else {
    return (
      <StatusContainer>
        <Header as='h5' color='darkGrey' dividing>
          Uploaded Files
        </Header>
        {files.length > 0 &&
          files.map((file, key) => (
            <div key={`Upload_List_File_${key}`}>
              <FilePreviewLink href={file.preview} target='_blank'>
                <Label icon='file' mb={0.5} color='grey'>
                  {file.name} - <FileSize fileSize={file.size} />
                </Label>
              </FilePreviewLink>
            </div>
          ))}
        {files.length === 0 && (
          <Text strong color='grey'>
            No Files
          </Text>
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
