import React from 'react'
import SignInContainer from './SignInContainer'
import SignUpContainer from './SignUpContainer'
import MenuOptionsComponent from '../../components/MenuOptionsComponent'

class LoginContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
      options: ["Sign In", "Sign Up"]
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
    if (this.state.selectedOption === "Sign Up") {
      content = <SignUpContainer url={this.props.url + 'users.json'} onSignUp={this.props.setUser} />
    } else if (this.state.selectedOption === "Sign In") {
      content = <SignInContainer url={this.props.url +'users/sign_in.json'} onSignIn={this.props.setUser}/>
    } else {
      content = <MenuOptionsComponent selectOption={this.setOption} options={this.state.options}/>
    }
    return content
  }
}

export default LoginContainer