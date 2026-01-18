'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    // Hardcoded mock credentials
    if (email === 'admin@techstore.com' && password === 'password123') {
        const cookieStore = await cookies();
        // Set cookie for 1 day
        cookieStore.set('auth_token', 'mock_token_12345', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24
        });
        redirect('/items');
    }

    return { message: 'Invalid credentials. Try admin@techstore.com / password123' };
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('auth_token');
    redirect('/login');
}

export async function register(prevState, formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    if (!name || !email || !password) {
        return { message: 'All fields are required.' };
    }

    // Mock registration success
    const cookieStore = await cookies();
    cookieStore.set('auth_token', 'mock_token_register_123', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24
    });

    redirect('/items');
}
