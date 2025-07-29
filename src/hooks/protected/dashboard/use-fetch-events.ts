'use client';

import { useQuery } from '@tanstack/react-query';

import getEvents from '@/services/protected/dashboard/get-events';

import { type EventStatus } from '@/types/protected/dashboard/get-events';
import { type TransformedEvent } from '@/types/protected/dashboard/use-fetch-events';

const getStatusText = (status: EventStatus) => {
  switch (status) {
    case 0:
      return { text: 'Em breve', color: 'badge-status-incoming' };
    case 1:
      return { text: 'Em andamento', color: 'badge-status-in-progress' };
    case 2:
      return { text: 'Cancelado', color: 'badge-status-canceled' };
    case 3:
      return { text: 'Finalizado', color: 'badge-status-finished' };
    default:
      return { text: 'Em breve', color: 'badge-status-incoming' };
  }
};

export const useFetchEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
    select: (data) => {
      if (!data.result) return [] as TransformedEvent[];

      return data.result.data.map((event) => ({
        id: event.id,
        name: event.name,
        status: getStatusText(event.status),
        date: new Date(event.date).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
          formatMatcher: 'basic',
        }),
        price: event.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        totalTickets: event.totalTickets,
      }));
    },
  });
};
