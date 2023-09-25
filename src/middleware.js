import { NextResponse } from 'next/server';

import { createClient } from '@/prismicio';

export async function middleware(request) {
    const client = createClient();
    const repository = await client.getRepository();

    const locales = repository.languages.map((lang) => lang.id);
    const defaultLocale = locales[0];

    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname;

    const pathnameIsMissingLocale = locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    // Redirect to default locale if there is no supported locale prefix
    if (pathnameIsMissingLocale) {
        return NextResponse.rewrite(
            new URL(`/${defaultLocale}${pathname}`, request.url),
        );
    }
}

export const config = {
    // Do not localize these paths
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next|.*\\..*|favicon.ico).*)',
    ],
};
