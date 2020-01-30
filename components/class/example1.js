import React from 'react'

class Example extends React.Component {
  state = {
    title: 'default title',
  }

  componentDidMount() {
    this.setState({ title: 'new title' })
  }

  render() {
    const { title } = this.state

    return (
      <div>
        <div>Class Example 1</div>
        <div className="title">{title}</div>
      </div>
    )
  }
}

export default Example
