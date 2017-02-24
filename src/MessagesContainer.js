import React, { PropTypes } from 'react'
import List from 'material-ui/List/List'
import Subheader from 'material-ui/Subheader/Subheader'

import Message from './Message'

function MessagesContainer ({ messages }) {
  return (
    <List style={{ flex: 1 }}>
      <Subheader>Aujourd'hui</Subheader>
      {messages.map(({ from, date, content }, index) =>
        <Message from={from} date={date} key={index} content={content} />)}
    </List>
  )
}

MessagesContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
}

export default MessagesContainer
