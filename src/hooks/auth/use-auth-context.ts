'use client';

import { useContext } from 'react';

import AuthContext from '@/contexts/auth-context/auth-context';

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return context;
};

export { useAuthContext };
