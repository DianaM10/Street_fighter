import React from 'react'

const MenuOptionComponent = function(props) {
  const signIn = function() {
    props.setOption("signIn")
  }

  const signUp = function() {
    props.setOption("signUp")
  }

  return(
    <div className="options-menu">
      <button onClick={signIn}>Sign In</button>
      <button onClick={signUp}>Sign Up</button>
    </div>
  )
}

export default MenuOptionComponent