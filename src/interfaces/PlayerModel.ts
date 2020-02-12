import { Action, Thunk } from 'easy-peasy'

import Player from './Player'

export default interface PlayerModel {
  player: Player
  setPlayer: Action<PlayerModel, Player>
  getPlayer: Thunk<PlayerModel>
}
