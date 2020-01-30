import { combineReducers } from 'redux';
import userReducer from './userReducer';
import sidebarReducer from './sidebarReducer';

export default combineReducers({
  user: userReducer,
  sidebar: sidebarReducer
});
