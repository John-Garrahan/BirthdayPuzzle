import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  form: {
    margin: theme.spacing(1),
    width: 200,
    textAlign: "center"
  },
}));

export default function Question(props) {
  const classes = useStyles();
  const { questionMedia, answerMedia, questionName, questionBody, questionAnswer } = props;
  const [answerValue, setAnswerValue] = useState("");

  const handleCardMedia = () => {
    let imageHolder;
    answerValue === questionAnswer ? imageHolder = answerMedia : imageHolder = questionMedia;
    return (
      <CardMedia className={classes.cardMedia} image={imageHolder} title="Image title" />
    );
  };

  const handleCardContent = () => {
    return (
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {questionName}
        </Typography>
      
        <Typography>
          {questionBody}
        </Typography>
      </CardContent>
    );
  };

  const handleCardActions = () => {
    return (
      <CardActions>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField id="inputField" label="Answer" variant="outlined" onChange={e => setAnswerValue(e.target.value.toLowerCase())} />
        </form>
      </CardActions>
    )
  }

  return (
    <Card className={classes.card}>
      {handleCardMedia()}
      {handleCardContent()}
      {handleCardActions()}
    </Card>
  );
};