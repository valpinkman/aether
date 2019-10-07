import React from 'react'
import { shallow } from 'enzyme'
import Title from './title'

describe('<Title />', () => {
  it('should render', () => {
    const wrapper = shallow(<Title />)
    expect(wrapper).toHaveLength(1)
  })

  it('should render correct text', () => {
    const wrapper = shallow(<Title>Hello World</Title>)
    expect(wrapper.prop('children')).toBe('Hello World')
  })
})
