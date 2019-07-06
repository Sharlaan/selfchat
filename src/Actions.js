import teal from '@material-ui/core/colors/teal';
import IconButtonBase from '@material-ui/core/IconButton';
import TextFieldBase from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles, withStyles } from '@material-ui/styles';
import React, { useState } from 'react';

const useStyles = makeStyles({
  main: { display: 'flex', alignItems: 'center' },
});

const TextField = withStyles({
  root: {
    flex: 1,
    marginRight: 20,
    '& label.Mui-focused': {
      color: teal[100],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: teal[100],
    },
  },
})(TextFieldBase);

const IconButton = withStyles({
  root: {
    '&:hover': {
      color: teal[100],
    },
  },
})(IconButtonBase);

export default function Actions({ send }) {
  const classes = useStyles();
  const [message, setMessage] = useState('');

  const reset = () => setMessage('');

  const handleChange = ({ target }) => setMessage(target.value);

  const handleKeyStrokes = ({ key, ctrlKey }) => {
    switch (key) {
      case 'Enter':
        if (ctrlKey) _send();
        break;
      // TODO: Add emoticons
      default:
        break;
    }
  };

  // TODO: /!\ escape dangerous characters !
  const _send = () => {
    if (!message.length) return;
    send(message);
    reset();
  };

  return (
    <section className={classes.main}>
      <TextField
        name="Textfield"
        label="Message"
        multiline
        rowsMax={3}
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyStrokes}
      />

      <Tooltip
        title={
          <span>
            Envoyer
            <br />
            (CTRL + ENTER)
          </span>
        }
      >
        <IconButton onClick={_send}>
          <SendIcon />
        </IconButton>
      </Tooltip>
    </section>
  );
}
