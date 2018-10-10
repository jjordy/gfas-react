import React from 'react'
import { storiesOf } from '@storybook/react'
import DataGrid, { DataColumn } from '@jjordy/datagrid'
import _ from 'lodash'
import Starwars from './Starwars'

const hugeList = _.times(10000, i => ({
  Id: i + 1,
  FirstName: 'John',
  LastName: 'Doe',
  EnrollBeginDate: new Date().toISOString()
}))

storiesOf('@jjordy/Datagrid', module)
  .add('Basic', () => (
    <Starwars
      thing='people'
      render={({ data, error }) => (
        <DataGrid
          data={data}
          height={500}
          rowHighlightKey='IsTM'
          search={[{ key: 'name' }, { key: 'height' }, { key: 'mass' }]}
        >
          <DataColumn name='Name' id='name' width={150} />
          <DataColumn name='Height' id='height' width={100} />
          <DataColumn name='Mass' id='mass' width={100} />
          <DataColumn name='Skin Color' id='skin_color' width={100} />
          <DataColumn name='Eye Color' id='eye_color' width={100} />
          <DataColumn name='Birth Year' id='birth_year' width={150} />
        </DataGrid>
      )}
    />
  ))
  .add('Advanced', () => (
    <Starwars
      thing='starships'
      render={({ data, error }) => (
        <DataGrid data={data}>
          <DataColumn name='Name' id='name' width={300} />
          <DataColumn name='Model' id='model' width={250} />
          <DataColumn name='Manufacturer' id='manufacturer' width={500} />
          <DataColumn name='Cost' id='cost_in_credits' width={200} />
          <DataColumn name='Length' id='length' width={200} />
          <DataColumn name='Max Speed' id='max_atmosphering_speed' width={200} />
          <DataColumn name='Crew' id='crew' width={200} />
          <DataColumn name='Passengers' id='passengers' width={200} />
          <DataColumn name='Consumables' id='consumables' width={200} />
          <DataColumn name='Hyperdrive Rating' id='hyperdrive_rating' width={200} />
        </DataGrid>
      )}
    />
  ))
  .add(
    'Huge',
    () => (
      <DataGrid
        height={100}
        data={hugeList}
        search={[{ key: 'Id' }, { key: 'EnrollBeginDate', date: true }, { key: 'FirstName' }, { key: 'LastName' }]}
      >
        <DataColumn name='Identifier' id='Id' width={300} />
        <DataColumn name='Enroll Begin Date' id='EnrollBeginDate' width={150} date />
        <DataColumn name='First name' id='FirstName' width={150} />
        <DataColumn name='Last name' id='LastName' width={150} />
      </DataGrid>
    ),
    { notes: 'This isnt really reccomended but its possible' }
  )
