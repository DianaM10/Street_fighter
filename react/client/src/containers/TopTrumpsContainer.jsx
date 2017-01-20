import React from 'react'
import LoginContainer from './LoginContainer'

class TopTrumpsContainer extends React.Component {
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
    return (this.state.currentUser) ?
      (<div></div>) :
      (<LoginContainer url={this.props.url} setUser={this.setUser}/>)
  }
}

export default TopTrumpsContainer