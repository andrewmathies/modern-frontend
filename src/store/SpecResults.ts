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
    // TODO: replace with path for real backend
    const response = await fetch('http://localhost:3005/api/players/3pqcgxg96mk6im6b7i')
    const resultData = await response.json()
    state.setResults(resultData)
  })
}

export default SpecResults;

/*
const dummyData = [
      {
        id: 0,
        description: 'turn off bake',
        fullName: 'Check that heating elements aren\'t active after stop cook request is sent',
        failedExpectations: [
          {
            matcherName: 'cookmode',
            message: 'this is an example message',
            stack: '_\n_\n_',
            passed: false,
            expected: 'cookmode.none',
            actual: 'cookmode.bake'
          }
        ],
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
        passedExpectations: [
          {
            matcherName: 'cookmode',
            message: 'way to go!',
            stack: '------',
            passed: true,
            expected: 'cookmode.bake',
            actual: 'cookmode.bake'
          }
        ],
        deprecationWarnings: [
          {
            matcherName: 'cookmode',
            message: 'deprecation message',
            stack: '',
            passed: true,
            expected: 'cookmode.oldbake',
            actual: 'cookmode.newbake'
          }
        ],
        pendingReason: '',
        status: 'pass',
        duration: 10,
      }
    ]
*/