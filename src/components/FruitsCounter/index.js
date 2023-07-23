import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  mangosAte = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  bananaAte = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">
            Bob ate <span>{mangoCount}</span> mangoes <span>{bananaCount}</span>{' '}
            bananas
          </h1>
          <div className="images-container">
            <div className="image-sub-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <br />
              <button className="btn" type="button" onClick={this.mangosAte}>
                Eat Mango
              </button>
            </div>
            <div className="image-sub-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <br />
              <button className="btn" type="button" onClick={this.bananaAte}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
