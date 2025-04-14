'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

import { useFetchLogin } from './use-fetch-login';

export type LoginFormData = z.infer<typeof loginSchema>;

export const loginSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido' }),
  password: z.string().nonempty({ message: 'Senha obrigatória' }),
});

export function useLogin() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const fetchLogin = useFetchLogin();

  const handleChangePasswordVisibility = () => {
    setPasswordVisibility((prev) => !prev);
  };

  const handleSubmitLogin = (data: LoginFormData) => {
    fetchLogin.mutate(data, {
      onSuccess: () => {
        toast.success('Login realizado com sucesso!', {
          description: 'Seja bem-vindo!',
        });
      },
      onError: (error) => {
        toast.error('Erro ao realizar login', {
          description: error?.message || 'Tente novamente mais tarde.',
        });
      },
    });
  };

  return {
    passwordVisibility,
    handleChangePasswordVisibility,
    handleSubmitLogin,
    isPending: fetchLogin.isPending,
  };
}
