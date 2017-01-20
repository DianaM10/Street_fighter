import React from 'react'


class LoginContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  render() {
    return(
      <div id="start-menu">
      Login Container
      </div>
    )
  }
}

export default LoginContainer