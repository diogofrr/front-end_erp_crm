import { ResponseData } from '@/types/globals';

enum EventStatus {
  PENDING,
  ACTIVE,
  CANCELLED,
  COMPLETED,
}

interface Event {
  id: string;
  name: string;
  status: EventStatus;
  description: string;
  date: string;
  location: string;
  price: number;
  totalTickets: number;
}

interface GetEventsResponse extends ResponseData {
  result: Event[];
}

export { Event, GetEventsResponse, EventStatus };
