import React from 'react'
import { Divider } from '@jjordy/layout'
import { storiesOf } from '@storybook/react'

storiesOf('@jjordy/Layout/Divider', module)
  .add(
    'Default',
    () => (
      <div>
        <strong>Header</strong>
        <Divider />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          omnis vero delectus voluptate eligendi eveniet voluptas animi?
          Mollitia praesentium quibusdam voluptatem aspernatur placeat cumque
          libero laudantium, quas voluptate repellat aliquam.
        </p>
      </div>
    ),
    { notes: 'Sets top and bottom margin to 1 unit and border-bottom to grey color.' }
  )
  .add('Fitted', () => <div>
    <strong>Header</strong>
    <Divider fitted />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
      omnis vero delectus voluptate eligendi eveniet voluptas animi?
      Mollitia praesentium quibusdam voluptatem aspernatur placeat cumque
      libero laudantium, quas voluptate repellat aliquam.
    </p>
  </div>, {
    notes: 'Less than default margin for a tighter feel.'
  })
  .add('Hidden', () => <div>
    <strong>Header</strong>
    <Divider hidden />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
      omnis vero delectus voluptate eligendi eveniet voluptas animi?
      Mollitia praesentium quibusdam voluptatem aspernatur placeat cumque
      libero laudantium, quas voluptate repellat aliquam.
    </p>
  </div>, {
    notes: 'Sets margin but is hidden from view'
  })
