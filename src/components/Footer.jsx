import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            TechStore
                        </Link>
                        <p className="mt-4 text-sm text-gray-500">
                            Premium gadgets for the modern professional. Elevate your workflow with our curated selection.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Shop</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link href="/items" className="text-base text-gray-500 hover:text-gray-900">All Items</Link></li>
                            <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">New Arrivals</Link></li>
                            <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Featured</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Contact</Link></li>
                            <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">FAQ</Link></li>
                            <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Returns</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Stay Connected</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Twitter</a></li>
                            <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Instagram</a></li>
                            <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-100 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} TechStore. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
