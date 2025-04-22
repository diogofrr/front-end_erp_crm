'use client';

import { createContext } from 'react';

import type { AuthContextType } from '@/types/contexts/auth-context';

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
