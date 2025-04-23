interface EventCardProps {
  id: string;
  name: string;
  date: string;
  status: {
    text: string;
    color: string;
  };
  price: string;
  totalTickets: number;
}

export { EventCardProps };
