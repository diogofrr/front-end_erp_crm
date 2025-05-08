import { render, screen } from '@testing-library/react';
import EmptyEvents from '@/app/(protected)/dashboard/components/empty-events';

describe('EmptyEvents', () => {
  it('should render the empty events container', () => {
    render(<EmptyEvents />);
    expect(screen.getByTestId('empty-events-container')).toBeInTheDocument();
  });
});
