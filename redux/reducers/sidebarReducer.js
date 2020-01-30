import { initialState } from '../initialState';

export default function(state = initialState, action) {
  switch (action.type) {
    case 'MINI_SIDEBAR':
      return {
        miniSidebar: action.payload
      };
    default:
      return state;
  }
}
