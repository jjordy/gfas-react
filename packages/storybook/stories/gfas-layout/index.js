import React from 'react'
import { Flex, FlexItem } from 'gfas-layout'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import _ from 'lodash'
import colors from '../colors'

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}

const GridItem = ({ children, color, width }) => {
  return (
    <FlexItem width={width} style={{ backgroundColor: color, height: 50 }} grow>
      {children}
    </FlexItem>
  )
}

storiesOf('Gfas Layout', module)
  .add(
    'Flex Layout',
    withInfo('Test')(() => (
      <React.Fragment>
        <Flex align='center'>
          <FlexItem grow style={{ backgroundColor: getRandomColor() }}>
            <Flex justify='center' align='center' m={3} p={3}>
              Grow
            </Flex>
          </FlexItem>
          <FlexItem style={{ backgroundColor: getRandomColor() }}>
            <Flex justify='center' align='center' m={3} p={3}>
              Spacer Style
            </Flex>
          </FlexItem>
        </Flex>
        <Flex align='center'>
          <FlexItem grow style={{ backgroundColor: getRandomColor() }}>
            <Flex justify='center' align='center' m={3} p={3}>
              Grow
            </Flex>
          </FlexItem>
          <FlexItem style={{ backgroundColor: getRandomColor() }}>
            <Flex justify='center' align='center' m={3} p={3}>
              Spacer Style
            </Flex>
          </FlexItem>
        </Flex>
      </React.Fragment>
    ))
  )
  .add(
    'Column Layout',
    withInfo()(() => (
      <React.Fragment>
        <Flex>
          {_.times(12, i => (
            <GridItem key={i} width={1} color={getRandomColor()}>
              {i + 1}
            </GridItem>
          ))}
        </Flex>
        <Flex>
          {_.times(6, i => (
            <GridItem key={i} width={2} color={getRandomColor()}>
              {i + 1}
            </GridItem>
          ))}
        </Flex>
        <Flex>
          {_.times(3, i => (
            <GridItem key={i} width={4} color={getRandomColor()}>
              {i + 1}
            </GridItem>
          ))}
        </Flex>
        <Flex>
          {_.times(1, i => (
            <GridItem key={i} width={12} color={getRandomColor()}>
              {i + 1}
            </GridItem>
          ))}
        </Flex>
      </React.Fragment>
    ))
  )
