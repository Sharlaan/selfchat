import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper/Paper'
import MessagesContainer from './MessagesContainer'
import Actions from './Actions'
import moment from 'moment/moment'
import fr from 'moment/locale/fr' // eslint-disable-line
/* eslint-disable object-property-newline */
const style = { width: 400, padding: '0 20px 20px', margin: '0 10px',
  display: 'flex', flexDirection: 'column', marginBottom: 40 }
/* eslint-enable object-property-newline */

function Chat ({ title, messages, send }) {
  const handleSend = messageContent => {
    send({
      from: title,
      date: moment(Date.now(), null, 'fr').fromNow(),
      content: messageContent
    })
  }

  return (
    <Paper style={style}>
      <h3>{title}</h3>

      <MessagesContainer messages={messages} />

      <Actions send={handleSend} />
    </Paper>
  )
}

Chat.propTypes = {
  title: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.string
  })),
  send: PropTypes.func.isRequired
}

Chat.defaultProps = {
  title: 'Chat [to be defined]',
  messages: [],
  send: () => {}
}

export default Chat
