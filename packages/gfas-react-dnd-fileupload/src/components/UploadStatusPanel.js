import React from 'react'
import PropTypes from 'prop-types'
import { Flex, FlexItem } from 'gfas-layout'
import { FileSize } from 'gfas-component-utils'

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

export default function UploadStatusPanel ({ files, clearList, renderUploadStatusPanel }) {
  if (renderUploadStatusPanel) {
    return <FlexItem width={4}>{renderUploadStatusPanel(files, clearList)}</FlexItem>
  } else {
    return (
      <FlexItem
        width={4}
        style={{ maxHeight: 300, overflowY: 'scroll', border: '1px solid #e7e7e7', padding: 10, borderRadius: 6 }}
      >
        <strong>Uploaded Files</strong>
        <div style={{ borderBottom: '1px solid #e7e7e7', marginTop: 10, marginBottom: 10 }} />
        {files.length > 0 &&
          files.map((file, key) => (
            <Flex column key={key}>
              <FlexItem grow style={{ padding: 10, borderBottom: key < files.length - 1 ? '1px solid #e7e7e7' : null }}>
                <Flex justify='space-between'>
                  <strong style={{ color: 'grey' }}>
                    <a href={file.preview} target='_blank'>
                      {file.name}
                    </a>
                  </strong>
                </Flex>
                <Flex>
                  &#128193;
                  <strong>
                    <small>
                      <FileSize fileSize={file.size} />
                    </small>
                  </strong>
                </Flex>
              </FlexItem>
            </Flex>
          ))}
        {files.length === 0 && <strong style={{ color: 'grey' }}>No Files</strong>}
        <div style={{ marginTop: 5, marginBottom: 5 }} />
        {files.length > 0 && (
          <button onClick={clearList} style={defaultBtnStyles}>
            Clear List
          </button>
        )}
      </FlexItem>
    )
  }
}

UploadStatusPanel.propTypes = {
  files: PropTypes.array,
  clearList: PropTypes.func.isRequired
}
