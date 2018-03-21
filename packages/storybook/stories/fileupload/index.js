import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Header, Container, Grid } from 'semantic-ui-react'
import FileUpload from 'gfas-react-dnd-fileupload'

class FileUploadTester extends React.Component {
  state = {
    uploading: false,
    completed: false
  };

  handleUploadTest = files => {
    this.setState({ uploading: true })
    setTimeout(() => {
      action('Upload Completed')
      this.setState({ uploading: false, completed: true })
    }, 2000)
  };
  render () {
    return (
      <FileUpload
        {...this.props}
        completed={this.state.completed}
        loading={this.state.uploading}
        onClear={() => this.setState({ uploading: false, completed: false })}
        onSubmit={this.handleUploadTest}
      />
    )
  }
}

function CustomUploadStatusPanel ({ files, clearList }) {
  return (
    <div style={{ border: '2px solid orange' }}>
      <h1>Custom Upload panel</h1>
      {files.length > 0 &&
        files.map((file, id) => <span key={id}>{file.name}</span>)}
      <br />
      <br />
      <button onClick={clearList}>Clear List</button>
    </div>
  )
}

storiesOf('File Upload', module)
  .add('Multiple File upload', () => (
    <Container style={{ paddingTop: 50 }}>
      <Header dividing>Upload A File</Header>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <FileUploadTester />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  ))
  .add('Single File upload', () => (
    <Container style={{ paddingTop: 50 }}>
      <Header dividing>Upload A File</Header>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <FileUploadTester multiple={false} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  ))
  .add('Limit File types', () => (
    <Container style={{ paddingTop: 50 }}>
      <Header dividing>Limit File Types</Header>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <FileUploadTester
              multiple={false}
              accept='image/png, image/gif, image/jpeg, image/jpg, application/pdf, image/tiff, image/tif'
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  ))
  .add('Custom look and feel via render props.', () => (
    <Container style={{ paddingTop: 50 }}>
      <Header dividing>Limit File Types</Header>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <FileUploadTester
              multiple={false}
              accept='image/png, image/gif, image/jpeg, image/jpg, application/pdf, image/tiff, image/tif'
              renderUploadStatusPanel={(files, clearList) => (
                <CustomUploadStatusPanel files={files} clearList={clearList} />
              )}
              uploadPanelStyles={{
                border: '2px solid orange',
                height: 150
              }}
              children={<div>CLICK HERE TO UPLOAD</div>}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  ))
