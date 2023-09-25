import * as React from 'react';

import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const sectionVariants = cva('w-full py-24', {
    variants: {
        variant: {
            default: 'bg-transparent',
            invert: 'bg-invert-background text-invert-foreground',
            primary: 'bg-primary text-primary-foreground',
            tertiary: 'bg-tertiary text-secondary-tertiary',
            secondary: 'bg-secondary text-secondary-foreground',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

const containerVariants = cva('w-full mx-auto', {
    variants: {
        variant: {
            default: 'bg-transparent',
            invert: 'bg-invert-background text-invert-foreground',
            primary: 'bg-primary text-primary-foreground',
            tertiary: 'bg-tertiary text-secondary-tertiary',
            secondary: 'bg-secondary text-secondary-foreground',
        },
        size: {
            default: 'max-w-6xl',
            xl: 'max-w-xl',
            '3xl': 'max-w-3xl',
            '4xl': 'max-w-4xl',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

const Section = React.forwardRef(
    ({ as: Comp = 'div', className, variant, ...props }, ref) => (
        <Comp
            ref={ref}
            className={cn(sectionVariants({ variant, className }))}
            {...props}
        />
    ),
);
Section.displayName = 'Section';

const Container = React.forwardRef(
    ({ className, variant, size, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(containerVariants({ variant, size, className }))}
            {...props}
        />
    ),
);
Container.displayName = 'Container';

export { Section, Container };
