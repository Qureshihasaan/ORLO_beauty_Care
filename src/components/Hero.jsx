import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/hero-bg.png)' }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6">
                <p className="text-sm tracking-widest mb-4 font-serif">The Season</p>
                <h1 className="font-serif text-5xl md:text-7xl mb-8 tracking-wide">
                    THE RITUAL OF RENEWAL
                </h1>
                <button className="px-8 py-3 border-2 border-white text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                    DISCOVER
                </button>
            </div>
        </section>
    );
};

export default Hero;
