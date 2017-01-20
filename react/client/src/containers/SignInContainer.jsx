import React from 'react'
import LinkedStateMixin from 'react-addons-linked-state-mixin'

class SignInContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return(
      <div>
        SignIn
      </div>
    )
  }
}

export default SignInContainer