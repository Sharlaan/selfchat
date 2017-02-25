import React, { PropTypes } from 'react'
import ListItem from 'material-ui/List/ListItem'

// TODO: edit message in App.js
function Message ({ from, date, content, editMessage }) {
  return (
    <ListItem
      primaryText={
        <article>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <span style={{ fontWeight: 'bold' }}>{from}</span>
            <span style={{ fontSize: 10 }}>{date}</span>
          </div>
          <pre style={{ margin: 0, whiteSpace: 'pre-line', wordWrap: 'break-word' }}>
            {content}
          </pre>
        </article>}
      onTouchTap={editMessage}
    />
  )
}

Message.propTypes = {
  from: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
  editMessage: PropTypes.func
}

export default Message
