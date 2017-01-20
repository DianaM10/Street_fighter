import React from 'react'

const MenuOptionComponent = function(props) {

  const buttons = props.options.map(function(option, index) {
    return (
      <button key={index} onClick={function() {
        props.selectOption(option)
      }}>
        {option}
      </button>
    )
  })

  return(
    <div className="options-menu">
      {buttons}
    </div>
  )
}

export default MenuOptionComponent