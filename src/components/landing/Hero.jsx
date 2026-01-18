import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-32 space-y-24">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center sm:text-left sm:flex-row sm:justify-between sm:items-center">
                <div className="sm:w-1/2 space-y-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Next Gen</span>{' '}
                        <span className="block text-blue-600 xl:inline">Technology</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl sm:mx-0">
                        Discover the future of electronics. From noise-cancelling headphones to high-performance workstations, we have the gear to power your life.
                    </p>
                    <div className="mt-10 sm:flex sm:justify-start">
                        <div className="rounded-md shadow">
                            <Link href="/items" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg transition-all hover:scale-105">
                                Shop Now
                            </Link>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <Link href="#features" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg transition-all hover:scale-105">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-12 sm:mt-0 sm:w-1/2 relative">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <img
                        src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1000"
                        alt="Tech Setup"
                        className="relative rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500"
                    />
                </div>
            </div>
        </section>
    );
}
