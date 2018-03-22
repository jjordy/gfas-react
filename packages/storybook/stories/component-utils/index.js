import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { FileSize } from 'gfas-component-utils'

storiesOf('Gfas Component Utils', module).add(
  'FileSize',
  withInfo()(() => (
    <div>
      <FileSize fileSize={204} />
      <br />
      <FileSize fileSize={10204} />
      <br />
      <FileSize fileSize={10204022} />
      <br />
      <FileSize fileSize={10204020240} />
      <br />
    </div>
  ))
)
