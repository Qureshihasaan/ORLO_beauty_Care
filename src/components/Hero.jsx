import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const bgRef = useRef(null);
    const subtitleRef = useRef(null);
    const headingRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background parallax effect
            gsap.to(bgRef.current, {
                scale: 1.1,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                }
            });

            // Content animations - stagger effect
            const tl = gsap.timeline({
                defaults: { ease: 'power3.out', duration: 1 }
            });

            tl.from(subtitleRef.current, {
                y: 50,
                opacity: 0,
                delay: 0.3
            })
            .from(headingRef.current, {
                y: 80,
                opacity: 0,
            }, '-=0.7')
            .from(buttonRef.current, {
                y: 30,
                opacity: 1,
            }, '-=0.6');

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                ref={bgRef}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/hero-bg.png)' }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6">
                <p ref={subtitleRef} className="text-sm tracking-widest mb-4 font-serif">The Season</p>
                <h1 ref={headingRef} className="font-serif text-5xl md:text-7xl mb-8 tracking-wide">
                    THE RITUAL OF RENEWAL
                </h1>
                <Link ref={buttonRef} to="/shop" className="inline-block px-8 py-3 border-2 border-white text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                    DISCOVER
                </Link>
            </div>
        </section>
    );
};

export default Hero;
