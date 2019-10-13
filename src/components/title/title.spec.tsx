import React from 'react'
import { shallow } from 'enzyme'
import { Title, Subtitle } from './title'

describe('components', () => {
  describe('<Title />', () => {
    it('should render', () => {
      const wrapper = shallow(<Title />)
      expect(wrapper).toMatchSnapshot()
    })

    it('should render correct text', () => {
      const wrapper = shallow(<Title>Hello World</Title>)

      expect(wrapper.prop('children')).toBe('Hello World')
      expect(wrapper).toMatchSnapshot()
    })

    it('should access color props', () => {
      const wrapper = shallow(<Title color="text.shade100" />)

      expect(wrapper.prop('color')).toBe('text.shade100')
      expect(wrapper).toMatchSnapshot()
    })

    it('should access typography props', () => {
      const wrapper = shallow(<Title fontSize={2} />)

      expect(wrapper.prop('fontSize')).toBe(2)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('<Subtitle />', () => {
    it('should render', () => {
      const wrapper = shallow(<Subtitle />)
      expect(wrapper).toMatchSnapshot()
    })

    it('should render correct text', () => {
      const wrapper = shallow(<Subtitle>Hello World</Subtitle>)

      expect(wrapper.prop('children')).toBe('Hello World')
      expect(wrapper).toMatchSnapshot()
    })

    it('should access color props', () => {
      const wrapper = shallow(<Subtitle color="text.shade100" />)

      expect(wrapper.prop('color')).toBe('text.shade100')
      expect(wrapper).toMatchSnapshot()
    })

    it('should access typography props', () => {
      const wrapper = shallow(<Subtitle fontSize={2} />)

      expect(wrapper.prop('fontSize')).toBe(2)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
