import { createStore } from 'easy-peasy';

import Store from '../interfaces/Store';
import SpecResults from './SpecResults';

const store: Store = {
  specResults: SpecResults,
};

export default createStore<Store>(store);
