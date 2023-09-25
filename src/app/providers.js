'use client';

import { useEffect } from 'react';

import CookiesProvider from '@/contexts/cookiesContext';
import { ThemeProvider, useTheme } from 'next-themes';

function ThemeWatcher() {
    let { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        let media = window.matchMedia('(prefers-color-scheme: dark)');

        function onMediaChange() {
            let systemTheme = media.matches ? 'dark' : 'light';
            if (resolvedTheme === systemTheme) {
                setTheme('system');
            }
        }

        onMediaChange();
        media.addEventListener('change', onMediaChange);

        return () => {
            media.removeEventListener('change', onMediaChange);
        };
    }, [resolvedTheme, setTheme]);

    return null;
}
export default function Providers({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeWatcher></ThemeWatcher>
            <CookiesProvider>{children}</CookiesProvider>
        </ThemeProvider>
    );
}
