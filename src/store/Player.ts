import { action, thunk } from 'easy-peasy';

import PlayerModel from '../interfaces/PlayerModel';

const Player: PlayerModel = {
  player: {
    id: '',
    name: '',
    tag: ''
  },
  setPlayer: action((state, data) => {
    state.player = data
  }),
  getPlayer: thunk(async (state) => {
    const response = await fetch('http://localhost:3005/api/players/3pqcgxg96mk6im6b7i')
    const playerData = await response.json()
    state.setPlayer(playerData)
  })
}

export default Player;
