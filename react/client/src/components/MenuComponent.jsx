import React from 'react'
import MenuOptionsComponent from './MenuOptionsComponent'

const MenuComponent = function(props) {

  return(
    <div id="splash" className="fade-in">
      <h1>{props.menuTitle}</h1>
      <MenuOptionsComponent selectOption={props.selectOption} options={props.options}/>
    </div>
  )
}

export default MenuComponent