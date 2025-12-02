import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductHighlight = () => {
    const sectionRef = useRef(null);
    const image1Ref = useRef(null);
    const image2Ref = useRef(null);
    const image3Ref = useRef(null);
    const image4Ref = useRef(null);
    const headingRef = useRef(null);
    const priceRef = useRef(null);
    const descriptionRef = useRef(null);
    const topnotesRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Product gallery images - stagger animation
            gsap.from([image1Ref.current, image2Ref.current, image3Ref.current, image4Ref.current], {
                x: -80,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Product details - stagger from right
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse'
                }
            });

            tl.from(headingRef.current, {
                x: 100,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            })
            .from(priceRef.current, {
                x: 100,
                opacity: 0,
                duration: 0.6,
                ease: 'power3.out'
            }, '-=0.5')
            .from(descriptionRef.current, {
                x: 100,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.4')
            .from(topnotesRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.out'
            }, '-=0.3')
            .from(buttonRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: 'power3.out'
            }, '-=0.3');

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Product Images Gallery */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <div ref={image1Ref} className="bg-gradient-to-br from-gray-200 to-gray-300 aspect-square flex items-center justify-center">
                            <img src="/picture3.png" alt="Product" className="w-full h-full object-cover" />
                        </div>
                        <div ref={image2Ref} className="bg-gradient-to-br from-gray-300 to-gray-200 aspect-square">
                            <img src="/picture4.png" alt="Product" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div ref={image3Ref} className="bg-gradient-to-br from-gray-300 to-gray-200 aspect-square">
                            <img src="/picture5.png" alt="Product" className="w-full h-full object-cover" />
                        </div>
                        <div ref={image4Ref} className="bg-gradient-to-br from-gray-200 to-gray-300 aspect-square flex items-center justify-center">
                            <img src="/picture2.png" alt="Product" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                    <h2 ref={headingRef} className="font-serif text-4xl md:text-5xl tracking-wide">
                        THE REGENERATING CREAM
                    </h2>
                    <p ref={priceRef} className="text-2xl font-light">$150</p>
                    <p ref={descriptionRef} className="text-sm leading-relaxed opacity-80">
                        A luxurious cream that works to restore skin's natural radiance
                        and vitality. Infused with potent botanicals and cutting-edge
                        actives, this formula deeply nourishes while visibly reducing
                        the signs of aging. Experience the transformative power of
                        nature and science in perfect harmony.
                    </p>
                    <div className="space-y-4">
                        <p ref={topnotesRef} className="text-xs tracking-wider">TOPNOTES</p>
                        <Link ref={buttonRef} to="/shop" className="inline-block w-full md:w-auto px-12 py-4 bg-black text-white text-sm tracking-widest hover:bg-gray-800 transition-colors text-center">
                            ADD TO CART
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHighlight;
