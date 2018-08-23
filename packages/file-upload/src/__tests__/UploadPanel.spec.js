import React from 'react'
import UploadPanel from '../UploadPanel'
import { shallow, mount } from 'enzyme'

describe('<UploadPanel />', () => {
  let _wrapper
  let _props
  beforeEach(() => {
    _props = {
      onDrop: jest.fn()
    }
    _wrapper = shallow(<UploadPanel {..._props} />)
  })
  const getChildComponent = n => _wrapper.dive().find(n)

  describe('General', () => {
    it('Should render without crashing...', () => {
      expect(mount(<UploadPanel {..._props} />)).toHaveLength(1)
    })

    it('Should submit the files on drop...', () => {
      expect(_props.onDrop).toHaveBeenCalledTimes(0)
      const dropzone = _wrapper.dive().find('t')
      dropzone.simulate('drop', ['file1', 'file2'])
      expect(_props.onDrop).toHaveBeenCalledTimes(1)
    })

    it('Should render a default message if no children are passed in.', () => {
      expect(getChildComponent('.upload-container--message')).toHaveLength(1)
      _wrapper.setProps({ children: <div>Test</div> })
      expect(getChildComponent('.upload-container--message')).toHaveLength(0)
    })
  })
})
