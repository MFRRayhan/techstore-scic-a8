export default function ProductShowcase() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1000"
                            alt="Headphones"
                            className="rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
                        />
                    </div>
                    <div className="md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Immersive Audio Experience</h2>
                        <p className="text-lg text-gray-600">
                            Dive into sound like never before. Our premium collection of headphones offers active noise cancellation, transparency modes, and studio-quality sound profiles.
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                Active Noise Cancellation
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                30+ Hours Battery Life
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                Spatial Audio Support
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
