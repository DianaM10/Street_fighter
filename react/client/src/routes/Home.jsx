import React from 'react'
import TopTrumpsContainer from '../containers/TopTrumpsContainer'

const Home = function() {
  return (
    <div id="splash" className="fade-in">
      <h1>TOP TRUMPS</h1>
      <TopTrumpsContainer url="http://localhost:5000/"/>
    </div>
  )
}

export default Home