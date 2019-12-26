import React, { useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Quizz from './Quizz.js';
import Player from './Player.js';

const useStyles = makeStyles(theme => ({
  heroButtons: {
    paddingBottom: 20,
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function AnswerHolder(answer) {
  const [answerValue, setAnswerValue] = useState("");
  const classes = useStyles();

  if (answerValue === answer) {
    return [
      <Player url='celebrate' name='CELEBRATE' />,
      <img src="https://media.giphy.com/media/slOhiKAVFgwr6/giphy.gif" alt="new" />,
      <img src="https://media.giphy.com/media/l49JHLpRSLhecYEmI/giphy.gif" alt="new" />,
      <img src="https://media.giphy.com/media/ely3apij36BJhoZ234/giphy.gif" alt="new" />,
      <img src="https://media.giphy.com/media/3o6fIUZTTDl0IDjbZS/giphy.gif" alt="new" />,
      <img src="https://media.giphy.com/media/26DOoDwdNGKAg6UKI/giphy.gif" alt="new" />,
    ];
  } else {
    return[
      <Quizz />,
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <p>You may have to sort & reverse your thinking...</p>
              <TextField id="inputField" label="Final Answer" variant="outlined" onChange={e => setAnswerValue(e.target.value)} />
            <p>🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥</p>
          </Grid>
        </Grid>
      </div>
    ];
  }
}
    
export default function Main() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <marquee>👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥👌🔥</marquee>
          </Typography>
        </Toolbar>
      </AppBar>

      {AnswerHolder('retsmah')}

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Alina,
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Merry Christmas :)
        </Typography>
      </footer>
    </React.Fragment>
  );
}
