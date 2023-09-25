'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icons } from '@/components/mb-ui/icons';

const themeDictionary = {
    light: {
        fr: 'Clair',
    },
    dark: {
        fr: 'Sombre',
    },
    system: {
        fr: 'Système',
    },
};
export function ThemeDropdown() {
    const { theme, setTheme } = useTheme();
    let [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="relative">
                    {mounted && (
                        <>
                            {theme === 'light' && (
                                <Icons.sun
                                    className={'absolute left-3 h-4 w-4'}
                                />
                            )}
                            {theme === 'dark' && (
                                <Icons.moon
                                    className={'absolute left-3 h-4 w-4'}
                                />
                            )}
                            {theme === 'system' && (
                                <Icons.laptop
                                    className={'absolute left-3 h-4 w-4'}
                                />
                            )}
                            <span className={'pl-5'}> test</span>
                        </>
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    className={'flex min-w-[150px] justify-between'}
                    onClick={() => setTheme('light')}
                >
                    <span>Thème {themeDictionary['light']['fr']}</span>
                    {theme === 'light' && (
                        <Icons.check className="ml-1  h-4 w-4" />
                    )}
                </DropdownMenuItem>
                <DropdownMenuItem
                    className={'flex min-w-[150px] justify-between'}
                    onClick={() => setTheme('dark')}
                >
                    <span>Thème {themeDictionary['dark']['fr']}</span>
                    {theme === 'dark' && (
                        <Icons.check className="ml-1  h-4 w-4" />
                    )}
                </DropdownMenuItem>
                <DropdownMenuItem
                    className={'flex min-w-[150px] justify-between'}
                    onClick={() => setTheme('system')}
                >
                    <span>Thème {themeDictionary['system']['fr']}</span>
                    {theme === 'system' && (
                        <Icons.check className="ml-1 h-4 w-4" />
                    )}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
