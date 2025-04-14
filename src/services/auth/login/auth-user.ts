'use server';

import { type ErrorData } from '@/types/globals';
import { type LoginArgs, type LoginResponse } from '@/types/auth/login/login';

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
  const parsedData: Response = await response.json();

  if ('statusCode' in parsedData) {
    throw new Error(parsedData.message);
  }

  return parsedData;
}
