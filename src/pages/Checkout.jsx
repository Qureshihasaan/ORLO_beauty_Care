import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { cartItems, cartTotal } = useCart();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Here you would integrate with a payment processor
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow flex items-center justify-center px-6">
                    <div className="text-center space-y-6">
                        <h1 className="font-serif text-4xl tracking-wide">THANK YOU</h1>
                        <p className="text-gray-600">Your order has been received and is being processed.</p>
                        <Link to="/" className="inline-block px-8 py-3 bg-black text-white text-sm tracking-widest hover:bg-gray-800 transition-colors">
                            RETURN HOME
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow flex items-center justify-center px-6">
                    <div className="text-center space-y-6">
                        <h1 className="font-serif text-4xl tracking-wide">YOUR BAG IS EMPTY</h1>
                        <Link to="/shop" className="inline-block px-8 py-3 bg-black text-white text-sm tracking-widest hover:bg-gray-800 transition-colors">
                            CONTINUE SHOPPING
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Checkout Form */}
                    <div>
                        <h2 className="font-serif text-2xl tracking-wide mb-8">SHIPPING DETAILS</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <input type="text" placeholder="First Name" required className="w-full p-3 border border-gray-200 focus:outline-none focus:border-black" />
                                <input type="text" placeholder="Last Name" required className="w-full p-3 border border-gray-200 focus:outline-none focus:border-black" />
                            </div>
                            <input type="email" placeholder="Email" required className="w-full p-3 border border-gray-200 focus:outline-none focus:border-black" />
                            <input type="text" placeholder="Address" required className="w-full p-3 border border-gray-200 focus:outline-none focus:border-black" />
                            <div className="grid grid-cols-2 gap-6">
                                <input type="text" placeholder="City" required className="w-full p-3 border border-gray-200 focus:outline-none focus:border-black" />
                                <input type="text" placeholder="Postal Code" required className="w-full p-3 border border-gray-200 focus:outline-none focus:border-black" />
                            </div>
                            <input type="text" placeholder="Country" required className="w-full p-3 border border-gray-200 focus:outline-none focus:border-black" />
                            
                            <h2 className="font-serif text-2xl tracking-wide mt-12 mb-8">PAYMENT</h2>
                            <input type="text" placeholder="Card Number" required className="w-full p-3 border border-gray-200 focus:outline-none focus:border-black" />
                            <div className="grid grid-cols-2 gap-6">
                                <input type="text" placeholder="MM/YY" required className="w-full p-3 border border-gray-200 focus:outline-none focus:border-black" />
                                <input type="text" placeholder="CVC" required className="w-full p-3 border border-gray-200 focus:outline-none focus:border-black" />
                            </div>

                            <button type="submit" className="w-full bg-black text-white py-4 text-sm tracking-widest hover:bg-gray-900 transition-colors mt-8">
                                PLACE ORDER
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 p-8 h-fit">
                        <h2 className="font-serif text-2xl tracking-wide mb-8">ORDER SUMMARY</h2>
                        <div className="space-y-6 mb-8">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex justify-between items-start">
                                    <div className="flex space-x-4">
                                        <div className="w-16 h-16 bg-white">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{item.title}</p>
                                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm">${item.price * item.quantity}</p>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pt-6 space-y-4">
                            <div className="flex justify-between text-sm">
                                <span>Subtotal</span>
                                <span>${cartTotal}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between font-medium text-lg pt-4 border-t border-gray-200">
                                <span>Total</span>
                                <span>${cartTotal}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Checkout;
