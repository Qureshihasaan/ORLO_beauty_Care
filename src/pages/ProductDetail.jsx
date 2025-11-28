import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Minus, Plus } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="bg-gray-100 aspect-square flex items-center justify-center">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                    </div>

                    {/* Details */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-sm tracking-widest text-gray-500 mb-2">{product.category}</p>
                            <h1 className="font-serif text-4xl md:text-5xl tracking-wide mb-4">{product.title}</h1>
                            <p className="text-2xl font-light">${product.price}</p>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
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
                                onClick={handleAddToCart}
                                className="w-full bg-black text-white py-4 text-sm tracking-widest hover:bg-gray-900 transition-colors"
                            >
                                ADD TO CART
                            </button>
                        </div>

                        <div className="border-t border-gray-200 pt-8 space-y-4">
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
