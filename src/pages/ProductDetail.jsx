import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Minus, Plus } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const detailsRef = useRef([]);

    useEffect(() => {
        if (!product) return;

        const ctx = gsap.context(() => {
            // Image animation - scale from left
            gsap.from(imageRef.current, {
                x: -100,
                scale: 0.9,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Product details stagger from right
            gsap.from(detailsRef.current, {
                x: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, [product]);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-32 pb-20 px-6">
                <div ref={containerRef} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div ref={imageRef} className="bg-gray-100 aspect-square flex items-center justify-center">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                    </div>

                    {/* Details */}
                    <div className="space-y-8">
                        <div ref={(el) => (detailsRef.current[0] = el)}>
                            <p className="text-sm tracking-widest text-gray-500 mb-2">{product.category}</p>
                            <h1 className="font-serif text-4xl md:text-5xl tracking-wide mb-4">{product.title}</h1>
                            <p className="text-2xl font-light">${product.price}</p>
                        </div>

                        <p ref={(el) => (detailsRef.current[1] = el)} className="text-gray-600 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="space-y-6">
                            <div ref={(el) => (detailsRef.current[2] = el)} className="flex items-center space-x-4">
                                <span className="text-sm tracking-wider">QUANTITY</span>
                                <div className="flex items-center border border-gray-200">
                                    <button 
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-3 hover:bg-gray-50 transition-colors"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="w-12 text-center">{quantity}</span>
                                    <button 
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="p-3 hover:bg-gray-50 transition-colors"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>

                            <button 
                                ref={(el) => (detailsRef.current[3] = el)}
                                onClick={handleAddToCart}
                                className="w-full bg-black text-white py-4 text-sm tracking-widest hover:bg-gray-900 transition-colors"
                            >
                                ADD TO CART
                            </button>
                        </div>

                        <div ref={(el) => (detailsRef.current[4] = el)} className="border-t border-gray-200 pt-8 space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="font-medium">SHIPPING</span>
                                <span className="text-gray-500">Free shipping on orders over $100</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="font-medium">RETURNS</span>
                                <span className="text-gray-500">30-day return policy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetail;
