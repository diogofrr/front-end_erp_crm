import type { ReactNode } from 'react';

interface SidebarContextInitialState {
  isOpen: boolean;
}

interface SidebarContextActions {
  CHANGE_SIDEBAR: 'CHANGE_SIDEBAR';
}

type SidebarContextActionsTypes = {
  type: typeof AuthContextActions.CHANGE_SIDEBAR;
  payload: boolean;
};

interface SidebarContextType {
  state: SidebarContextInitialState;
  changeSidebar: (state: boolean) => void;
}

interface SidebarProviderProps {
  children: ReactNode;
}

export {
  SidebarContextInitialState,
  SidebarContextActions,
  SidebarContextActionsTypes,
  SidebarContextType,
  SidebarProviderProps,
};
