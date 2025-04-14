import { useMutation } from '@tanstack/react-query';

import authUser from '@/services/auth/login/auth-user';

export const useFetchLogin = () => {
  return useMutation({
    mutationFn: authUser,
  });
};
