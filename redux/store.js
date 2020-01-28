import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { createLogger } from 'redux-logger';

const dev = process.env.NODE_ENV !== 'production';

export const initStore = initialState => {
  const middlewares = dev ? [thunk, createLogger()] : [];
  return createStore(reducer, initialState, compose(applyMiddleware(...middlewares)));
};
