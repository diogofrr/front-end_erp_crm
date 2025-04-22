'use client';

import { useEffect } from 'react';
import { useAuthContext } from '@/hooks/auth/use-auth-context';

import router from 'next/router';
import { getSession } from '@/lib/session';

import SidebarProvider from '@/contexts/sidebar-context/sidebar-provider';

import type { ProviderProps } from '@/types/root';

export default function Provider({ children }: ProviderProps) {
  const { saveUserData, state } = useAuthContext();

  useEffect(() => {
    console.log('init');
    const init = async () => {
      const session = await getSession();
      if (session) {
        saveUserData(session);
      } else {
        router.push('/login');
      }
    };

    if (!state.user) {
      init();
    }
  }, [saveUserData, state.user]);

  return <SidebarProvider>{children}</SidebarProvider>;
}
