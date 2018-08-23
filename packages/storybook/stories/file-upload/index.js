// import React from 'react'
// import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { withInfo } from '@storybook/addon-info'

// import FileUpload from '@jjordy/file-upload'

// class FileUploadTester extends React.Component {
//   state = {
//     uploading: false,
//     completed: false
//   };

//   handleUploadTest = files => {
//     this.setState({ uploading: true })
//     setTimeout(() => {
//       action('Upload Completed')
//       this.setState({ uploading: false, completed: true })
//     }, 2000)
//   };
//   render () {
//     return (
//       <FileUpload
//         {...this.props}
//         completed={this.state.completed}
//         loading={this.state.uploading}
//         onClear={() => this.setState({ uploading: false, completed: false })}
//         onSubmit={this.handleUploadTest}
//       />
//     )
//   }
// }

// function CustomUploadStatusPanel ({ files, clearList }) {
//   return (
//     <div style={{ border: '2px solid orange' }}>
//       <h1>Custom Upload panel</h1>
//       {files.length > 0 &&
//         files.map((file, id) => <span key={id}>{file.name}</span>)}
//       <br />
//       <br />
//       <button onClick={clearList}>Clear List</button>
//     </div>
//   )
// }

// storiesOf('File Upload', module)
//   .add('Multiple File upload', withInfo({
//     propTables: [FileUpload],
//     propTablesExclude: [FileUploadTester]
//   })(() => <FileUploadTester />))
//   .add(
//     'Single File upload',
//     withInfo()(() => <FileUploadTester multiple={false} />)
//   )
//   .add(
//     'Limit File types',
//     withInfo()(() => (
//       <FileUploadTester
//         multiple={false}
//         accept='image/png, image/gif, image/jpeg, image/jpg, application/pdf, image/tiff, image/tif'
//       />
//     ))
//   )
//   .add(
//     'Custom look and feel via render props.',
//     withInfo()(() => (
//       <FileUploadTester
//         multiple={false}
//         accept='image/png, image/gif, image/jpeg, image/jpg, application/pdf, image/tiff, image/tif'
//         renderUploadStatusPanel={(files, clearList) => (
//           <CustomUploadStatusPanel files={files} clearList={clearList} />
//         )}
//         uploadPanelStyles={{
//           border: '2px solid orange',
//           height: 150
//         }}
//         children={<div>CLICK HERE TO UPLOAD</div>}
//       />
//     ))
//   )
