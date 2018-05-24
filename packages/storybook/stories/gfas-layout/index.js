import React from 'react'
import { Flex, FlexItem, Display } from 'gfas-layout'
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
  .add(
    'Display Component',
    withInfo()(() => (
      <div style={{ maxWidth: 1150, margin: 'auto', backgroundColor: '#f8f8f8', fontWeight: 700 }}>
        <React.Fragment>
          <h2>Padding X</h2>
          {_.times(4, i => (
            <Display display='flex' px={i + 1} key={`px_${i}`} style={{ color: getRandomColor() }}>
              padding x {i + 1}
            </Display>
          ))}

          <h2>Padding Y</h2>
          {_.times(4, i => (
            <Display py={i + 1} key={`py_${i}`} style={{ color: getRandomColor() }}>
              padding y {i + 1}
            </Display>
          ))}

          <h2>Margin X</h2>
          {_.times(4, i => (
            <Display mx={i + 1} key={`mx_${i}`} style={{ color: getRandomColor() }}>
              margin x {i + 1}
            </Display>
          ))}

          <h2>Margin Y</h2>
          {_.times(4, i => (
            <Display my={i + 1} key={`my_${i}`} style={{ color: getRandomColor() }}>
              margin y {i + 1}
            </Display>
          ))}

          <h2>Vertically Center using justify, align and display flex</h2>
          <Display justify='center' display='flex' align='center' style={{height: 400, backgroundColor: '#f30'}}>
            {_.times(12, i => <Display px={2} key={`flex_d_${i}`}style={{color: '#FFF'}}>{i + 1}</Display>)}
          </Display>
        </React.Fragment>
      </div>
    ))
  )
