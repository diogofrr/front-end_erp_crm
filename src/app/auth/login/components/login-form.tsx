'use client';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  useLogin,
  LoginFormData,
  loginSchema,
} from '@/hooks/auth/login/use-login';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Eye, EyeOff } from 'lucide-react';

import '@/styles/auth/login/login-form/style.css';

const LoginForm = () => {
  const {
    passwordVisibility,
    handleChangePasswordVisibility,
    handleSubmitLogin,
    isPending,
  } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div className="login-form__container">
      <div className="login-form__box">
        <div className="login-form__header">
          <h2 className="login-form__title">Realizar Login</h2>
          <p className="login-form__subtitle">
            Insira seus dados para acessar sua conta.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleSubmitLogin)}
          className="login-form__form"
        >
          <div>
            <Input
              {...register('email')}
              className={`login-form__input ${errors.email && 'login-form__input--error'}`}
              placeholder="Insira seu e-mail"
              type="email"
            />
            {errors.email && (
              <p className="login-form__error">{errors.email.message}</p>
            )}
          </div>

          <div>
            <div className="login-form__password">
              <Input
                {...register('password')}
                className={`login-form__input pr-10 ${errors.password && 'login-form__input--error'}`}
                placeholder="Insira sua senha"
                type={passwordVisibility ? 'text' : 'password'}
                autoComplete="current-password"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="login-form__toggle"
                onClick={handleChangePasswordVisibility}
              >
                {passwordVisibility ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </Button>
            </div>
            {errors.password && (
              <p className="login-form__error">{errors.password.message}</p>
            )}
          </div>

          <div className="login-form__forgot">
            <Link href="#" className="hover:underline">
              Esqueceu sua senha?
            </Link>
          </div>

          <Button
            type="submit"
            className="login-form__submit"
            disabled={isPending}
          >
            {isPending ? 'Carregando...' : 'Entrar'}
          </Button>

          <div className="login-form__register">
            Não tem uma conta?{' '}
            <Link href="#" className="font-medium hover:underline">
              Registre-se
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
