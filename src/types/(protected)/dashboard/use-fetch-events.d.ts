interface TransformedEvent {
  id: string;
  name: string;
  status: { text: string; color: string };
  description: string;
  date: string;
  location: string;
  price: string;
  totalTickets: number;
}

export { TransformedEvent };
