'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProfileDropdown from '@/components/ProfileDropdown';

export default function Navbar({ isLoggedIn, onLogout }) {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Items', href: '/items' },
    ];

    if (isLoggedIn) {
        navLinks.push({ name: 'Add Item', href: '/add-item' });
    }

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-200">
                        TechStore
                    </Link>

                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-200 ${pathname === link.href
                                    ? 'text-blue-600'
                                    : 'text-gray-600 hover:text-blue-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        {isLoggedIn ? (
                            <ProfileDropdown onLogout={onLogout} />
                        ) : (
                            <Link
                                href="/login"
                                className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-200 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
                            >
                                Login
                            </Link>
                        )}
                        {!isLoggedIn && (
                             <Link
                                 href="/register"
                                 className="px-5 py-2.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-200"
                             >
                                 Register
                             </Link>
                        )}
                    </div>

                    {/* Mobile menu button (simplified) */}
                    <div className="md:hidden">
                        {/* Add mobile menu implementation if needed, skipping for brevity in v1 */}
                    </div>
                </div>
            </div>
        </nav>
    );
}
