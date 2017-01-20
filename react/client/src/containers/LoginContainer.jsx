import React from 'react'
import SignInContainer from './SignInContainer'
import SignUpContainer from './SignUpContainer'
import MenuOptionsComponent from '../components/MenuOptionsComponent'

class LoginContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null
    }
    this.setOption = this.setOption.bind(this)
  }

  setOption(option) {
    this.setState({
      selectedOption: option
    })
  }

  render() {
    let content
    if (this.state.selectedOption === "signUp") {
      content = <SignUpContainer url={this.props.url + 'users.json'} onSignUp={this.props.setUser} />
    } else if (this.state.selectedOption === "signIn") {
      content = <SignInContainer url={this.props.url +'users/sign_in.json'} onSignIn={this.props.setUser}/>
    } else {
      content = <MenuOptionsComponent setOption={this.setOption} />
    }
    return content
  }
}

export default LoginContainer