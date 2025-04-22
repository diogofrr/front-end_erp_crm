'use client';

import { useReducer } from 'react';

import type { User } from '@/types/auth/login/login';
import type { AuthProviderProps } from '@/types/contexts/auth-context';

import AuthContext from './auth-context';
import actions from './actions';
import reducer from './reducer';
import initialState from './data';

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const saveUserData = (user: User) => {
    dispatch({
      type: actions.SAVE_USER_DATA,
      payload: user,
    });
  };

  return (
    <AuthContext.Provider value={{ state, saveUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
