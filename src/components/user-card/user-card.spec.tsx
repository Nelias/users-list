import React from 'react'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

import UserCard from './user-card'

Enzyme.configure({ adapter: new Adapter() })

describe('UserCard', () => {
  let wrapper: any = null
  const user = { id: 1, name: 'Frank', username: 'Francer' }

  beforeAll(() => {
    wrapper = mount(<UserCard user={user} />)
  })

  it('should mount in a full DOM', () => {
    expect(wrapper.length).toBe(1)
  })

  it('should contain a list item', () => {
    expect(wrapper.exists('li')).toBe(true)
  })

  it('should contain a name and a nickname of the first user', () => {
    expect(wrapper.html()).toContain('Frank')
    expect(wrapper.html()).toContain('@Francer')
  })

  afterAll(() => {
    wrapper.unmount()
  })
})
