import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  aside: { display: 'flex', justifyContent: 'space-between', marginBottom: 5 },
  from: { fontWeight: 'bold' },
  date: { fontSize: 10 },
  content: { margin: 0, whiteSpace: 'pre-line', wordWrap: 'break-word' },
});

// TODO: edit message in App.js
export default function Message({ from, date, content, editMessage }) {
  const classes = useStyles();
  return (
    <ListItem button onClick={editMessage}>
      <ListItemText
        primary={
          <article>
            <aside className={classes.aside}>
              <span className={classes.from}>{from}</span>
              <span className={classes.date}>{date}</span>
            </aside>
            <pre className={classes.content}>{content}</pre>
          </article>
        }
      />
    </ListItem>
  );
}
