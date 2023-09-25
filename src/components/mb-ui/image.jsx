import NextImage from 'next/image';

import { MotionParallax } from '@/components/mb-ui/motionParallax';

function Image({ parallax = false, ...props }) {
    return (
        <>
            {parallax ? (
                <MotionParallax
                    offset={10}
                    className="relative flex h-full w-full overflow-hidden"
                >
                    <NextImage
                        {...props}
                        className={
                            'h-full w-full flex-1 scale-110 object-cover'
                        }
                    />
                </MotionParallax>
            ) : (
                <NextImage {...props} />
            )}
        </>
    );
}

export default Image;
