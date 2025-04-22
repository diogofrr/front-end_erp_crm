'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { ProviderProps } from '@/types/root';
import AuthProvider from '@/contexts/auth-context/auth-provider';

export default function Provider({ children }: ProviderProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}
