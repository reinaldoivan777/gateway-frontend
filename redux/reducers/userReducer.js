import { initialState } from '../initialState';

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        profile: action.payload.user,
        token: action.payload.token
      };
    default:
      return state;
  }
}
