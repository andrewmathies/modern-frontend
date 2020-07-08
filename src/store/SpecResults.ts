import { action, thunk } from 'easy-peasy';

import SpecResultsModel from '../interfaces/SpecResultsModel';

const SpecResults: SpecResultsModel = {
  specResults: [
    {
      id: 0,
      description: '',
      fullName: '',
      failedExpectations: [],
      passedExpectations: [],
      deprecationWarnings: [],
      pendingReason: '',
      status: '',
      duration: 0,
    }
  ],
  setResults: action((state, data) => {
    state.specResults = data
  }),
  getResults: thunk(async (state) => {
    //const response = await fetch('http://localhost:3005/api/players/3pqcgxg96mk6im6b7i')
    //const playerData = await response.json()
    const dummyData = [
      {
        id: 0,
        description: 'turn off bake',
        fullName: 'Check that heating elements aren\'t active after stop cook request is sent',
        failedExpectations: [],
        passedExpectations: [],
        deprecationWarnings: [],
        pendingReason: '',
        status: 'fail',
        duration: 3,
      },
      {
        id: 1,
        description: 'turn on bake',
        fullName: 'Check that the the correct cycle starts when bake 350 cook request is sent',
        failedExpectations: [],
        passedExpectations: [],
        deprecationWarnings: [],
        pendingReason: '',
        status: 'pass',
        duration: 10,
      }
    ]
    state.setResults(dummyData)
  })
}

export default SpecResults;
