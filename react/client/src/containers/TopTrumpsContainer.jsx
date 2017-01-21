import React from 'react'
import LoginContainer from './auth/LoginContainer'
import MenuContainer from './MenuContainer'

class TopTrumpsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      fighters: []
    }
    this.setUser = this.setUser.bind(this)
    this.setFighters = this.setFighters.bind(this)
  }

  setUser(user) {
    this.setState({
      currentUser: user
    })
  }

  setFighters(fighters) {
    this.setState({
      fighters: fighters
    })
  }

  getUser() {
    const url = this.props.url + 'users.json'
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.setRequestHeader('Content-Type', 'application/json')
    request.withCredentials = true
    request.onload = () => {
      if(request.status === 200) {
        const user = JSON.parse(request.responseText)
        this.setUser(user)
      } else if (request.status === 401) {
        this.setUser(null)
      }
    }
    request.send(null)
  }

  componentDidMount() {
    this.getUser()
  }

  render() {
    const content = (this.state.currentUser) ?
      (<MenuContainer user={this.state.currentUser} setFighters={this.setFighters} fighters={this.state.fighters}/>) :
      (<LoginContainer url={this.props.url} setUser={this.setUser}/>)
      return (
        <div id="splash" className="fade-in">
          <h1>TOP TRUMPS</h1>
          {content}
        </div>
      )
  }
}

export default TopTrumpsContainer