import { initialState } from '../initialState';

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        profile: action.payload
      };
    default:
      return state;
  }
}
