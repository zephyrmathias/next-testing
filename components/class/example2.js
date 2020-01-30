import React from 'react'

class Example extends React.Component {
  constructor() {
    super()

    // to avoid binding function, you can use arrow function
    // read more about performance
    // https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1
    this.changeState = this.changeState.bind(this)
  }

  state = {
    title: 'default title',
  }

  componentDidUpdate() {
    this.doSomething()
  }

  doSomething = (a, b) => {
    return a + b
  }

  changeState() {
    this.setState({ title: 'new title' })
  }

  render() {
    const { title } = this.state

    return (
      <div>
        <div>Class Example 2</div>
        <div className="title">{title}</div>
        <div className="click" onClick={this.changeState}>click me</div>
        <button onClick={this.changeState}>button</button>
      </div>
    )
  }
}

export default Example
