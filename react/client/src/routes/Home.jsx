import React from 'react'
import LoginContainer from '../containers/LoginContainer'

const Home = function() {
  return (
    <div id="splash" className="fade-in">
      <LoginContainer url="http://localhost:5000/"/>
    </div>
  )
}

export default Home