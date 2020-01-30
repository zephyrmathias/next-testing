import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0)
  const incrementCount = () => setCount((currentCount) => currentCount + 1)
  const testFunction = () => {
    console.log('123')
  }

  useEffect(() => {
    testFunction()
  }, [count])

  return (
    <button onClick={incrementCount}>{count}</button>
  )
}

export default Example
