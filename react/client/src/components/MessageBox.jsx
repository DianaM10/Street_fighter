import React from 'react'


class MessageBox extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <section id="message-display">
      <button id="startGameButton">START GAME</button>
        Message Box
      </section>
      )
  }
}

export default MessageBox