import type { ReactNode } from 'react';
import type { User } from '@/types/auth/login/login';

interface AuthContextInitialState {
  user: User | null;
}

interface AuthContextActions {
  SAVE_USER_DATA: 'SAVE_USER_DATA';
}

type AuthContextActionsTypes = {
  type: AuthContextActions['SAVE_USER_DATA'];
  payload: User;
};

interface AuthContextType {
  state: AuthContextInitialState;
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
