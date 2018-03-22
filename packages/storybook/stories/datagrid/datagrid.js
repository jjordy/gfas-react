import React from 'react'
import { storiesOf } from '@storybook/react'
import DataGrid, { DataColumn } from 'gfas-react-datagrid'
import { Header, Container, Grid, Popup, Icon, Label } from 'semantic-ui-react'
import batches from './batches.json'
import batchDetail from './batchDetail.json'
import uuid from 'uuid'
import 'gfas-react-datagrid/lib/grid.css'

storiesOf('Datagrid', module)
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
      <DataColumn name='Status' id='Status' width={150} />
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
              <Popup trigger={<Icon name='alarm' />} flowing key={uuid.v4()}>
                <div>
                  {value.map(alert => (
                    <p key={uuid.v4()}>Alert {alert.ErrorMessage} </p>
                  ))}
                </div>
              </Popup>
            ) : (
              <Icon name='check' />
            )}
          </div>
        )}
      />
      <DataColumn name='Record Id' id='Id' width={150} />
      <DataColumn
        name='Del. Monitoring'
        id='DeleteMonitoring'
        width={105}
        render={({ row, value }) => (
          <Label circular color={value ? 'green' : 'red'}>
            {value ? 'Y' : 'N'}
          </Label>
        )}
      />
      <DataColumn
        name='Status'
        id='Status'
        width={200}
        render={({ value }) => <Label>{value}</Label>}
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
      <DataColumn name='Date Of Birth' id='DOB' width={150} date />
      <DataColumn name='Recieved On' id='ReceivedOn' width={150} date />
      <DataColumn name='Submitted On' id='SubmittedOn' width={150} date />
    </DataGrid>
  ))
