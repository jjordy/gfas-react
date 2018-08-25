import React from 'react'
import { Divider, Container, Header, Label, Icon, Grid } from '@jjordy/layout'
import _ from 'lodash'

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const colors = [
  'black',
  'blue',
  'lightBlue',
  'red',
  'yellow',
  'orange',
  'green',
  'grey',
  'lightGrey',
  'teal'
]

export default function LabelExamples () {
  return (
    <Container>
      <Header color='grey'>Labels</Header>
      <Divider />
      <Grid width={120}>
        {_.times(10, (i) => (
          <React.Fragment key={i}>
            <Label
              mb={1}
              rounded
              icon='chevron_left'
              color={colors[getRandomInt(0, 9)]}>
              LABEL {i}
            </Label>
          </React.Fragment>
        ))}
      </Grid>

    </Container>
  )
}
