import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import UserCard from './user-card'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

const mockStore = configureStore([])

jest.mock('../../store/actions/search')

describe('UserCard', () => {
  let store: any = null
  let wrapper: any = null
  const user = { id: 1, name: 'Frank', username: 'Francer' }

  beforeAll(() => {
    store = mockStore({
      users: {
        usersList: [
          { id: 1, name: 'Frank', username: 'Francer' },
          { id: 2, name: 'Hank', username: '@Minerals' },
        ],
        areUsersLoading: false,
        usersErrorMessage: null,
      },
      search: {},
    })

    wrapper = mount(
      <Provider store={store}>
        <UserCard user={user} />
      </Provider>
    )
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
