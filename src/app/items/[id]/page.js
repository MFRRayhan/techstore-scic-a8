import { getItemById } from '@/lib/items';
import Link from 'next/link';

async function getItem(id) {
    try {
        const item = getItemById(id);
        // Simulate async behavior if needed, or just return directly.
        // Since getItemById is synchronous in lib/items.js, we can just return it.
        // However, we'll keep the function signature async-like to match the original usage if desired,
        // or simplify it. Here we just return the result.
        return item || null;
    } catch (e) {
        return null;
    }
}

export default async function ItemDetailsPage({ params }) {
    // Next.js 15 requires awaiting params
    const { id } = await params;
    const item = await getItem(id);

    if (!item) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Item Not Found</h1>
                    <Link href="/items" className="text-blue-600 hover:text-blue-800 font-medium">
                        &larr; Back to Items
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link href="/items" className="text-gray-500 hover:text-blue-600 font-medium flex items-center transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Collection
                    </Link>
                </div>

                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 bg-gray-100 relative h-96 md:h-auto">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <div className="uppercase tracking-wide text-sm text-blue-600 font-bold mb-2">Detailed Specification</div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">{item.name}</h1>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {item.description}
                            </p>

                            <div className="flex items-center justify-between mb-10 pt-8 border-t border-gray-100">
                                <div>
                                    <span className="block text-gray-500 text-sm">Price</span>
                                    <span className="text-4xl font-bold text-gray-900">${item.price?.toFixed(2)}</span>
                                </div>
                                <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-200">
                                    Add to Cart
                                </button>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-6">
                                <h3 className="font-semibold text-blue-900 mb-2">Why this product?</h3>
                                <ul className="space-y-2 text-blue-800 text-sm">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        Premium Build Quality
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        Official Warranty Included
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
