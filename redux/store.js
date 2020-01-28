import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';

const dev = process.env.ENV !== 'production';

export const initStore = initialState => {
  let store;
  const isClient = typeof window !== 'undefined';
  const middlewares = dev ? [thunk, createLogger()] : [];
  if (isClient) {
    const storage = require('redux-persist/lib/storage').default;
    const persistConfig = {
      key: 'root',
      storage
    };
    store = createStore(persistReducer(persistConfig, reducer), initialState, compose(applyMiddleware(...middlewares)));
    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(reducer, initialState, compose(applyMiddleware(...middlewares)));
  }
  return store;
};
