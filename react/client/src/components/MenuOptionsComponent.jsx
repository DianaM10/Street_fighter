import React from 'react'

const MenuOptionsComponent = function(props) {

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
    <div className="log-form">
      {buttons}
    </div>
  )
}

export default MenuOptionsComponent