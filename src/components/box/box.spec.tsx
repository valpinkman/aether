import React from 'react'
import { shallow } from 'enzyme'
import Box, { Container } from './box'

describe('components', () => {
  describe('<Box />', () => {
    it('should render', () => {
      const wrapper = shallow(<Box />)
      expect(wrapper).toMatchSnapshot()
    })

    it('should render children', () => {
      const Child = () => <span>test</span>
      const wrapper = shallow(
        <Box>
          <Child />
        </Box>
      )

      expect(wrapper.find(Child)).toHaveLength(1)
      expect(wrapper).toMatchSnapshot()
    })

    it('should accept `colors` props', () => {
      const wrapper = shallow(
        <Box color="text.shade100" bg="background.default" />
      )

      expect(wrapper).toHaveLength(1)
      expect(wrapper.prop('color')).toBe('text.shade100')
      expect(wrapper.prop('bg')).toBe('background.default')
      expect(wrapper).toMatchSnapshot()
    })

    it('should accept `space` props', () => {
      const wrapper = shallow(<Box margin={20} p="2" />)

      expect(wrapper).toHaveLength(1)
      expect(wrapper.prop('margin')).toBe(20)
      expect(wrapper.prop('p')).toBe('2')
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('<Container />', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Container />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
