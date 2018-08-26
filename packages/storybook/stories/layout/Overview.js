import React from 'react'
import {
  ThemeContext,
  Container,
  Grid,
  Input,
  Select,
  Form,
  Button,
  Text,
  Segment,
  Checkbox,
  Header,
  Code,
  Fade,
  defaultTheme
} from '@jjordy/layout'

import styled from 'styled-components'

const Navbar = styled.div`
  height: 65px;
  margin: 0;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  right: 0;
  z-index: 99;
  background-color: #f7f7f7;
  border-bottom: 1px solid #e7e7e7;
`

const themes = [
  defaultTheme,
  {
    BASE_SIZE: 1.3,
    UNIT: 'rem',
    rounded: false,
    colors: {
      blue: '#004D71',
      green: '#94D500',
      yellow: '#F2DF00',
      teal: '#00BBB3',
      lightBlue: '#00A5CD',
      red: '#EF483D',
      orange: '#f26B3B',
      white: '#FFF',
      black: '#222',
      grey: '#6c757d',
      darkGrey: '#343a40',
      lightGrey: '#f8f9fa',
      primary: '#004D71',
      secondary: '#f8f9fa',
      success: '#94D500',
      error: '#EF483D',
      info: '#00A5CD'
    }
  },
  {
    BASE_SIZE: 0.5,
    UNIT: 'rem',
    rounded: false,
    colors: {
      blue: '#004D71',
      green: '#94D500',
      yellow: '#F2DF00',
      teal: '#00BBB3',
      lightBlue: '#00A5CD',
      red: '#EF483D',
      orange: '#f26B3B',
      white: '#FFF',
      black: '#222',
      grey: '#6c757d',
      darkGrey: '#343a40',
      lightGrey: '#f8f9fa',
      primary: '#004D71',
      secondary: '#f8f9fa',
      success: '#94D500',
      error: '#EF483D',
      info: '#00A5CD'
    }
  }
]

class Overview extends React.Component {
  state = { showThemeContextCode: false, rounded: false, selectedTheme: 0 };
  render () {
    return (
      <div>
        <Navbar>
          <Select
            m={0}
            onChange={e => {
              this.setState({ selectedTheme: e.target.value })
            }}
            options={[
              { value: 0, name: 'Default Theme' },
              { value: 1, name: 'FAT Theme' },
              { value: 2, name: 'Small Theme' }
            ]}
            style={{ width: 250 }}
          />
          <div style={{ flex: '1 1 auto' }} />
          <Checkbox
            label='Rounded'
            onChange={checked => this.setState({ rounded: checked })}
          />
        </Navbar>
        <ThemeContext.Provider
          value={themes[this.state.selectedTheme]}
        >
          <Container mt={3}>
            <Segment attached='top' color='primary'>
              <Header dividing>Overview</Header>
              <Text color='grey'>
                Common styles are provided to the components through a theme
                context which can be extended to provide a custom theme.
              </Text>
              <Button
                color='primary'
                children='SHOW CODE'
                icon='question'
                labelPosition='right'
                onClick={() =>
                  this.setState({
                    showThemeContextCode: !this.state.showThemeContextCode
                  })
                }
              />
              <Fade visible={this.state.showThemeContextCode}>
                <Code
                  code={`
                import { ThemeContext } from '@jjordy/layout'

                const myCustomTheme = {
                    BASE_SIZE: 1.2,
                    UNIT: 'rem',
                    rounded: true,
                    colors: {
                      blue: '#004D71',
                      green: '#94D500',
                      yellow: '#F2DF00',
                      teal: '#00BBB3',
                      lightBlue: '#00A5CD',
                      red: '#EF483D',
                      orange: '#f26B3B',
                      white: '#FFF',
                      black: '#222',
                      grey: '#6c757d',
                      darkGrey: '#343a40',
                      lightGrey: '#f8f9fa',
                      primary: '#004D71',
                      secondary: '#f8f9fa',
                      success: '#94D500',
                      error: '#EF483D',
                      info: '#00A5CD'
                    }
                }
                const MyApp = () => (
                  <ThemeContext.Provider value={myCustomTheme}>
                    <App />
                  </ThemeContext.Provider>
                )
              `}
                />
              </Fade>
            </Segment>
            <Segment attached clearing>
              <Form>
                <Grid width='33%' gap={16}>
                  <Input name='First Name' label='First Name' />
                  <Input name='Last Name' label='Last Name' />
                </Grid>
                <Input name='Address' label='Address' />
                <Grid width='33%' gap={16}>
                  <Input name='City' label='City' />
                  <Select name='state' label='State' />
                  <Input name='Zip' label='Zipcode' />
                </Grid>
                <Checkbox label='I Agree to the Terms & Conditions' />
                <Button color='primary' float='right'>
                  SUBMIT
                </Button>
              </Form>
            </Segment>
            <Segment attached='bottom'>FOOTER</Segment>
          </Container>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default Overview
