import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/app/(protected)/dashboard/components/header';
import { useSession } from '@/hooks/auth/use-session';

describe('Header', () => {
  const mockedUseSession = useSession as jest.MockedFunction<typeof useSession>;

  it('renders the header component', () => {
    mockedUseSession.mockReturnValue({
      handleLogout: jest.fn(),
      session: {
        id: '1',
        email: 'test@example.com',
        name: 'Test User',
        permissions: [],
        roles: [],
      },
    });

    render(<Header />);
  });
});
