import React from 'react'

class Example extends React.Component {
  static getInitialProps({ isServer }) {
    if (isServer) {
      return { data: 'server' }
    }

    return { data: 'client' }
  }

  render() {
    return (
      <div>Hello world.</div>
    )
  }
}

export default Example
