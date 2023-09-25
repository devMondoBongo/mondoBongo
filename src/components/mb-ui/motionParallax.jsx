'use client';

import { useEffect, useRef, useState } from 'react';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export function MotionParallax({ children, offset = 80, ...props }) {
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const ref = useRef(null);

    const { scrollY } = useScroll();

    // start animating our element when we've scrolled it into view
    const initial = elementTop - clientHeight;
    // end our animation when we've scrolled the offset specified
    const final = elementTop + offset;

    const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
    // apply a spring to ease the result
    const y = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(() => {
        const element = ref.current;
        // save our layout measurements in a function in order to trigger
        // it both on mount and on resize
        const onResize = () => {
            // use getBoundingClientRect instead of offsetTop in order to
            // get the offset relative to the viewport
            setElementTop(element.getBoundingClientRect().top + window.scrollY);
            setClientHeight(window.innerHeight);
        };
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [ref]);

    return (
        <motion.div ref={ref} style={{ y }} {...props}>
            {children}
        </motion.div>
    );
}
