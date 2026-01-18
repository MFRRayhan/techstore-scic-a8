'use client';

import { useActionState, useEffect, useState } from 'react';
import { addItem } from '@/actions/items';
import { redirect } from 'next/navigation';

const initialState = {
    message: '',
    success: false,
};

export default function AddItemPage() {
    const [state, formAction, isPending] = useActionState(addItem, initialState);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (state?.success) {
            setShowToast(true);
            const timer = setTimeout(() => {
                // Redirect after showing toast
                window.location.href = '/items';
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [state?.success]);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

            {/* Toast Notification */}
            {showToast && (
                <div className="fixed top-24 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-bounce">
                    Item added successfully! Redirecting...
                </div>
            )}

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Add New Item</h1>
                    <p className="mt-2 text-gray-600">Fill in the details to list a new product.</p>
                </div>

                <form action={formAction} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="e.g. Wireless Headphones"
                        />
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Price ($)
                        </label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.01"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="99.99"
                        />
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Image URL
                        </label>
                        <input
                            type="url"
                            name="image"
                            id="image"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows={4}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Describe the product features..."
                        />
                    </div>

                    {state?.message && !state?.success && (
                        <div className="text-red-500 text-sm font-medium">
                            Error: {state.message}
                        </div>
                    )}

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            disabled={isPending || state?.success}
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
                        >
                            {isPending ? 'Adding Item...' : 'Add Item'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
