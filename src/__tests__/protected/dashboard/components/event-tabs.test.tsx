import { render, screen } from '@testing-library/react';
import EventTabs from '@/app/(protected)/dashboard/components/event-tabs';
import { useEvents } from '@/hooks/protected/dashboard/use-events';

jest.mock('@/hooks/protected/dashboard/use-events');

describe('EventTabs', () => {
  const mockedUseEvents = useEvents as jest.MockedFunction<typeof useEvents>;

  it('should render the loading skeleton when loading', () => {
    mockedUseEvents.mockReturnValue({
      isLoading: true,
      events: [],
      ongoingBadges: [],
      finishedBadges: [],
      error: null,
      refetch: jest.fn(),
    });

    render(<EventTabs />);

    expect(screen.getByTestId('event-tabs-skeleton')).toBeInTheDocument();
  });

  it('should render the events when not loading', async () => {
    mockedUseEvents.mockReturnValue({
      isLoading: false,
      events: [
        {
          id: '1',
          name: 'Evento teste',
          date: '24 de junho de 2025',
          status: {
            text: 'Em breve',
            color: 'badge-status-incoming',
          },
          price: 'R$ 50,00',
          totalTickets: 100,
        },
      ],
      ongoingBadges: ['badge-status-in-progress', 'badge-status-incoming'],
      finishedBadges: ['badge-status-finished', 'badge-status-canceled'],
      refetch: jest.fn(),
      error: null,
    });

    render(<EventTabs />);
    expect(screen.getByText('Evento teste')).toBeInTheDocument();
  });

  it('should render the empty events when there are no events', () => {
    mockedUseEvents.mockReturnValue({
      isLoading: false,
      events: [],
      ongoingBadges: ['badge-status-in-progress', 'badge-status-incoming'],
      finishedBadges: ['badge-status-finished', 'badge-status-canceled'],
      refetch: jest.fn(),
      error: null,
    });

    render(<EventTabs />);
    expect(screen.getByTestId('empty-events-container')).toBeInTheDocument();
  });
});
