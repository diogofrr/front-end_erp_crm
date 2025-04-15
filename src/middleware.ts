import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOKIE_NAME = 'jwt';

export function middleware(request: NextRequest) {
  const cookieStore = request.cookies;
  const jwtCookie = cookieStore.get(COOKIE_NAME)?.value;

  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/public') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/android-chrome') ||
    pathname.startsWith('/apple-touch-icon') ||
    pathname.startsWith('/site.webmanifest')
  ) {
    return NextResponse.next();
  }

  if (pathname === '/login' && jwtCookie) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (pathname.startsWith('/(protected)') || pathname.includes('/dashboard')) {
    if (!jwtCookie) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/|public/|.*\\..*|favicon.ico|android-chrome-.*|apple-touch-icon.*|site.webmanifest).*)',
    '/(protected)/:path*',
    '/dashboard/:path*',
    '/login',
  ],
};
