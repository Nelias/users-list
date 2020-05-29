import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import TopBar from './top-bar'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

const mockStore = configureStore([])

jest.mock('../../redux/actions')

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}))

describe('TopcBar', () => {
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
    expect(wrapper.find('input'))
  })

  it('should contain a search button', () => {
    expect(wrapper.find('button'))
  })

  afterAll(() => {
    wrapper.unmount()
  })
})
