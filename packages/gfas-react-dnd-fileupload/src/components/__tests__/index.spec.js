import React from 'react'
import FileUpload from '../.'
import { shallow, mount } from 'enzyme'

describe('<FileUpload />', () => {
  let _wrapper
  let _props
  beforeEach(() => {
    _props = {
      onClear: jest.fn(),
      onSubmit: jest.fn()
    }
    _wrapper = shallow(<FileUpload {..._props} />)
  })
  describe('General', () => {
    it('Should render without crashing...', () => {
      expect(mount(<FileUpload {..._props} />)).toHaveLength(1)
    })
    it('Should submit the files on drop...', () => {
      expect(_props.onSubmit).toHaveBeenCalledTimes(0)
      const dropzone = _wrapper.find('t')
      dropzone.simulate('drop', ['file1', 'file2'])
      expect(_props.onSubmit).toHaveBeenCalledTimes(1)
    })
  })
})
