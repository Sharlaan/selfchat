import React, { PropTypes } from 'react'
import ListItem from 'material-ui/List/ListItem'

function Message ({ from, date, content }) {
  return (
    <ListItem primaryText={
      <article>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
          <span style={{ fontWeight: 'bold' }}>{from}</span>
          <span style={{ fontSize: 12 }}>{date}</span>
        </div>
        <div>{content}</div>
      </article>}
    />
  )
}

Message.propTypes = {
  from: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string
}

export default Message
