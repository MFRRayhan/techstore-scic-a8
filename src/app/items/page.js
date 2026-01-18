import ItemCard from '@/components/ItemCard';
import { getBaseUrl } from '@/utils/api';

async function getItems() {
    try {
        const res = await fetch(`${getBaseUrl()}/api/items`, {
            cache: 'no-store' // Ensure fresh data
        });

        if (!res.ok) {
            throw new Error('Failed to fetch items');
        }

        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default async function ItemsPage() {
    const items = await getItems();

    return (
        <div className="bg-gray-50 py-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
                        Our Collection
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Explore our curated list of premium gadgets designed to elevate your lifestyle.
                    </p>
                </div>

                {items.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500">No items found. Please start the backend server.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((item) => (
                            <ItemCard key={item.id} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
