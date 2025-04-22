'use server';

import { type ErrorData } from '@/types/globals';
import { type LoginArgs, type LoginResponse } from '@/types/auth/login/login';

import { saveAuthToken, saveSession } from '@/lib/session';

type Response = LoginResponse | ErrorData;

export default async function authUser(
  loginArgs: LoginArgs
): Promise<Response> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginArgs),
    redirect: 'follow',
    cache: 'no-cache',
  };

  const response = await fetch(url, requestOptions);
  const parsedData: LoginResponse = await response.json();

  if (response.status !== 201 && response.status !== 200) {
    throw new Error(
      parsedData.message ||
        'Houve uma instabilidade no servidor. Tente novamente mais tarde.'
    );
  }

  await saveAuthToken(parsedData.result.access_token);
  await saveSession(parsedData.result.user);

  return parsedData;
}
