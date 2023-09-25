import Link from 'next/link';

import { PrismicNextLink } from '@prismicio/next';
import ModalTest from 'src/components/theme/modal';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { LocaleDropdown } from '@/components/mb-ui/localeDropdown';
import { Container } from '@/components/mb-ui/section';

export function Header({
    resolvedTheme = 'default',
    localizedDocs = [],
    navigation = null,
    locale,
}) {
    return (
        <header
            className={cn(
                'absolute top-0 z-40 w-full',
                resolvedTheme === 'light' &&
                    'bg-gradient-to-b from-black/50 to-transparent text-white',
            )}
        >
            <Container as="div" className=" hidden w-full !py-4 md:block">
                <nav
                    className="relative flex h-20 items-center justify-between md:justify-center"
                    aria-label="Global"
                >
                    <div className="absolute left-0 flex flex-1 items-center gap-x-3">
                        {navigation &&
                            navigation.data?.links.map((item) => (
                                <PrismicNextLink
                                    key={item.label}
                                    field={item.link}
                                    className={item.label}
                                >
                                    {item.label}
                                </PrismicNextLink>
                            ))}
                    </div>

                    <div>
                        <div className="flex w-full items-center justify-between ">
                            <Link
                                href="/"
                                className="flex items-center space-x-2"
                            >
                                <span className="inline-block text-center font-serif text-2xl font-bold leading-[0.95]">
                                    Gîte <br /> Jules Romains
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center justify-end gap-2">
                        {localizedDocs && (
                            <LocaleDropdown
                                localizedDocs={localizedDocs}
                                locale={locale}
                            />
                        )}
                        <Link
                            href={'/pricing'}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(buttonVariants({ size: 'sm' }))}
                        >
                            Tarifs & Réservations
                        </Link>
                    </div>
                </nav>
            </Container>

            <div className="fixed bottom-0 z-40 w-full pb-2 text-center md:hidden">
                <ModalTest />
                <div className="from-invert/90 to-invert/0 pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full  bg-gradient-to-t"></div>
            </div>
        </header>
    );
}
