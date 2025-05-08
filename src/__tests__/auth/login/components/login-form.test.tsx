import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '@/app/(auth)/login/components/login-form';
import { useLogin } from '@/hooks/auth/login/use-login';

jest.mock('@/hooks/auth/login/use-login', () => ({
  useLogin: jest.fn(),
  loginSchema: {
    email: jest.fn(),
    password: jest.fn(),
  },
}));

describe('LoginForm', () => {
  const mockHandleSubmitLogin = jest.fn();
  const mockHandleChangePasswordVisibility = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useLogin as jest.Mock).mockReturnValue({
      passwordVisibility: false,
      handleChangePasswordVisibility: mockHandleChangePasswordVisibility,
      handleSubmitLogin: mockHandleSubmitLogin,
      isPending: false,
    });
  });

  it('renders the login form', () => {
    render(<LoginForm />);

    expect(screen.getByText('Realizar Login')).toBeInTheDocument();
    expect(
      screen.getByText('Insira seus dados para acessar sua conta.')
    ).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('passsword-input')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('should toggle password visibility', async () => {
    (useLogin as jest.Mock).mockReturnValue({
      passwordVisibility: false,
      handleChangePasswordVisibility: mockHandleChangePasswordVisibility,
      handleSubmitLogin: mockHandleSubmitLogin,
      isPending: false,
    });

    render(<LoginForm />);

    const toggleButton = screen.getByRole('button', { name: '' });
    await userEvent.click(toggleButton);

    expect(mockHandleChangePasswordVisibility).toHaveBeenCalledTimes(1);
  });

  it('display password when passwordVisibility is true', () => {
    (useLogin as jest.Mock).mockReturnValue({
      passwordVisibility: true,
      handleChangePasswordVisibility: mockHandleChangePasswordVisibility,
      handleSubmitLogin: mockHandleSubmitLogin,
      isPending: false,
    });

    render(<LoginForm />);

    const passwordInput = screen.getByTestId('passsword-input');
    expect(passwordInput).toHaveAttribute('type', 'text');
  });

  it('hide password when passwordVisibility is false', () => {
    (useLogin as jest.Mock).mockReturnValue({
      passwordVisibility: false,
      handleChangePasswordVisibility: mockHandleChangePasswordVisibility,
      handleSubmitLogin: mockHandleSubmitLogin,
      isPending: false,
    });

    render(<LoginForm />);

    const passwordInput = screen.getByTestId('passsword-input');
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('should disable submit button when isPending is true', () => {
    (useLogin as jest.Mock).mockReturnValue({
      passwordVisibility: false,
      handleChangePasswordVisibility: mockHandleChangePasswordVisibility,
      handleSubmitLogin: mockHandleSubmitLogin,
      isPending: true,
    });

    render(<LoginForm />);

    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeDisabled();
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
  });

  it('should display error when email is invalid', async () => {
    const mockUseForm = {
      register: jest.fn().mockReturnValue({}),
      handleSubmit: jest.fn((cb) => cb),
      formState: {
        errors: {
          email: {
            message: 'Email inválido',
          },
        },
      },
    };

    jest.mock('react-hook-form', () => ({
      useForm: () => mockUseForm,
    }));

    render(<LoginForm />);

    const emailInput = screen.getByTestId('email-input');
    await userEvent.type(emailInput, 'invalid-email');

    expect(screen.getByTestId('email-input')).toBeInTheDocument();
  });

  it('should display error when password is invalid', async () => {
    const mockUseForm = {
      register: jest.fn().mockReturnValue({}),
      handleSubmit: jest.fn((cb) => cb),
      formState: {
        errors: {
          password: {
            message: 'Senha é obrigatória',
          },
        },
      },
    };

    jest.mock('react-hook-form', () => ({
      useForm: () => mockUseForm,
    }));

    render(<LoginForm />);

    const passwordInput = screen.getByTestId('passsword-input');
    await userEvent.type(passwordInput, 'teste');

    expect(screen.getByTestId('passsword-input')).toBeInTheDocument();
  });
});
