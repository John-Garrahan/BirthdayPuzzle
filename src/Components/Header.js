import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Player from './Player'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Yo Puzzle :)
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Hope you enjoy. The answer to these questions are hidden around our house. <br></br> Go find em'.
        </Typography>
        <div className={classes.heroButtons}>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container>
            <Grid item xs={3} >
              <Player url='kill_me_now' name='Jenny From The Block' />
            </Grid>
            <Grid item xs={3} >
              <Player url='kiki' name='Kiki'/>
            </Grid>
            <Grid item xs={3} >
              <Player url='flo_rida' name='Flo Rida'/>
            </Grid>
            <Grid item xs={3} >
              <Player url='whip' name='Whip My Hair'/>
            </Grid>
          </Grid>
        </Container>

        </div>
      </Container>
    </div>
  )
}
