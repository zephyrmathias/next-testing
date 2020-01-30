import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Example from '../../../components/hooks/useEffect2'

describe('onClick', () => {
  it('should increase count number when button is clicked', () => {
    const { container } = render(<Example />)
    const button = container.firstChild
    expect(button.textContent).toBe('0')

    // basically, this test also covers useEffect as componentDidUpdate
    fireEvent.click(button)
    expect(button.textContent).toBe('1')
  })
})

describe('diff snapshot', () => {
  it('should increase count number when button is clicked', () => {
    const { asFragment, container } = render(<Example />)
    const firstRender = asFragment()
    const button = container.firstChild

    fireEvent.click(button)

    expect(firstRender).toMatchDiffSnapshot(asFragment())
  })
})

