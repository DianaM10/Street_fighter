import React from 'react'
import MenuComponent from '../components/MenuComponent'
import GameContainer from './GameContainer'

class TopTrumpsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fighters: [],
      options: ["Start Game", "View Fighters"],
      selectedOption: null
    }
    this.setFighters = this.setFighters.bind(this)
    this.setOption = this.setOption.bind(this)
  }

  setFighters(fighters) {
    this.setState({
      fighters: fighters
    })
  }

  setOption(option) {
    this.setState({
      selectedOption: option
    })
  }

  componentDidMount() {
    var url = "http://localhost:3000/fighters"
    var request = new XMLHttpRequest()
    request.open("GET", url)
    request.onload = () => {
      if (request.status !== 200) return
      var data = JSON.parse(request.responseText)
      this.setFighters(data.fighters)
    }
    request.send();
  }

  render() {
    let content = null
    if (this.state.selectedOption === "View Fighters") {
      content = <h2>Fighters</h2>
    } else if (this.state.selectedOption === "Start Game") {
      content = <GameContainer />
    } else {
      content = <MenuComponent menuTitle="TOP TRUMPS" selectOption={this.setOption} options={this.state.options}/>
    }
    return content
  }
}

export default TopTrumpsContainer