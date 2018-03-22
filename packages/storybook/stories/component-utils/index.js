import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileSize } from 'gfas-component-utils'

storiesOf('Gfas Component Utils', module).add('FileSize', () => (
  <div>
    <FileSize fileSize={204} />
    <br />
    <FileSize fileSize={102042} />
    <br />
    <FileSize fileSize={10204022} />
    <br />
    <FileSize fileSize={10204020240} />
    <br />
  </div>
))
