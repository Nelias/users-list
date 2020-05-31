import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import TopBar from './top-bar'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

const mockStore = configureStore([])

describe('TopBar', () => {
  let store: any = null
  let wrapper: any = null

  beforeAll(() => {
    store = mockStore({})

    wrapper = mount(
      <Provider store={store}>
        <TopBar />
      </Provider>
    )
  })

  it('should mount in a full DOM', () => {
    expect(wrapper.length).toBe(1)
  })

  it('should contain a search input', () => {
    expect(wrapper.exists('input')).toBe(true)
  })

  it('should contain a search button', () => {
    expect(wrapper.exists('button')).toBe(true)
  })

  afterAll(() => {
    wrapper.unmount()
  })
})
