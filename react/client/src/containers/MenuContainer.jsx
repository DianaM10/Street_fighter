import React from 'react'
import MenuOptionsComponent from '../components/MenuOptionsComponent'

class MenuContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
      options: ["Start Game", "View Fighters"]
    }
    this.setOption = this.setOption.bind(this)
  }

  setOption(option) {
    this.setState({
      selectedOption: option
    })
  }

  componentDidMount() {
    console.log("MenuContainer did mount")
    var url = "http://localhost:3000/fighters"
    var request = new XMLHttpRequest()
    request.open("GET", url)
    request.onload = () => {
      if (request.status !== 200) return
      var data = JSON.parse(request.responseText)
      this.props.setFighters(data.fighters)
    }
    request.send();
  }

  render() {
    console.log("fighters", this.props.fighters)
    let content
    if (this.state.selectedOption === "View Fighters") {
      content = <h2>Hey {this.props.user.email} Fighters</h2>
    } else if (this.state.selectedOption === "Start Game") {
      content = <h2>Hey {this.props.user.email} Game</h2>
    } else {
      content = <MenuOptionsComponent selectOption={this.setOption} options={this.state.options}/>
    }
    return content
  }
}

export default MenuContainer