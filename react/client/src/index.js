import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Home from './routes/Home'
var StartView = require('./views/start_view.js')

window.onload = function() {
  ReactDOM.render(
    <Home />,
    document.getElementById('app')
  )
}



// = function() {
//   var startview = new StartView();
//   startview.makeMenu();
// };


// window.onload = app;