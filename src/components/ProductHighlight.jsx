import React from 'react';

const ProductHighlight = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Product Images Gallery */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <div className="bg-gradient-to-br from-gray-200 to-gray-300 aspect-square flex items-center justify-center">
                            <img src="/picture3.png" alt="Product" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-gradient-to-br from-gray-300 to-gray-200 aspect-square">
                            <img src="/picture4.png" alt="Product" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-gradient-to-br from-gray-300 to-gray-200 aspect-square">
                            <img src="/picture5.png" alt="Product" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-gradient-to-br from-gray-200 to-gray-300 aspect-square flex items-center justify-center">
                            <img src="/picture2.png" alt="Product" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                    <h2 className="font-serif text-4xl md:text-5xl tracking-wide">
                        THE REGENERATING CREAM
                    </h2>
                    <p className="text-2xl font-light">$150</p>
                    <p className="text-sm leading-relaxed opacity-80">
                        A luxurious cream that works to restore skin's natural radiance
                        and vitality. Infused with potent botanicals and cutting-edge
                        actives, this formula deeply nourishes while visibly reducing
                        the signs of aging. Experience the transformative power of
                        nature and science in perfect harmony.
                    </p>
                    <div className="space-y-4">
                        <p className="text-xs tracking-wider">TOPNOTES</p>
                        <button className="w-full md:w-auto px-12 py-4 bg-black text-white text-sm tracking-widest hover:bg-gray-800 transition-colors">
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHighlight;
