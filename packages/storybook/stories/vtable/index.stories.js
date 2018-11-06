import React from 'react'
import { storiesOf } from '@storybook/react'
import { VirtualTable, Column } from '@jjordy/vtable'
const data = new Array(1000)
  .fill(true)
  .map(() => ({
    name: 'Jordan Addison',
    age: 32
  }))
storiesOf('@jjordy/vtable', module).add('Basic', () => (
  <VirtualTable data={data}>
    <Column name='name' width={150} render={({ row, value }) => (
      <div>{value}</div>
    )} />
    <Column name='age' render={({ row, value }) => (
      <div>{value}</div>
    )} />
  </VirtualTable>
))
