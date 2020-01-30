import React from 'react'
import { shallow } from 'enzyme'
import Example from '../../../components/class/example1'

/**
 * shallow executes componentDidMount and componentDidUpdate
 * https://airbnb.io/enzyme/docs/api/shallow.html#shallow-rendering-api
 */

describe('snapshot', () => {
  it('should match with snapshot', () => {
    // componentDidMount also got executed
    // you might not really need a test just to execute componentDidMount
    const component = shallow(<Example />)
    const title = component.find('.title')
    expect(component).toMatchSnapshot()
    expect(title.text()).toBe('new title')
  })

  it('should match with snapshot (no lifecycle)', () => {
    // without lifecycle
    const component = shallow(<Example />, { disableLifecycleMethods: true })
    const title = component.find('.title')
    expect(component).toMatchSnapshot()
    expect(title.text()).toBe('default title')
  })
})

// in case you want to test componentDidMount itself
describe('componentDidMount', () => {
  it('should set title to be "new title"', () => {
    // disableLifecycle so componentDidMount won't get executed at first
    const component = shallow(<Example />, { disableLifecycleMethods: true })
    const instance = component.instance()
    instance.componentDidMount()

    // check state
    expect(component.state()).toStrictEqual({ title: 'new title' })
  })

  // not recommend
  it('should call setState', () => {
    // mock setState to be jest.fn()
    Example.prototype.setState = jest.fn()
    const mockedState = { title: 'new title' }
    const component = shallow(<Example />, { disableLifecycleMethods: true })
    const instance = component.instance()
    instance.componentDidMount()

    // check setState is called with mockedState
    expect(instance.setState).toHaveBeenNthCalledWith(1, mockedState)
  })
})
