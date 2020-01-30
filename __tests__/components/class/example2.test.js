import React from 'react'
import { shallow } from 'enzyme'
import Example from '../../../components/class/example2'

describe('snapshot', () => {
  it('should match with snapshot', () => {
    const component = shallow(<Example />)
    const title = component.find('.title')
    expect(component).toMatchSnapshot()
    expect(title.text()).toBe('default title')
  })
})

describe('onClick', () => {
  it('should change title to new title when clicking on click me text', () => {
    const component = shallow(<Example />)
    const clickElem = component.find('.click')

    // execute onClick since it is a prop
    clickElem.props().onClick()

    const title = component.find('.title')
    expect(title.text()).toBe('new title')
  })

  it('should change title to new title when clicking on a button', () => {
    const component = shallow(<Example />)
    const button = component.find('button')

    // we can simulate click when it is a button element
    button.simulate('click')

    const title = component.find('.title')
    expect(title.text()).toBe('new title')
  })
})

describe('changeState()', () => {
  it('should change title to be "new title"', () => {
    const component = shallow(<Example />)
    const instance = component.instance()

    instance.changeState()

    expect(instance.state).toStrictEqual({ title: 'new title' }) // get all states
    expect(instance.state.title).toBe('new title') // instance.state returns an object
  })
})

describe('doSomething()', () => {
  it('should return sum of two parameters', () => {
    const component = shallow(<Example />)
    const instance = component.instance()

    const res = instance.doSomething(1, 2)
    expect(res).toBe(3)
  })
})

describe('componentDidUpdate', () => {
  // we can test by checking function inside componentDidUpdate is getting called
  it('should call doSomething when clicking on a button', () => {
    const component = shallow(<Example />)
    const button = component.find('button')
    const instance = component.instance()

    // mock to be jest.fn() so we can spyOn (and make it real unit tests)
    // but if you want it to be integration test, just execute real function
    instance.doSomething = jest.fn()

    // use onClick since we know that onClick is changing state
    button.simulate('click')
    expect(instance.doSomething).toHaveBeenCalledTimes(1)
  })

  // call componentDidUpdate directly
  it('should call doSomething when clicking on a button', () => {
    const component = shallow(<Example />)
    const instance = component.instance()

    instance.doSomething = jest.fn()
    instance.componentDidUpdate()

    expect(instance.doSomething).toHaveBeenCalledTimes(1)
  })
})
