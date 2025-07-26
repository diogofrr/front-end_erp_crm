'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff } from 'lucide-react';
import { useLogin } from '@/hooks/auth/login/use-login';
import './style.css';

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    await login({ email, password });
  };

  return (
    <div className="login-form__container">
      <div className="login-form__box">
        <div className="login-form__header">
          <h1 className="login-form__title">Bem-vindo de volta!</h1>
          <p className="login-form__subtitle">Faça login para acessar sua conta</p>
        </div>

        {error && (
          <Alert className="login-header__alert" variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="login-form__form">
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="login-form__input"
            />
          </div>

          <div className="login-form__password">
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Senha"
              required
              className="login-form__input"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="login-form__toggle"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <div className="login-form__forgot">
            <a href="#" className="text-[#B22222] hover:underline">
              Esqueceu sua senha?
            </a>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="login-form__submit w-full"
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>

        <div className="login-form__register">
          <p>
            Não tem uma conta?{' '}
            <a href="#" className="text-[#B22222] hover:underline">
              Registre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 