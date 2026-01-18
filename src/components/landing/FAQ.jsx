export default function FAQ() {
    return (
        <div className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-8 max-w-3xl mx-auto">
                    <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-medium text-gray-900">What is the return policy?</h3>
                        <p className="mt-2 text-gray-500">We offer a 30-day money-back guarantee on all products. If you are not satisfied, return it for a full refund.</p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-medium text-gray-900">Does it come with a warranty?</h3>
                        <p className="mt-2 text-gray-500">Yes, all our electronics come with a standard 1-year manufacturer warranty.</p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-medium text-gray-900">How long does shipping take?</h3>
                        <p className="mt-2 text-gray-500">Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">Do you offer international shipping?</h3>
                        <p className="mt-2 text-gray-500">Currently, we ship to select countries. Please check our shipping policy page for the full list.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
