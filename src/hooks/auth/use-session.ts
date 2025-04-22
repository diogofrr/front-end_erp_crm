'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from './use-auth-context';

import { clearSession } from '@/lib/session';

export function useSession() {
  const router = useRouter();
  const { state } = useAuthContext();

  const handleLogout = useCallback(async () => {
    await clearSession();
    router.push('/login');
  }, [router]);

  return {
    session: state.user,
    handleLogout,
  };
}
