import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

const getStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index.js').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default getStore;
