import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  evenOddCheck = () => {
    const {count} = this.state
    const tag = count % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>
    return tag
  }

  randomNum = () => Math.ceil(Math.random() * 100)

  incrementNum = () => {
    this.setState(prevState => ({count: prevState.count + this.randomNum()}))
    this.evenOddCheck()
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1>Count {count}</h1>
          {this.evenOddCheck()}
          <button onClick={this.incrementNum} type="button">
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
