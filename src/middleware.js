import { NextResponse } from 'next/server';

export function middleware(request) {
    const authToken = request.cookies.get('auth_token');
    const { pathname } = request.nextUrl;

    // Protect /add-item route
    if (pathname.startsWith('/add-item')) {
        if (!authToken) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // Redirect to items if already logged in and trying to access login
    if (pathname.startsWith('/login') && authToken) {
        return NextResponse.redirect(new URL('/items', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/add-item/:path*', '/login'],
};
