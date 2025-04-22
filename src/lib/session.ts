'use server';

import { cookies } from 'next/headers';
import { encryptToken, decryptToken } from './crypto';

import type { User } from '@/types/auth/login/login';

const COOKIE_AUTH_NAME = 'jwt';
const COOKIE_USER_DATA_NAME = 'userData';

export async function saveAuthToken(jwt: string) {
  const cookieStore = cookies();
  const encrypted = encryptToken(jwt);

  (await cookieStore).set(COOKIE_AUTH_NAME, encrypted, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24, // 1 dia
  });
}

export async function saveSession(data: User) {
  const cookieStore = cookies();

  (await cookieStore).set(COOKIE_USER_DATA_NAME, JSON.stringify(data), {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24, // 1 dia
  });
}

export async function getAuthToken(): Promise<string | null> {
  const cookieStore = cookies();
  const encrypted = (await cookieStore).get(COOKIE_AUTH_NAME)?.value;

  if (!encrypted) return null;

  try {
    return decryptToken(encrypted);
  } catch {
    return null;
  }
}

export async function getSession(): Promise<User | null> {
  const cookieStore = cookies();
  const strinfiedData = (await cookieStore).get(COOKIE_USER_DATA_NAME)?.value;

  if (!strinfiedData) return null;

  return JSON.parse(strinfiedData) as User;
}

export async function clearSession() {
  const cookieStore = cookies();

  Promise.all([
    (await cookieStore).delete(COOKIE_AUTH_NAME),
    (await cookieStore).delete(COOKIE_USER_DATA_NAME),
  ]);
}
