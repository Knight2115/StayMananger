// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const empleado = req.cookies.get('empleadoKey')?.value;

  if (pathname.startsWith('/dashboard') && !empleado) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (pathname === '/login' && empleado) {
    return NextResponse.redirect(new URL('/dashboard/reservas', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
