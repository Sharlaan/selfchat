import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import moment from 'moment/moment';
import React from 'react';
import Actions from './Actions';
import MessagesContainer from './MessagesContainer';

const useStyles = makeStyles({
  root: {
    width: 400,
    padding: '0 20px 20px',
    margin: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 40,
  },
});

export default function Chat({ title = 'Chat [to be defined]', messages = [], send = () => {} }) {
  const classes = useStyles();

  const handleSend = (messageContent) => {
    send({
      from: title,
      date: moment(Date.now(), null, 'fr').fromNow(),
      content: messageContent,
    });
  };

  return (
    <Paper className={classes.root}>
      <h3>{title}</h3>

      <MessagesContainer messages={messages} />

      <Actions send={handleSend} />
    </Paper>
  );
}
