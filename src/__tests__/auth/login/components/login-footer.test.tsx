import { render, screen } from '@testing-library/react';
import LoginFooter from '@/app/(auth)/login/components/login-footer';

describe('LoginFooter', () => {
  it('renders the login footer', () => {
    render(<LoginFooter />);

    const githubLink = screen.getByText(/diogofrr/i);
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/diogofrr');
  });
});
