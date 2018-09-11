import React from 'react'
import { Menu, Icon } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'

storiesOf('@jjordy/Layout/Menu', module)
  .add('Default', () => (
    <Menu>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item active>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
      <Menu.Item>Item 4</Menu.Item>
      <Menu.Item>
        <Icon icon='question' />
      </Menu.Item>
    </Menu>
  ))
  .add('Vertical', () => (
    <Menu vertical>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item active>Item 3</Menu.Item>
      <Menu.Item>Item 4</Menu.Item>
      <Menu.Item>Item 5</Menu.Item>
    </Menu>
  ))
  .add('Secondary', () => (
    <Menu secondary>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item active>Item 3</Menu.Item>
      <Menu.Item>Item 4</Menu.Item>
      <Menu.Item>Item 5</Menu.Item>
    </Menu>
  ))
