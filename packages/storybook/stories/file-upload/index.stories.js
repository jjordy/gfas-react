import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import FileUpload from '@jjordy/file-upload'

storiesOf('@jjordy/File-Upload', module)
  .add('Multiple File upload', () => (
    <FileUpload
      onSubmit={action('File Dropped')}
      completed={boolean('Completed', false)}
    />
  ))
  .add('Single File upload', () => (
    <FileUpload multiple={false} onSubmit={action('File Dropped')} />
  ))
  .add('Limit File types', () => (
    <FileUpload
      multiple={false}
      onSubmit={action('File Dropped')}
      onRejected={files => alert(JSON.stringify(files, null, 2))}
      accept='image/png, image/gif, image/jpeg, image/jpg, application/pdf, image/tiff, image/tif'
    />
  ))
  .add('Custom look and feel via render props.', () => (
    <FileUpload
      multiple
      onSubmit={action('File Dropped')}
      accept='image/png, image/gif, image/jpeg, image/jpg, application/pdf, image/tiff, image/tif'
      renderUploadStatusPanel={(files, clearList) => (
        <div>
          {files &&
            files.map((file, i) => (
              <div
                key={i}
                style={{
                  padding: 5,
                  border: '2px solid #e7e7e7',
                  marginBottom: 10
                }}
              >
                {file.name}
                <br />
              </div>
            ))}
        </div>
      )}
      uploadPanelStyles={{
        border: '2px solid orange',
        height: 150
      }}
      children={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          CLICK HERE TO UPLOAD
        </div>
      }
    />
  ))
