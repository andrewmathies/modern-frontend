import { createStore } from 'easy-peasy';

import Store from '../interfaces/Store';
import Player from './Player';

const store: Store = {
  curPlayer: Player,
};

export default createStore<Store>(store);
