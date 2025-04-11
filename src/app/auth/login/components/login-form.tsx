'use client';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import {
  useLogin,
  LoginFormData,
  loginSchema,
} from '@/hooks/auth/login/useLogin';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Eye, EyeOff } from 'lucide-react';

const LoginForm = () => {
  const {
    passwordVisibility,
    handleChangePasswordVisibility,
    handleSubmitLogin,
  } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
      <div className="bg-white rounded-3xl shadow-xl px-8 py-16 w-full max-w-md mx-4 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Realizar Login</h2>
          <p className="text-gray-600">
            Insira seus dados para acessar sua conta.
          </p>
        </div>

        <form onSubmit={handleSubmit(handleSubmitLogin)} className="space-y-4">
          <div>
            <Input
              {...register('email')}
              className="rounded-full h-12 border-gray-200"
              placeholder="Insira seu e-mail"
              type="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <Input
              {...register('password')}
              className="rounded-full h-12 border-gray-200 pr-10"
              placeholder="Insira sua senha"
              type={passwordVisibility ? 'text' : 'password'}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500"
              onClick={handleChangePasswordVisibility}
            >
              {passwordVisibility ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </Button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="text-center">
            <Link href="#" className="text-sm text-gray-600 hover:underline">
              Esqueceu sua senha?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full h-12 rounded-full bg-[#B22222] hover:bg-[#8B0000] text-white font-medium"
          >
            Entrar
          </Button>

          <div className="text-center text-sm text-gray-600 mt-12">
            Não tem uma conta?{' '}
            <Link
              href="#"
              className="text-black font-medium ml-1 hover:underline"
            >
              Registre-se
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
