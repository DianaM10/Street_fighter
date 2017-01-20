import React from 'react'

class SignInContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.signIn = this.signIn.bind(this)
  }

  signIn(event) {
    event.preventDefault()
    const request = new XMLHttpRequest()
    request.open('POST', this.props.url)
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = () => {
      if (request.status === 201) {
        const user = JSON.parse(request.responseText)
        this.props.onSignIn(user)
      }
    }
    const data = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    }
    request.send(JSON.stringify(data))
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return(
      <form className="login-form">
        <input type="email" onChange={this.handleEmailChange} placeholder="enter email" />
        <input type="password" onChange={this.handlePasswordChange} placeholder="enter password" />
        <button type="submit" onClick={this.signIn}>Sign In</button>
      </form>
    )
  }
}

export default SignInContainer