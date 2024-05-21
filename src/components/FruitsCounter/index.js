import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className=" bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count-style">{mangoCount}</span> mangoes{' '}
            <span className="count-style">{bananaCount}</span> bananas
          </h1>
          <div className="img-btn-container">
            <div className="img-conatiner">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img-style"
              />
              <div>
                <button
                  className="btn-style"
                  type="button"
                  onClick={this.onIncrementMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="img-conatiner">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img-style"
              />
              <div>
                <button
                  className="btn-style"
                  type="button"
                  onClick={this.onIncrementBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
