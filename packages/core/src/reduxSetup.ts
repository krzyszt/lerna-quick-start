import { History } from 'history';

import configureStore from './store/configureStore';

const setupStore = (history: History) => {
    const store = configureStore({}, history);

    return store;
};

export default setupStore;
