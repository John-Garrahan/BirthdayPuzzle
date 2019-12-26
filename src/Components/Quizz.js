import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Question from './Question';
import Header from './Header';

import q_one_question from '../Images/q_one_question.png'
import q_one_answer from '../Images/q_one_answer.png'
import q_two_question from '../Images/q_two_question.png'
import q_two_answer from '../Images/q_two_answer.png'
import q_three_question from '../Images/q_three_question.png'
import q_three_answer from '../Images/q_three_answer.png'
import q_four_question from '../Images/q_four_question.png'
import q_four_answer from '../Images/q_four_answer.png'
import q_five_question from '../Images/q_five_question.png'
import q_five_answer from '../Images/q_five_answer.png'
import q_six_question from '../Images/q_six_question.png'
import q_six_answer from '../Images/q_six_answer.png'
import q_seven_question from '../Images/q_seven_question.png'
import q_seven_answer from '../Images/q_seven_answer.png'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

export default function Quizz() {
  const classes = useStyles();

  return (
    <main>
        {/* Header.js */}
        <Header />

        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={6}>
            {/* Question 1 */}
            <Grid item xs={12} sm={6}>
              <Question
                questionMedia={q_one_question}
                answerMedia={q_one_answer}
                questionName='Question One'
                questionBody='Fumes of fun have been my aroma. However much I wish, I’m not built like Roma.'
                questionAnswer='shed'
              ></Question>
            </Grid>

            {/* Question 2 */}
            <Grid item xs={12} sm={6}>
              <Question
                questionMedia={q_two_question}
                answerMedia={q_two_answer}
                questionName='Question Two'
                questionBody='I’ve seen dinners, parties & sessions for years. You’ve carried me with you, all full of beers.'
                questionAnswer='fridge'
              ></Question>
            </Grid>  

            {/* Question 3 */}
            <Grid item xs={12} sm={6}>
              <Question
                questionMedia={q_three_question}
                answerMedia={q_three_answer}
                questionName='Question Three'
                questionBody='Dark & forgotten is why I lie. Only to be opened when the dust needs to fly.'
                questionAnswer='under stairs'
              ></Question>
            </Grid>  

            {/* Question 4 */}
            <Grid item xs={12} sm={6}>
              <Question
                questionMedia={q_four_question}
                answerMedia={q_four_answer}
                questionName='Question 4'
                questionBody='I am trodden & stomped upon day by day. Yet I’ll always welcome you wide a friendly display.'
                questionAnswer='mat'
              ></Question>
            </Grid>  

            {/* Question 5 */}
            <Grid item xs={12} sm={6}>
              <Question
                questionMedia={q_five_question}
                answerMedia={q_five_answer}
                questionName='Question 5'
                questionBody='You answer me, but never ask me questions. I have many types of rings, but no ringers.'
                questionAnswer='phone'
              ></Question>
            </Grid>  

            {/* Question 6 */}
            <Grid item xs={12} sm={6}>
              <Question
                questionMedia={q_six_question}
                answerMedia={q_six_answer}
                questionName='Question 6'
                questionBody='Silent guardians of the house, we bob away. Defending from enemies is child’s play.'
                questionAnswer='fish'
              ></Question>
            </Grid>  

            {/* Question 7 */}
            <Grid item xs={12} sm={6}>
              <Question
                questionMedia={q_seven_question}
                answerMedia={q_seven_answer}
                questionName='Question 7'
                questionBody='I shine & sparkle as I’m just brand new. I scream & shout when its time to construe.'
                questionAnswer='kettle'
              ></Question>
            </Grid>
          </Grid>
        </Container>
      </main>
  );
}