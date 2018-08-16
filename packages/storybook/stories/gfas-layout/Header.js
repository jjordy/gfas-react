import React from 'react'
import { Segment, Divider, Container, Header } from 'gfas-layout'
import { Code } from 'gfas-component-utils'

export default function HeaderExamples () {
  return (
    <Container>
      <Header color='grey'>Basic Headers</Header>
      <Divider />
      <Header as='h1'>H1 Header</Header>
      <Header as='h2'>H2 Header</Header>
      <Header as='h3'>H3 Header</Header>
      <Header as='h4'>H4 Header</Header>
      <Header as='h5'>H5 Header</Header>
      <Header as='h6'>H6 Header</Header>
      <Code
        code={`
        <Header as='h1'>H1 Header</Header>
        <Header as='h2'>H2 Header</Header>
        <Header as='h3'>H3 Header</Header>
        <Header as='h4'>H4 Header</Header>
        <Header as='h5'>H5 Header</Header>
        <Header as='h6'>H6 Header</Header>
    `}
      />
      <Header as='h1' dividing>H1 Header</Header>
      <Code
        code={`
        <Header as='h1' dividing>H1 Header</Header>
    `}
      />
      <Divider />
      <Header color='grey'>Colored Headers</Header>
      <Divider />
      <Header color='blue'>Header</Header>
      <Header color='lightBlue'>Header</Header>
      <Header color='yellow'>Header</Header>
      <Header color='orange'>Header</Header>
      <Header color='red'>Header</Header>
      <Header color='green'>Header</Header>
      <Header color='teal'>Header</Header>
      <Code
        code={`
      <Header color='blue'>Header</Header>
      <Header color='lightBlue'>Header</Header>
      <Header color='yellow'>Header</Header>
      <Header color='orange'>Header</Header>
      <Header color='red'>Header</Header>
      <Header color='green'>Header</Header>
      <Header color='teal'>Header</Header>
    `}
      />
      <Divider />
      <Header color='grey'>Floated Header</Header>
      <Divider />
      <Segment clearing>
        <Header float='right'>Right Floated Header</Header>
      </Segment>
      <Divider />
      <Header color='grey'>Text Align Header</Header>
      <Divider />
      <Header textAlign='right'>Right Aligned</Header>
      <Header textAlign='center'>Center Aligned</Header>
      <Header textAlign='left'>Left Aligned</Header>
      <Header textAlign='justify'>This will take up the full width of the container</Header>
      <Divider />
    </Container>
  )
}
