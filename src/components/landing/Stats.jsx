export default function Stats() {
    const stats = [
        { id: 1, name: 'Happy Customers', value: '10k+' },
        { id: 2, name: 'Products Sold', value: '50k+' },
        { id: 3, name: 'Brands', value: '100+' },
        { id: 4, name: 'Support', value: '24/7' },
    ];

    return (
        <div className="bg-blue-600 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col p-4">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-100">{stat.name}</dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">{stat.value}</dd>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
