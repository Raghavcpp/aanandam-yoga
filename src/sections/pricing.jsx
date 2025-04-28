import React from "react";

const plan = [
    { name: "Basic", tagline: "Suitable for normal flexibility.", price: "$25" },
    { name: "Standard", tagline: "Suitable to grow steadily.", price: "$40" },
    { name: "Premium", tagline: "Suitable for core concepts.", price: "$50" },
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-black">
                    Membership <span className="text-black">Plans</span>
                </h2>
                <p className="text-lg text-gray-700 mt-4">
                    Choose the perfect plan for your yoga journey.
                </p>

                {/* Pricing Plans */}
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {plan.map((i, index) => (
                        <div key={index} className="flex flex-col bg-white rounded-3xl shadow-lg">
                            <div className="px-6 py-8 sm:p-10 sm:pb-6">
                                <div className="grid items-center justify-center w-full text-left">
                                    <div>
                                        <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                                            {i.name}
                                        </h2>
                                        <p className="mt-2 text-sm text-gray-500">{i.tagline}</p>
                                    </div>
                                    <div className="mt-6">
                                        <p>
                                            <span className="text-5xl font-light tracking-tight text-black">
                                                {i.price}
                                            </span>
                                            <span className="text-base font-medium text-gray-500"> /mo </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex px-6 pb-8 sm:px-8">
                                <a
                                    aria-describedby="tier-company"
                                    className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                                    href="#"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
