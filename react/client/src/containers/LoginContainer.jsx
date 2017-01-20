import React from 'react'
import SignInContainer from './SignInContainer'

class LoginContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
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
    return(
      <div id="start-menu">
        <SignInContainer url={this.props.url +'users/sign_in.json'} />
      </div>
    )
  }
}

export default LoginContainer