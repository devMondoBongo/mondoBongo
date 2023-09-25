import * as React from 'react';

import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariants = cva('', {
    variants: {
        variant: {
            h1: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
            h2: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
            h3: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
            h4: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
            h5: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
            h6: 'lg:text-xl',
        },
    },
    defaultVariants: {
        variant: 'h1',
    },
});

function Heading({ as: Comp = 'h1', className, variant, ...props }) {
    return (
        <Comp
            className={cn(headingVariants({ variant }), className)}
            {...props}
        />
    );
}

export { Heading, headingVariants };
