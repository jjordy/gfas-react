import React from 'react'
import { Divider, Container, Header, Progress } from '@jjordy/layout'

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
      <Container>
        <Header color='grey'>Progress Bar</Header>
        <Divider />
        <Progress percent={this.state.progress} />
      </Container>
    )
  }
}
