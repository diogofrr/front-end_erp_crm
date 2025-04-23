import type {
  SidebarContextInitialState,
  SidebarContextActionsTypes,
} from '@/types/contexts/sidebar-context';

import actions from './actions';

const reducer = (
  state: SidebarContextInitialState,
  action: SidebarContextActionsTypes
) => {
  switch (action.type) {
    case actions.CHANGE_SIDEBAR:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
