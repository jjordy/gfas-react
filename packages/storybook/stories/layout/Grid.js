import React from 'react'
import { Divider, Container, Header, Grid, Code } from '@jjordy/layout'

export default function HeaderExamples () {
  return (
    <Container>
      <Header color='grey'>Grid Component</Header>
      <Divider />
      <Grid width='33%' gap={16}>
        <div style={{ backgroundColor: '#ccc' }}>Item 1</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 2</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 3</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 4</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 5</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 6</div>
      </Grid>
      <Code
        code={`
        <Grid width='33%' gap={16}>
          <div style={{ backgroundColor: '#ccc' }}>Item 1</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 2</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 3</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 4</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 5</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 6</div>
        </Grid>
      `}
      />
      <Divider />
      <Grid width='20%' gap={8} align='middle'>
        <div style={{ backgroundColor: '#ccc' }}>Item 1</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 2</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 3</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 4</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 5</div>
        <div style={{ backgroundColor: '#ccc' }}>Item 6</div>
      </Grid>
      <Code
        code={`
        <Grid width='20%' gap={16}>
          <div style={{ backgroundColor: '#ccc' }}>Item 1</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 2</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 3</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 4</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 5</div>
          <div style={{ backgroundColor: '#ccc' }}>Item 6</div>
        </Grid>
      `}
      />
    </Container>
  )
}
