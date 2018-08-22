import React from 'react'
import { Container, Header, Loader, Grid, Code } from '@jjordy/layout'

export default function HeaderExamples () {
  return <Container>
    <Header color='grey'>Default Loader</Header>
    <Loader />
    <Code code='<Loader />' />
    <Header color='grey'>Colored Loader</Header>
    <Loader color='green' />
    <Code code={'<Loader color="green"/>'} />
    <Header color='grey' dividing>
        Loader Alternatives
    </Header>
    <Grid width='20%' gap={16}>
      <Loader color='blue' type='bars' />
      <Loader color='darkGrey' type='oval' />
      <Loader color='orange' type='rings' />
      <Loader color='red' type='puff' />
      <Loader color='lightBlue' type='three-dots' />
    </Grid>
    <Code code={`
    <Grid width='25%' gap={16}>
      <Loader color='blue' type='bars' />
      <Loader color='darkGrey' type='oval' />
      <Loader color='orange' type='rings' />
      <Loader color='red' type='puff' />
      <Loader color='lightBlue' type='three-dots' />
    </Grid>
    `} />
  </Container>
}
