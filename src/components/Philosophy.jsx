import React from 'react';

const Philosophy = () => {
    return (
        <section className="bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="order-2 md:order-1">
                    <img
                        src="/philosophy-product.png"
                        alt="ORLO Product"
                        className="w-full h-auto"
                    />
                </div>

                {/* Content */}
                <div className="order-1 md:order-2 space-y-6">
                    <p className="text-sm tracking-widest font-serif">The Season</p>
                    <h2 className="font-serif text-4xl md:text-5xl tracking-wide">
                        PURE POTENCY.
                    </h2>
                    <p className="text-sm leading-relaxed opacity-90">
                        At the heart of every ORLO product lies an unwavering
                        commitment to purity and potency. We believe in harnessing
                        nature's most powerful ingredients and elevating them through
                        science to create formulations that deliver visible results.
                        Each product is a testament to our dedication to excellence
                        and our respect for your skin.
                    </p>
                    <button className="px-8 py-3 border-2 border-white text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                        OUR PHILOSOPHY
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
