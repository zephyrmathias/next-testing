import React, { useState, useEffect } from 'react'

function Example() {
  const [title, setTitle] = useState('default title')

  useEffect(() => {
    setTitle('new title')
  }, [])

  return (
    <div className="title">{title}</div>
  )
}

export default Example
