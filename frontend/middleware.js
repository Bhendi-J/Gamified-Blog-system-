import { NextResponse } from 'next/server';

// This is the middleware function that Next.js expects
export function middleware(request) {
  // Get token from cookies
  const token = request.cookies.get('token')?.value;
  
  // Define protected paths that require authentication
  const protectedPaths = [
    '/profile',
    '/settings',
    '/dashboard',
    '/leaderboard',
    '/notifications',
  ];
  
  // Check if current path is protected
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );
  
  // Redirect to login if accessing protected route without token
  if (isProtectedPath && !token) {
    const url = new URL('/login', request.url);
    url.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

// Define which routes this middleware should run on
export const config = {
  matcher: [
    '/profile/:path*',
    '/settings/:path*',
    '/dashboard/:path*',
    '/leaderboard/:path*',
    '/notifications/:path*',
  ],
};