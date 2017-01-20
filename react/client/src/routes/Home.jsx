import React from 'react'
import LoginContainer from '../containers/LoginContainer'

const Home = function() {
  return (
    <div id="splash" className="fade-in">
      <h1>TOP TRUMPS</h1>
      <LoginContainer url="http://localhost:5000/"/>
    </div>
  )
}

export default Home