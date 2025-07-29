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

interface Meta {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  firstPage: number;
  firstPageUrl: string;
  lastPageUrl: string;
  nextPageUrl: string;
  previousPageUrl: string;
}

interface GetEventsResponse extends ResponseData {
  result: {
    data: Event[];
    meta: Meta;
  };
}

export { Event, EventStatus, GetEventsResponse };
