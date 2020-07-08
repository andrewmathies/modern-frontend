import { Action, Thunk } from 'easy-peasy'

import SpecResult from './SpecResult'

export default interface SpecResultModel {
  specResults: Array<SpecResult>
  setResults: Action<SpecResultModel, Array<SpecResult>>
  getResults: Thunk<SpecResultModel>
}
