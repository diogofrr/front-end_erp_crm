import type { ReactNode } from 'react';

interface AuthContextInitialState {
  user: User | null;
}

interface AuthContextActions {
  SAVE_USER_DATA: 'SAVE_USER_DATA';
}

type AuthContextActionsTypes = {
  type: typeof AuthContextActions.SAVE_USER_DATA;
  payload: User;
};

interface AuthContextType {
  state: AuthContextInitialData;
  saveUserData: (user: User) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export {
  AuthContextInitialState,
  AuthContextActions,
  AuthContextActionsTypes,
  AuthContextType,
  AuthProviderProps,
};
