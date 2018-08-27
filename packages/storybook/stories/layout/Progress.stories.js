import React from 'react'
import { Progress } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'

storiesOf('@jjordy/Layout/Progress', module)
  .add(
    'Default',
    () => (
      <ProgressExamples />
    ),
    { notes: 'A Responsive Component' }
  )

function randomIntFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default class ProgressExamples extends React.Component {
  state = { progress: 0 }
  componentDidMount () {
    setInterval(() => {
      this.setState({ progress: this.state.progress + randomIntFromInterval(1, 5) })
    }, 200)
  }
  render () {
    return (
      <Progress percent={this.state.progress} />

    )
  }
}
