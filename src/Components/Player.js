import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import kill_me_now from '../Audios/kill_me_now.mp3'
import kiki from '../Audios/kiki.mp3'
import flo_rida from '../Audios/flo_rida.mp3'
import whip from '../Audios/whip.mp3'
import celebrate from '../Audios/celebrate.mp3'

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export default function Player(props) {
  const {url, name} = props;
  let holder;

  switch(url) {
    case 'kill_me_now':
      holder = kill_me_now;
      break;
    case 'kiki':
      holder = kiki;
      break;
    case 'flo_rida':
      holder = flo_rida;
      break;
    case 'whip':
      holder = whip;
      break;
    case 'celebrate':
      holder = celebrate;
      break;
    default:
      holder = '';
  }
  
  const [playing, toggle] = useAudio(holder);

  return (
    <div>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Button className="jftb" variant="contained" color="primary" onClick={toggle}> {playing ? `${name} ⏸️` : `${name} ▶️ `}</Button>
        </Grid>
      </Grid>
    </div>
  );
};
