import Marquee from 'react-fast-marquee';

export function FastMarquee({ children, className, settings }) {
    const marqueeOptions = {
        ...settings,
    };
    return (
        <Marquee className={`${className}`} {...marqueeOptions}>
            {children}
        </Marquee>
    );
}
