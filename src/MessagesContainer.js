import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import List from 'material-ui/List/List'
import Subheader from 'material-ui/Subheader/Subheader'

import Message from './Message'

class MessagesContainer extends Component {
  componentDidUpdate () {
    this.scrollToBottom()
  }

  scrollToBottom = () => {
    const list = findDOMNode(this.list)
    list.scrollTop = list.scrollHeight
  }

  render () {
    return (
      <List style={{ flex: 1, overflowY: 'auto' }} ref={ref => (this.list = ref)}>
        <Subheader>Aujourd'hui</Subheader>
        {this.props.messages.map(({ from, date, content }, index) =>
          <Message from={from} date={date} key={index} content={content}/>)}
      </List>
    )
  }
}

MessagesContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
}

export default MessagesContainer
