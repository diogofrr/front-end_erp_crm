'use server';

import { cookies } from 'next/headers';
import { encryptToken, decryptToken } from './crypto';

const COOKIE_NAME = 'jwt';

export async function saveSession(jwt: string) {
  const cookieStore = cookies();
  const encrypted = encryptToken(jwt);

  (await cookieStore).set(COOKIE_NAME, encrypted, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 dias
  });
}

export async function getSession(): Promise<string | null> {
  const cookieStore = cookies();
  const encrypted = (await cookieStore).get(COOKIE_NAME)?.value;

  if (!encrypted) return null;

  try {
    return decryptToken(encrypted);
  } catch {
    return null;
  }
}

export async function clearSession() {
  const cookieStore = cookies();
  (await cookieStore).delete(COOKIE_NAME);
}
