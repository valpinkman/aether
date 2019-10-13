import React from 'react'
import { shallow } from 'enzyme'

import Input from './input'
import { EmailInput, PasswordInput } from './login-inputs'

const onChangeCallback = jest.fn()

describe('components', () => {
  describe('<Input />', () => {
    it('should render', () => {
      const wrapper = shallow(<Input />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('<EmailInput />', () => {
    it('should render', () => {
      const wrapper = shallow(<EmailInput onChange={onChangeCallback} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('<PasswordInput />', () => {
    it('should render', () => {
      const wrapper = shallow(<PasswordInput onChange={onChangeCallback} />)
      expect(wrapper).toMatchSnapshot()
    })

    it('should switch icon and input type', () => {
      const wrapper = shallow(<PasswordInput onChange={onChangeCallback} />)


      wrapper.simulate('mouseenter')
      wrapper.update()

      expect(wrapper.find(Input).prop('type')).toBe('password')
      expect(wrapper.find('EyeOffIcon')).toHaveLength(1)
      expect(wrapper.find('EyeIcon')).toHaveLength(0)

      wrapper.find('ShowingBox').simulate('click')
      wrapper.update()

      expect(wrapper.find(Input).prop('type')).toBe('text')
      expect(wrapper.find('EyeOffIcon')).toHaveLength(0)
      expect(wrapper.find('EyeIcon')).toHaveLength(1)
    })

    it('should trigger the hover effect', () => {
      const wrapper = shallow(<PasswordInput onChange={onChangeCallback} />)

      expect(wrapper.prop('focused')).toBe(false)

      wrapper.simulate('mouseenter')
      wrapper.update()

      expect(wrapper.prop('focused')).toBe(true)

      wrapper.simulate('mouseleave')
      wrapper.update()

      expect(wrapper.prop('focused')).toBe(false)
    })
  })
})