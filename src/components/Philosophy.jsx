import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const subtitleRef = useRef(null);
    const headingRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image animation - slide in from left
            gsap.from(imageRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Content animations - stagger from right
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse'
                }
            });

            tl.from(subtitleRef.current, {
                x: 100,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            })
            .from(headingRef.current, {
                x: 100,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.6')
            .from(descriptionRef.current, {
                x: 100,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.6')
            .from(buttonRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: 'power3.out'
            }, '-=0.4');

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="order-2 md:order-1">
                    <img
                        ref={imageRef}
                        src="/picture1.png"
                        alt="ORLO Product"
                        className="w-full h-auto"
                    />
                </div>

                {/* Content */}
                <div className="order-1 md:order-2 space-y-6">
                    <p ref={subtitleRef} className="text-sm tracking-widest font-serif">The Season</p>
                    <h2 ref={headingRef} className="font-serif text-4xl md:text-5xl tracking-wide">
                        PURE POTENCY.
                    </h2>
                    <p ref={descriptionRef} className="text-sm leading-relaxed opacity-90">
                        At the heart of every ORLO product lies an unwavering
                        commitment to purity and potency. We believe in harnessing
                        nature's most powerful ingredients and elevating them through
                        science to create formulations that deliver visible results.
                        Each product is a testament to our dedication to excellence
                        and our respect for your skin.
                    </p>
                    <button ref={buttonRef} className="px-8 py-3 border-2 border-white text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                        OUR PHILOSOPHY
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
