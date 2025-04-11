import { z } from 'zod';

import { useState } from 'react';

export type LoginFormData = z.infer<typeof loginSchema>;

export const loginSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido' }),
  password: z.string().min(8, { message: 'Mínimo de 8 caracteres' }),
});

export function useLogin() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleChangePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleSubmitLogin = (data: LoginFormData) => {
    console.log('Login Data:', data);
    // aqui você pode chamar sua função de autenticação
  };

  return {
    passwordVisibility,
    handleChangePasswordVisibility,
    handleSubmitLogin,
  };
}
