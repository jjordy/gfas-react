import React from 'react'
import { Box, Dimmer, Flex, Header, Icon } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

let state = true

storiesOf('@jjordy/Layout/Dimmer', module)
  .add(
    'Default',
    () => (
      <div style={{ position: 'relative' }}>
        <Flex style={{ width: '100%', height: '100%' }}>
          <Dimmer active={boolean('Active', state)} dark>
            <Flex align='center' justify='center' direction='column'>
              <Icon icon='school' size={5} bg='white' />
              <Header fg='white'>Hello Dimmer</Header>
            </Flex>
          </Dimmer>
          <Box
            mt={4}
            rounded={false}
            p={3}
            textAlign='center'
            border='1px solid #f8f8f8'
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              sem sagittis, pellentesque erat at, scelerisque dolor. Quisque
              auctor dignissim orci. Quisque suscipit tincidunt velit, ut ornare
              arcu ornare a. Pellentesque nec viverra mauris, id pulvinar felis.
              Sed at tempor ante, mattis gravida tellus. Nulla suscipit lectus
              sit amet viverra porttitor. Vivamus porttitor ex vitae ligula
              finibus, vel molestie lacus congue. Pellentesque sapien elit,
              ultrices non maximus id, viverra eu metus. Donec leo mi, blandit
              ac dapibus vitae, vestibulum quis lacus. Praesent porta blandit
              orci, eu ornare ex lacinia pellentesque. Fusce at lacinia neque,
              sit amet luctus libero. Donec malesuada elit quam, et fringilla
              purus aliquam nec. Suspendisse euismod consectetur ante, sit amet
              posuere mi bibendum nec. Aliquam lobortis, lorem vitae maximus
              consequat, metus lorem venenatis nisl, sed efficitur mauris ex sit
              amet ligula. Sed sit amet finibus enim, eu semper lacus.
            </p>
          </Box>
        </Flex>
      </div>
    ),
    {
      notes:
        'YOU MUST WRAP THE DIMMER IN A RELATIVELY POSITIONED PARENT DIV FOR THIS TO WORK.'
    }
  )
  .add(
    'Page Dimmer',
    () => (
      <Flex style={{ width: '100%', height: '100%' }}>
        <Dimmer active={boolean('Active', state)} dark page>
          <Flex align='center' justify='center' direction='column'>
            <Icon icon='school' size={5} bg='white' />
            <Header fg='white'>Hello Dimmer</Header>
          </Flex>
        </Dimmer>
        <Box
          mt={4}
          rounded={false}
          p={3}
          textAlign='center'
          border='1px solid #f8f8f8'
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
            sem sagittis, pellentesque erat at, scelerisque dolor. Quisque
            auctor dignissim orci. Quisque suscipit tincidunt velit, ut ornare
            arcu ornare a. Pellentesque nec viverra mauris, id pulvinar felis.
            Sed at tempor ante, mattis gravida tellus. Nulla suscipit lectus sit
            amet viverra porttitor. Vivamus porttitor ex vitae ligula finibus,
            vel molestie lacus congue. Pellentesque sapien elit, ultrices non
            maximus id, viverra eu metus. Donec leo mi, blandit ac dapibus
            vitae, vestibulum quis lacus. Praesent porta blandit orci, eu ornare
            ex lacinia pellentesque. Fusce at lacinia neque, sit amet luctus
            libero. Donec malesuada elit quam, et fringilla purus aliquam nec.
            Suspendisse euismod consectetur ante, sit amet posuere mi bibendum
            nec. Aliquam lobortis, lorem vitae maximus consequat, metus lorem
            venenatis nisl, sed efficitur mauris ex sit amet ligula. Sed sit
            amet finibus enim, eu semper lacus.
          </p>
        </Box>
      </Flex>
    ),
    {
      notes: 'A Dimmer can be fixed to the entire page.'
    }
  )
  .add(
    'Light Colored Dimmer',
    () => (
      <Flex style={{ width: '100%', height: '100%' }}>
        <Dimmer active={boolean('Active', state)}>
          <Flex align='center' justify='center' direction='column'>
            <Icon icon='school' size={5} />
            <Header>Hello Dimmer</Header>
          </Flex>
        </Dimmer>
        <Box
          mt={4}
          rounded={false}
          p={3}
          textAlign='center'
          border='1px solid #f8f8f8'
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
            sem sagittis, pellentesque erat at, scelerisque dolor. Quisque
            auctor dignissim orci. Quisque suscipit tincidunt velit, ut ornare
            arcu ornare a. Pellentesque nec viverra mauris, id pulvinar felis.
            Sed at tempor ante, mattis gravida tellus. Nulla suscipit lectus sit
            amet viverra porttitor. Vivamus porttitor ex vitae ligula finibus,
            vel molestie lacus congue. Pellentesque sapien elit, ultrices non
            maximus id, viverra eu metus. Donec leo mi, blandit ac dapibus
            vitae, vestibulum quis lacus. Praesent porta blandit orci, eu ornare
            ex lacinia pellentesque. Fusce at lacinia neque, sit amet luctus
            libero. Donec malesuada elit quam, et fringilla purus aliquam nec.
            Suspendisse euismod consectetur ante, sit amet posuere mi bibendum
            nec. Aliquam lobortis, lorem vitae maximus consequat, metus lorem
            venenatis nisl, sed efficitur mauris ex sit amet ligula. Sed sit
            amet finibus enim, eu semper lacus.
          </p>
        </Box>
      </Flex>
    ),
    {
      notes:
        'A Dimmer doesnt have to be dark it can just be a lighter color by default'
    }
  )
