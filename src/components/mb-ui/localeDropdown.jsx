'use client';

import { PrismicNextLink } from '@prismicio/next';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icons } from '@/components/mb-ui/icons';

const localeDictionary = {
    'fr-fr': {
        country: 'France',
    },
    'en-us': {
        country: 'USA',
    },
    'nl-nl': {
        country: 'Hollandais',
    },
};

export function LocaleDropdown({ localizedDocs, locale }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="relative">
                    <Icons.languages className={'absolute left-3 h-4 w-4'} />
                    <span className={'pl-5'}>
                        {' '}
                        {localeDictionary[locale]['country']}
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {localizedDocs.map((localizedDoc) => (
                    <DropdownMenuItem key={localizedDoc.lang}>
                        <PrismicNextLink
                            className={
                                'flex w-full min-w-[150px] justify-between'
                            }
                            href={localizedDoc.url}
                            locale={localizedDoc.lang}
                        >
                            <span>
                                {localeDictionary[localizedDoc.lang][
                                    'country'
                                ] || localizedDoc.lang}
                            </span>

                            <Icons.check
                                className={cn(
                                    'ml-1  h-4 w-4',
                                    locale === localizedDoc.lang
                                        ? 'opacity-100'
                                        : 'opacity-0',
                                )}
                            />
                        </PrismicNextLink>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
