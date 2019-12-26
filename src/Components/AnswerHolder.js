import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  heroButtons: {
    paddingBottom: 20,
    marginTop: theme.spacing(4),
  }
}));

export default function AnswerHolder(props) {
  const {answer} = props;
  const classes = useStyles();
  const [answerValue, setAnswerValue] = useState("");

  const handleAnswer = () => {
    if (answerValue === answer) {
      return [
        <img src="https://media.giphy.com/media/slOhiKAVFgwr6/giphy.gif" alt="new" />,
        <img src="https://media.giphy.com/media/l49JHLpRSLhecYEmI/giphy.gif" alt="new" />,
        <img src="https://media.giphy.com/media/ely3apij36BJhoZ234/giphy.gif" alt="new" />,
        <img src="https://media.giphy.com/media/3o6fIUZTTDl0IDjbZS/giphy.gif" alt="new" />,
        <img src="https://media.giphy.com/media/26DOoDwdNGKAg6UKI/giphy.gif" alt="new" />,
      ];
    } else {
      return (
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <TextField id="inputField" label="Final Answer" variant="outlined" onChange={e => setAnswerValue(e.target.value.toLowerCase())} />
              <p>🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥</p>
            </Grid>
          </Grid>
        </div>
      );
    }
  };
    
  return (
    handleAnswer()
  );
};
