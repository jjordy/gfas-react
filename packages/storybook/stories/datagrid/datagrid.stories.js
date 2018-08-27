import React from 'react'
import { storiesOf } from '@storybook/react'
import DataGrid, { DataColumn } from '@jjordy/datagrid'
import batches from './batches.json'
import batchDetail from './batchDetail.json'
import { Container, Header, Text, Label } from '@jjordy/layout'
import { FiCheckCircle, FiAlertTriangle, FiSlash } from 'react-icons/fi'
import _ from 'lodash'

const hugeList = _.times(10000, i => ({
  Id: i + 1,
  FirstName: 'John',
  LastName: 'Doe',
  EnrollBeginDate: new Date().toISOString()
}))

storiesOf('@jjordy/Datagrid', module)
  .add('Basic', () => (
    <DataGrid
      data={batches.Results}
      height={500}
      rowHighlightKey='IsTM'
      search={[{ key: 'Id' }, { key: 'Status' }, { key: 'RevOn', date: true }]}
    >
      <DataColumn
        name='Batch Id'
        id='Id'
        width={100}
        render={({ row, value }) => <a href='#'>Batch {value} </a>}
      />
      <DataColumn name='Status' id='Status' width={200} />
      <DataColumn name='Last Revised On' id='RevOn' width={150} date />
      <DataColumn name='Last Revised By' id='RevBy' width={250} />
      <DataColumn
        name='Submitted On'
        id='SubmittedOn'
        width={150}
        date
        nullDateMessage='Not Submitted'
      />
      <DataColumn
        name='ReceivedOn'
        id='ReceivedOn'
        width={150}
        date
        nullDateMessage='Not Received'
      />
    </DataGrid>
  ))
  .add('Advanced', () => (
    <DataGrid
      rowHighlightKey='IsTM'
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
          <div>
            {value && value.length > 0 ? (
              <FiAlertTriangle color='red' />
            ) : (
              <FiCheckCircle color='green' />
            )}
          </div>
        )}
      />
      <DataColumn name='Record Id' id='Id' width={150} />
      <DataColumn
        name='Del. Monitoring'
        id='DeleteMonitoring'
        width={150}
        render={({ row, value }) => (
          <span>
            {value ? <FiCheckCircle color='green' /> : <FiSlash color='red' />}
          </span>
        )}
      />
      <DataColumn
        name='Status'
        id='Status'
        width={200}
        render={({ value }) => (
          <Label color='success' rounded>
            {value}
          </Label>
        )}
      />
      <DataColumn
        name='Enroll Begin Date'
        id='EnrollBeginDate'
        width={150}
        date
      />
      <DataColumn name='First name' id='FirstName' width={150} />
      <DataColumn name='Last name' id='LastName' width={150} />
      <DataColumn name='SSN' id='SSN' width={95} />
      <DataColumn
        name='Date Of Birth'
        id='DOB'
        width={150}
        date
        dateInputFormat='YYYY-MM-DD'
      />
      <DataColumn
        name='Recieved On'
        id='ReceivedOn'
        width={150}
        date
        dateInputFormat='YYYY-MM-DD'
      />
      <DataColumn
        name='Submitted On'
        id='SubmittedOn'
        width={150}
        date
        dateInputFormat='YYYY-MM-DD'
      />
    </DataGrid>
  ))
  .add(
    'Huge',
    () => (
      <DataGrid
        height={100}
        data={hugeList}
        search={[
          { key: 'Id' },
          { key: 'EnrollBeginDate', date: true },
          { key: 'FirstName' },
          { key: 'LastName' }
        ]}
      >
        <DataColumn name='Identifier' id='Id' width={300} />
        <DataColumn
          name='Enroll Begin Date'
          id='EnrollBeginDate'
          width={150}
          date
        />
        <DataColumn name='First name' id='FirstName' width={150} />
        <DataColumn name='Last name' id='LastName' width={150} />
      </DataGrid>
    ),
    { notes: 'This isnt really reccomended but its possible' }
  )