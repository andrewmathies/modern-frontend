import React, { useEffect } from 'react'
import { Typography, Paper, CardMedia } from '@material-ui/core'

import { useStoreState, useStoreActions } from '../../hooks'

import useStyles from './styles'

const Home: React.FC = () => {
  const results = useStoreState((state) => state.specResults.specResults)
  const getResults = useStoreActions((state) => state.specResults.getResults)

  const classes = useStyles()

  useEffect(() => {
    getResults();
  }, []); // eslint-disable-line

  let resultComponents = results.map((result) =>
    <Paper className={classes.paper}>
      <Typography variant="h3">
        {'id: ' + result.id }
      </Typography>
      <Typography>
        {'name: ' + result.fullName}
      </Typography>
    </Paper>
  )

  return <div> { resultComponents } </div>;
};

export default Home;
