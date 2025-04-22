import type {
  AuthContextActionsTypes,
  AuthContextInitialState,
} from '@/types/contexts/auth-context';

import actions from './actions';

const reducer = (
  state: AuthContextInitialState,
  action: AuthContextActionsTypes
) => {
  switch (action.type) {
    case actions.SAVE_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
