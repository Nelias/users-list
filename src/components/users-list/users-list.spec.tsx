import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import UsersList from './users-list'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import { ErrorMessage } from '../main/main-styles'
import { Main } from '../main/main'

Enzyme.configure({ adapter: new Adapter() })

const mockStore = configureStore([])

jest.mock('../../store/actions/search')

describe('UsersList', () => {
  let store: any = null
  let wrapper: any = null
  const usersList = [
    { id: 1, name: 'Frank', username: 'Francer' },
    { id: 2, name: 'Hank', username: 'Minerals' },
  ]

  beforeAll(() => {
    store = mockStore({
      users: {
        usersList: [
          { id: 1, name: 'Frank', username: 'Francer' },
          { id: 2, name: 'Hank', username: 'Minerals' },
        ],
        areUsersLoading: false,
        usersErrorMessage: null,
      },
      search: {},
    })

    wrapper = mount(
      <Provider store={store}>
        <UsersList users={usersList} />
      </Provider>
    )
  })

  it('should mount in a full DOM', () => {
    expect(wrapper.length).toBe(1)
  })

  it('should contain a list', () => {
    expect(wrapper.exists('ol')).toBe(true)
  })

  it('should contain a list item', () => {
    expect(wrapper.exists('li')).toBe(true)
  })

  it('should contain a name and a nickname of the first user', () => {
    expect(wrapper.html()).toContain('Frank')
    expect(wrapper.html()).toContain('@Francer')
  })

  it('should contain a name and a nickname of a second user', () => {
    expect(wrapper.html()).toContain('Hank')
    expect(wrapper.html()).toContain('Minerals')
  })

  afterAll(() => {
    wrapper.unmount()
  })
})

describe('UsersList - Item search success', () => {
  let store: any = null
  let wrapper: any = null
  const usersList = [
    { id: 1, name: 'Frank', username: 'Francer' },
    { id: 2, name: 'Hank', username: 'Minerals' },
    { id: 3, name: 'Walter', username: 'Crystals' },
  ]

  beforeAll(() => {
    store = mockStore({
      users: {
        usersList: [
          { id: 1, name: 'Frank', username: 'Francer' },
          { id: 2, name: 'Hank', username: 'Minerals' },
          { id: 3, name: 'Walter', username: 'Crystals' },
        ],
        areUsersLoading: false,
        usersErrorMessage: null,
      },
      search: { search: { phrase: 'fran' } },
    })

    wrapper = mount(
      <Provider store={store}>
        <Main
          usersList={usersList}
          searchPhrase="fran"
          areUsersLoading={false}
          usersErrorMessage={null}
        />
      </Provider>
    )
  })

  it('should mount in a full DOM', () => {
    expect(wrapper.length).toBe(1)
  })

  it('should contain a list', () => {
    expect(wrapper.exists('ul')).toBe(true)
  })

  it('should contain a list item', () => {
    expect(wrapper.exists('li')).toBe(true)
  })

  it('should contain only a name and a nickname of the searched user', () => {
    expect(wrapper.html()).toContain('Frank')
    expect(wrapper.html()).toContain('@Francer')
    expect(wrapper.html()).not.toContain('Hank')
    expect(wrapper.html()).not.toContain('Minerals')
    expect(wrapper.html()).not.toContain('Walter')
    expect(wrapper.html()).not.toContain('Crystals')
  })

  afterAll(() => {
    wrapper.unmount()
  })
})

describe('UsersList - Item search error', () => {
  let store: any = null
  let wrapper: any = null
  const usersList = [
    { id: 1, name: 'Frank', username: 'Francer' },
    { id: 2, name: 'Hank', username: 'Minerals' },
    { id: 3, name: 'Walter', username: 'Crystals' },
  ]

  beforeAll(() => {
    store = mockStore({
      users: {
        usersList: [
          { id: 1, name: 'Frank', username: 'Francer' },
          { id: 2, name: 'Hank', username: 'Minerals' },
          { id: 3, name: 'Walter', username: 'Crystals' },
        ],
        areUsersLoading: false,
        usersErrorMessage: null,
      },
      search: { search: { phrase: 'exe' } },
    })

    wrapper = mount(
      <Provider store={store}>
        <Main
          usersList={usersList}
          searchPhrase="exe"
          areUsersLoading={false}
          usersErrorMessage={null}
        />
      </Provider>
    )
  })

  it('should mount in a full DOM', () => {
    expect(wrapper.length).toBe(1)
  })

  it('should not contain a list item', () => {
    expect(wrapper.exists('li')).toBe(false)
  })

  it('should not contain user credentials', () => {
    expect(wrapper.html()).not.toContain('Hank')
    expect(wrapper.html()).not.toContain('Minerals')
  })

  it('should display an error message for not found user', () => {
    expect(wrapper.find(ErrorMessage).props().children).toBeTruthy()
  })

  afterAll(() => {
    wrapper.unmount()
  })
})
