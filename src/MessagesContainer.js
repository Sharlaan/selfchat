import ListBase from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/styles';
import React, { useEffect, useRef } from 'react';
import Message from './Message';

const List = withStyles({
  root: { flex: 1, overflowY: 'auto' },
})(ListBase);

export default function MessagesContainer({ messages }) {
  const listRef = useRef(null);

  // Scrolls to bottom after each new message in messages
  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  return (
    <List ref={listRef}>
      <ListSubheader>Aujourd'hui</ListSubheader>
      {messages.map(({ from, date, content }, index) => (
        <Message from={from} date={date} key={index} content={content} editMessage={() => {}} />
      ))}
    </List>
  );
}
