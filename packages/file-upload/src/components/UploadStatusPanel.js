import React from 'react'
import PropTypes from 'prop-types'
import { FileSize, Header, Button } from '@jjordy/layout'

export default function UploadStatusPanel ({ files, clearList, renderUploadStatusPanel }) {
  if (renderUploadStatusPanel) {
    return <div>{renderUploadStatusPanel(files, clearList)}</div>
  } else {
    return (
      <div style={{ padding: 10, flexGrow: 1, maxWidth: '25%', maxHeight: 300, overflowY: 'scroll' }}>
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
      </div>
    )
  }
}

UploadStatusPanel.propTypes = {
  files: PropTypes.array,
  clearList: PropTypes.func.isRequired
}
