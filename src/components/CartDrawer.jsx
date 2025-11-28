import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
    const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex justify-end">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={() => setIsCartOpen(false)}
            ></div>

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
                {/* Header */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="font-serif text-xl tracking-wider">YOUR BAG ({cartItems.length})</h2>
                    <button 
                        onClick={() => setIsCartOpen(false)}
                        className="hover:opacity-50 transition-opacity"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <ShoppingBag size={48} className="opacity-20" />
                            <p className="text-gray-500 tracking-wide">Your bag is empty</p>
                            <button 
                                onClick={() => setIsCartOpen(false)}
                                className="text-sm border-b border-black pb-1 hover:opacity-50 transition-opacity"
                            >
                                CONTINUE SHOPPING
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex space-x-4">
                                <div className="w-24 h-24 bg-gray-100 flex-shrink-0">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-sm font-medium tracking-wide pr-4">{item.title}</h3>
                                            <button 
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-black transition-colors"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">${item.price}</p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center border border-gray-200">
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-2 hover:bg-gray-50 transition-colors"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-2 hover:bg-gray-50 transition-colors"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="p-6 border-t border-gray-100 bg-gray-50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm tracking-widest">SUBTOTAL</span>
                            <span className="text-lg font-medium">${cartTotal}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-6">Shipping and taxes calculated at checkout.</p>
                        <Link 
                            to="/checkout"
                            onClick={() => setIsCartOpen(false)}
                            className="block w-full bg-black text-white text-center py-4 text-sm tracking-widest hover:bg-gray-900 transition-colors"
                        >
                            CHECKOUT
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
