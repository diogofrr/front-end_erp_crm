'use server';

import { getAuthToken } from '@/lib/session';
import { type GetEventsResponse } from '@/types/(protected)/dashboard/get-events';

export default async function getEvents(): Promise<GetEventsResponse> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/events`;
  const jwt = await getAuthToken();

  if (!jwt) {
    throw new Error('Token de autenticação não encontrado.');
  }

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
    redirect: 'follow',
    cache: 'no-cache',
  };

  const response = await fetch(url, requestOptions);
  const parsedData: GetEventsResponse = await response.json();

  if (response.status !== 201 && response.status !== 200) {
    throw new Error(
      parsedData.message ||
        'Houve uma instabilidade no servidor. Tente novamente mais tarde.'
    );
  }

  return parsedData;
}
