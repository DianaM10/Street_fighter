import React from 'react'
import LoginContainer from './auth/LoginContainer'
import TopTrumpsContainer from './TopTrumpsContainer'

class UIContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
    this.setUser = this.setUser.bind(this)
  }

  setUser(user) {
    this.setState({
      currentUser: user
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
      (<TopTrumpsContainer user={this.state.currentUser}/>) :
      (<LoginContainer url={this.props.url} setUser={this.setUser}/>)
      return content
  }
}

export default UIContainer