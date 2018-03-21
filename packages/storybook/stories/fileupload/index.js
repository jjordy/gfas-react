import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { Header, Container, Grid } from 'semantic-ui-react'
import FileUpload from 'gfas-react-dnd-fileupload/lib/components'

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
