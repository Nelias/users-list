import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

import Main from './main'
import { Spinner } from './main-styles'

Enzyme.configure({ adapter: new Adapter() })

const mockStore = configureStore([])

describe('Main', () => {
  let store: any = null
  let wrapper: any = null

  beforeAll(() => {
    store = mockStore({
      users: { areUsersLoading: true },
      search: {},
    })

    wrapper = mount(
      <Provider store={store}>
        <Main />
      </Provider>
    )
  })

  it('should mount in a full DOM', () => {
    expect(wrapper.length).toBe(1)
  })

  it('should not contain a header', () => {
    expect(wrapper.exists('header')).toBe(false)
  })

  it('should contain main content', () => {
    expect(wrapper.exists('main')).toBe(true)
  })

  it('should show a spinner if users are loading', () => {
    expect(wrapper.find(Spinner).props().alt).toEqual('spinner')
  })

  afterAll(() => {
    wrapper.unmount()
  })
})
