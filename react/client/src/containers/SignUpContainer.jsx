import React from 'react'

class SignUpContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  render() {
    return(
      <div>SignUpContainer</div>
    )
  }
}

export default SignUpContainer