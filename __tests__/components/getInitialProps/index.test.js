import React from 'react'
import { shallow } from 'enzyme'
import Example from '../../../components/getInitialProps'

describe('snapshot', () => {
  it('should match with snapshot', () => {
    const component = shallow(<Example />)
    expect(component).toMatchSnapshot()
  })
})

/**
 * getInitialProps is static class method
 * so we need to execute it by calling ClassName.getInitialProps()
 */
describe('getInitialProps', () => {
  it('should return data props as "server"', () => {
    const expectedResult = { data: 'server' }
    const res = Example.getInitialProps({ isServer: true })

    // toStricEqual is deep comparison
    expect(res).toStrictEqual(expectedResult)
  })

  it('should return data props as "client"', () => {
    const expectedResult = { data: 'client' }
    const res = Example.getInitialProps({ isServer: false })
    expect(res).toStrictEqual(expectedResult)
  })
})
