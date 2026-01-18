export default function Testimonials() {
    const testimonials = [
        {
            content: "The best tech store I've ever used. The delivery was super fast and the product quality is top notch!",
            author: "Sarah Johnson",
            role: "Software Engineer",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
        },
        {
            content: "Customer service is unmatched. They helped me pick the perfect laptop for my graphic design work.",
            author: "Michael Chen",
            role: "Designer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
        },
        {
            content: "Love the curated selection. It saves me so much time filtering through junk products elsewhere.",
            author: "Emily Davis",
            role: "Product Manager",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
                    Trusted by Professionals
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <img className="h-12 w-12 rounded-full object-cover" src={t.image} alt={t.author} />
                                <div className="ml-4">
                                    <div className="text-lg font-bold text-gray-900">{t.author}</div>
                                    <div className="text-blue-600 text-sm">{t.role}</div>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">"{t.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
