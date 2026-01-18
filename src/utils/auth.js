import { cookies } from 'next/headers';

// Constants
export const AUTH_COOKIE_NAME = 'auth_token';

// Server-side auth check
export async function isAuthenticated() {
    const cookieStore = await cookies();
    return cookieStore.has(AUTH_COOKIE_NAME);
}

// Client-side/Server Action login helper (simplified for mock)
// In a real app, this would be an API call or Server Action
export async function setAuthCookie() {
    // This is handled by Server Actions or Route Handlers usually
    // For this mock, we will use a Server Action in the login component
}
