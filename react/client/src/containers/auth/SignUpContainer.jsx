import React from 'react'

class SignUpContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this)
    this.signUp = this.signUp.bind(this)
  }

  signUp(event) {
    event.preventDefault()
    const request = new XMLHttpRequest()
    request.open("POST", this.props.url)
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = () => {
      if(request.status === 201){
        let user = JSON.parse(request.responseText)
        this.props.onSignUp(user)
      }
    }
    const data = {
      user:{
        email:this.state.email,
        password:this.state.password,
        password_confirmation: this.state.passwordConfirmation
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

  handlePasswordConfirmationChange(event) {
    this.setState({
      passwordConfirmation: event.target.value
    })
  }

  render() {
    return(
      <form className='log-form'>
        <input type="text" onChange={this.handleEmailChange}  placeholder="enter email" />
        <input type="password" onChange={this.handlePasswordChange}  placeholder="enter password" />
        <input type="password" onChange={this.handlePasswordConfirmationChange}  placeholder="confirm password" />
        <button type="submit" onClick={this.signUp}>Sign Up</button>
      </form>
    )
  }
}

export default SignUpContainer