import React from 'react';

const ProductCard = ({ image, title, price }) => {
    return (
        <div className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-100 mb-4 aspect-square flex items-center justify-center">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-gray-400 text-xs"><img src="/ORLO_logo.png" height={44} width={80} /></span>
                    </div>
                )}
            </div>
            <h3 className="text-sm tracking-wider mb-2">{title}</h3>
            <p className="text-sm">${price}</p>
        </div>
    );
};

const ProductGrid = () => {
    const products = [
        { id: 1, title: 'HARMONY SERUM', price: '120', image: "/serum.png" },
        { id: 2, title: 'THE REJUVENATING FACE CREAM', price: '95', image: "/face-cream.png" },
        { id: 3, title: 'THE SEASON Honey & Almond Lotion', price: '200', image: "/lotion.png" },
        { id: 4, title: 'THE SEASON RITUAL KIT', price: '280', image: "/ritual-kit.png" },
        { id: 5, title: 'THE NOURISHING OIL', price: '85', image: "/Nourshing-oil.png" },
        { id: 6, title: 'Charcoal Detox & Cleanse Face Wash', price: '130', image: "/facewash.png" },
        { id: 7, title: 'THE SEASON TONER', price: '65', image: "/season-toner.png" },
        { id: 8, title: 'Tea Tree Essential Oil', price: '220', image: "/tea-tree-oil.png" },
    ];

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl mb-8 tracking-wide flex items-center justify-center">
                        <img src="/ORLO_logo.png" height={44} width={80} />
                    </h2>
                    <div className="flex items-center justify-center space-x-4 mb-8">
                        <button className="px-6 py-2 bg-black text-white text-xs tracking-wider">
                            ALL
                        </button>
                        <button className="px-6 py-2 text-xs tracking-wider hover:bg-gray-100 transition-colors">
                            SERUMS
                        </button>
                        <button className="px-6 py-2 text-xs tracking-wider hover:bg-gray-100 transition-colors">
                            CREAMS
                        </button>
                        <button className="px-6 py-2 text-xs tracking-wider hover:bg-gray-100 transition-colors">
                            OILS
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
