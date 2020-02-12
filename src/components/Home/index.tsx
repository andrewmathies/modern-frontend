import React, { useEffect } from 'react'
import { Typography, Paper } from '@material-ui/core'

import { useStoreState, useStoreActions } from '../../hooks'
import useStyles from './styles'

const Home: React.FC = () => {
  const player = useStoreState((state) => state.curPlayer.player)
  const getPlayer = useStoreActions((state) => state.curPlayer.getPlayer)
  const classes = useStyles()

  useEffect(() => {
    getPlayer();
  }, []); // eslint-disable-line
  return (
    <Paper elevation={0} className={classes.paper}>
      <Typography variant="h3">
        {player.tag}
      </Typography>
      <Typography>
        {'Name: ' + player.name}
      </Typography>
      <Typography>
        {'Twitch: ' + player.twitch}
      </Typography>
    </Paper>
  );
};

export default Home;
