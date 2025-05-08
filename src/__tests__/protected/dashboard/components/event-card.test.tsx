import { render, screen } from '@testing-library/react';
import EventCard from '@/app/(protected)/dashboard/components/event-card';

describe('EventCard', () => {
  const mockEventProps = {
    id: '1',
    name: 'Evento teste',
    date: '24 de junho de 2025',
    status: {
      text: 'Em breve',
      color: 'bg-blue-500',
    },
    totalTickets: 100,
    price: 'R$ 50,00',
  };

  it('renders event card with correct information', () => {
    render(<EventCard {...mockEventProps} />);

    expect(screen.getByText('Evento teste')).toBeInTheDocument();
    expect(screen.getByText('24 de junho de 2025')).toBeInTheDocument();
    expect(screen.getByText('Em breve')).toBeInTheDocument();
    expect(screen.getByText('Ingressos vendidos:')).toBeInTheDocument();
    expect(screen.getByText('100 de 100')).toBeInTheDocument();
    expect(screen.getByText('Preço do ingresso:')).toBeInTheDocument();
    expect(screen.getByText('R$ 50,00')).toBeInTheDocument();
  });

  it('renders status badge with correct color class', () => {
    render(<EventCard {...mockEventProps} />);
    const badge = screen.getByText('Em breve');
    expect(badge).toHaveClass('bg-blue-500');
  });

  it('renders view details button', () => {
    render(<EventCard {...mockEventProps} />);
    const button = screen.getByText('Ver detalhes');
    expect(button).toBeInTheDocument();
  });
});
