import React, { useState, useEffect, useRef } from 'react';
import { products } from '../data/products';
import { Link, useSearchParams } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductCard = ({ id, image, title, price, cardRef }) => {
    return (
        <Link ref={cardRef} to={`/product/${id}`} className="group cursor-pointer block">
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
    
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const searchTextRef = useRef(null);
    const filtersRef = useRef([]);
    const cardsRef = useRef([]);

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

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(headerRef.current, {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Search text
            if (searchTextRef.current) {
                gsap.from(searchTextRef.current, {
                    y: -30,
                    opacity: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                });
            }

            // Filters stagger
            gsap.from(filtersRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Product cards stagger
            gsap.from(cardsRef.current, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                    toggleActions: 'play none none reverse'
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, [filteredProducts, searchQuery]);

    const filters = ['ALL', 'SERUMS', 'CREAMS', 'OILS'];

    return (
        <section ref={sectionRef} className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 ref={headerRef} className="font-serif text-4xl mb-8 tracking-wide flex items-center justify-center">
                        <img src="/ORLO_logo.png" height={44} width={80} />
                    </h2>
                    
                    {searchQuery && (
                        <p ref={searchTextRef} className="mb-8 text-sm tracking-wider">
                            Showing results for "{searchQuery}"
                        </p>
                    )}

                    <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                        {filters.map((filter, index) => (
                            <button
                                key={filter}
                                ref={(el) => (filtersRef.current[index] = el)}
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
                        filteredProducts.map((product, index) => (
                            <ProductCard 
                                key={product.id} 
                                {...product} 
                                cardRef={(el) => (cardsRef.current[index] = el)}
                            />
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
