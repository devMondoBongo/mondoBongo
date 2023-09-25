import { NextResponse } from 'next/server';

import { createClient } from '@/prismicio';

export async function middleware(request) {
    const pathname = request.nextUrl.pathname;

    const client = createClient();
    const repository = await client.getRepository();

    const locales = repository.languages.map((lang) => lang.id);
    const defaultLocale = locales[0];

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    // add pathname to headers for use in notfound page
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', pathname);

    // Redirect to default locale if there is no supported locale prefix
    if (pathnameIsMissingLocale) {
        return NextResponse.rewrite(
            new URL(`/${defaultLocale}${pathname}`, request.url),
        );
    } else {
        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });
    }
}

export const config = {
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
