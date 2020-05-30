import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import Main from './main'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('../../store/actions/users')

const mockStore = configureStore([])

describe('Main', () => {
  let store: any = null
  let wrapper: any = null

  beforeAll(() => {
    store = mockStore({
      users: {},
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

  afterAll(() => {
    wrapper.unmount()
  })
})
