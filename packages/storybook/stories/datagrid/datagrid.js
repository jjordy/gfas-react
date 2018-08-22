import React from 'react'
import { storiesOf } from '@storybook/react'
import DataGrid, { DataColumn } from '@jjordy/datagrid'
import { Popup, Icon, Label } from 'semantic-ui-react'
import batches from './batches.json'
import batchDetail from './batchDetail.json'

import { Container, Header } from '@jjordy/layout'
import { FiCheckCircle, FiAlertTriangle, FiSlash } from 'react-icons/fi'

storiesOf('Datagrid', module)
  .add('Basic', () => (
    <Container>
      <Header color='grey' dividing>
        Datagrid
      </Header>
      <DataGrid
        data={batches.Results}
        height={500}
        rowHighlightKey='IsTM'
        search={[{ key: 'Id' }, { key: 'Status' }, { key: 'RevOn', date: true }]}
      >
        <DataColumn name='Batch Id' id='Id' width={100} render={({ row, value }) => <a href='#'>Batch {value} </a>} />
        <DataColumn name='Status' id='Status' width={200} />
        <DataColumn name='Last Revised On' id='RevOn' width={150} date />
        <DataColumn name='Last Revised By' id='RevBy' width={250} />
        <DataColumn name='Submitted On' id='SubmittedOn' width={150} date nullDateMessage='Not Submitted' />
        <DataColumn name='ReceivedOn' id='ReceivedOn' width={150} date nullDateMessage='Not Received' />
      </DataGrid>
    </Container>
  ))
  .add('Advanced', () => (
    <Container>
      <Header color='grey' dividing>
        Advanced Datagrid with render props
      </Header>
      <DataGrid
        rowHighlightKey='IsResolved'
        data={batchDetail.Results}
        search={[
          { key: 'Id' },
          { key: 'EnrollBeginDate', date: true },
          { key: 'FirstName' },
          { key: 'LastName' },
          { key: 'StartDate', date: true },
          { key: 'SSN' },
          { key: 'DOB', date: true },
          { key: 'ReceivedOn', date: true },
          { key: 'SubmittedOn', date: true },
          { key: 'Alerts.ErrorMessage' }
        ]}
      >
        <DataColumn
          name='Alerts'
          id='Alerts'
          width={75}
          render={({ row, value }) => (
            <div>{value && value.length > 0 ? <FiAlertTriangle color='red' /> : <FiCheckCircle color='green' />}</div>
          )}
        />
        <DataColumn name='Record Id' id='Id' width={150} />
        <DataColumn
          name='Del. Monitoring'
          id='DeleteMonitoring'
          width={150}
          render={({ row, value }) => <span>{value ? <FiCheckCircle color='green' /> : <FiSlash color='red' />}</span>}
        />
        <DataColumn name='Status' id='Status' width={200} render={({ value }) => <Label>{value}</Label>} />
        <DataColumn name='Enroll Begin Date' id='EnrollBeginDate' width={150} date />
        <DataColumn name='First name' id='FirstName' width={150} />
        <DataColumn name='Last name' id='LastName' width={150} />
        <DataColumn name='SSN' id='SSN' width={95} />
        <DataColumn name='Date Of Birth' id='DOB' width={150} date />
        <DataColumn name='Recieved On' id='ReceivedOn' width={150} date />
        <DataColumn name='Submitted On' id='SubmittedOn' width={150} date />
      </DataGrid>
    </Container>
  ))
