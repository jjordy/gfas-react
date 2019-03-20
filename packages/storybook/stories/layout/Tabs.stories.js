import React from 'react'
import { Tabs, Text, Tab } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'

const content1 = (
  <Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
  </Text>
)

const content2 = (
  <Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
  </Text>
)

const content3 = (
  <Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus,
    debitis maiores ut adipisci necessitatibus sit fugit maxime consectetur quos
    ipsum. Itaque beatae voluptates porro soluta quaerat facere eveniet iusto?
  </Text>
)

storiesOf('@jjordy/Layout/Tabs', module).add(
  'Default',
  () => (
    <Tabs>
      <Tab title='Tab 1' name='1'>
        {content1}
      </Tab>
      <Tab title='Longer Tab Title 2' name='2'>
        {content2}
      </Tab>
      <Tab title='Tab 3' name='3'>
        {content3}
      </Tab>
      <Tab title={<span>Custom Title 😄 </span>} name='4'>
        {content3}
      </Tab>
    </Tabs>
  ),
  { notes: 'A tab component' }
)
