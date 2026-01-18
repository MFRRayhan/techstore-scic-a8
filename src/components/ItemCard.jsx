import Link from 'next/link';
import Image from 'next/image';

export default function ItemCard({ item }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group">
            <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900 shadow-sm">
                    ${item.price?.toFixed(2)}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {item.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
                    {item.description}
                </p>
                <Link
                    href={`/items/${item.id}`}
                    className="mt-auto w-full block text-center bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-900 font-medium py-3 rounded-xl transition-all duration-200"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}
