import React from 'react'
import { shallow } from 'enzyme'
import { render } from '@testing-library/react'
import Example from '../../../components/hooks/useEffect'

describe('snapshot', () => {
  it('should match snapshot', () => {
    /**
     * shallow enzyme won't execute useEffect because
     * useEffect is different from componentDidMount
     *
     * https://reactjs.org/docs/hooks-reference.html#timing-of-effects
     * Unlike componentDidMount and componentDidUpdate,
     * the function passed to useEffect fires after layout and paint, during a deferred event.
     */
    const component = shallow(<Example />)
    expect(component).toMatchSnapshot()
  })
})

describe('useEffect', () => {
  // we use @testing-library/react or react-testing-library
  it('should contain "new title"', () => {
    const { container } = render(<Example />)
    const elem = container.querySelector('.title') // HTMLElement
    expect(elem.textContent).toBe('new title')
  })

  it('should match snapshot', () => {
    const { asFragment } = render(<Example />)
    expect(asFragment()).toMatchSnapshot()
  })
})
