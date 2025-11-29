import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import { Link, useSearchParams } from 'react-router-dom';

const ProductCard = ({ id, image, title, price }) => {
    return (
        <Link to={`/product/${id}`} className="group cursor-pointer block">
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
        </Link>
    );
};

const ProductGrid = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        let result = products;

        // Filter by search query
        if (searchQuery) {
            result = result.filter(product => 
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by category
        if (activeFilter !== 'ALL') {
            result = result.filter(product => product.category === activeFilter);
        }

        setFilteredProducts(result);
    }, [searchQuery, activeFilter]);

    const filters = ['ALL', 'SERUMS', 'CREAMS', 'OILS'];

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl mb-8 tracking-wide flex items-center justify-center">
                        <img src="/ORLO_logo.png" height={44} width={80} />
                    </h2>
                    
                    {searchQuery && (
                        <p className="mb-8 text-sm tracking-wider">
                            Showing results for "{searchQuery}"
                        </p>
                    )}

                    <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 text-xs tracking-wider transition-colors ${
                                    activeFilter === filter
                                        ? 'bg-black text-white'
                                        : 'hover:bg-gray-100'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-500">No products found.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
