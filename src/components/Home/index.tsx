import React, { useEffect } from 'react'
import { Typography, Paper } from '@material-ui/core'

import { useStoreState, useStoreActions } from '../../hooks'
import useStyles from './styles'
import ExpectationUI from '../ExpectationUI'
import { ExpectationType } from '../ExpectationUI/enums'

const Home: React.FC = () => {
  const results = useStoreState((state) => state.specResults.specResults)
  const getResults = useStoreActions((state) => state.specResults.getResults)

  const classes = useStyles()

  useEffect(() => {
    getResults();
  }, []); // eslint-disable-line

  let resultComponents = results.map((result) =>
    <Paper className={classes.paper} key={result.id}>
      <Typography variant="h4">
        {result.description}
      </Typography>
      <Typography>
        {'fullname: ' + result.fullName}
      </Typography>
      <ExpectationUI expectations={result.failedExpectations} type={ExpectationType.Failed}/>
      <ExpectationUI expectations={result.passedExpectations} type={ExpectationType.Passed}/>
      <ExpectationUI expectations={result.deprecationWarnings} type={ExpectationType.Warning}/>
      <Typography>
        {'pending reason: ' + result.pendingReason}
      </Typography>
      <Typography>
        {'status: ' + result.status}
      </Typography>
      <Typography>
        {'duration: ' + result.duration}
      </Typography>
    </Paper>
  )

  return <div> { resultComponents } </div>;
};

export default Home;
