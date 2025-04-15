'use client';

import { z } from 'zod';

import { toast } from 'sonner';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFetchLogin } from './use-fetch-login';

export type LoginFormData = z.infer<typeof loginSchema>;

export const loginSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido' }),
  password: z
    .string()
    .min(8, { message: 'Senha deve ter no mínimo 8 caracteres' })
    .nonempty({ message: 'Senha obrigatória' }),
});

export function useLogin() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const fetchLogin = useFetchLogin();
  const router = useRouter();

  const handleChangePasswordVisibility = () => {
    setPasswordVisibility((prev) => !prev);
  };

  const handleSubmitLogin = async (data: LoginFormData) => {
    fetchLogin.mutate(data, {
      onSuccess: async () => {
        toast.success('Login realizado com sucesso!', {
          description: 'Seja bem-vindo!',
        });

        router.push('/dashboard');
      },
      onError: (error) => {
        toast.error('Erro ao realizar login', {
          description: error.message,
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
