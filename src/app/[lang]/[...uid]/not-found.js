// Render the default Next.js 404 page when a route
// For all locales  unless the default locale
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

import { headers } from 'next/headers';
import Link from 'next/link';

import { getDictionary } from '@/translations/getTranslation';

export default async function NotFound() {
    const headersList = headers();
    const pathname = headersList.get('x-pathname') || '';

    const lang = pathname.slice(1, 6);
    return (
        <div>
            <h2>
                {' '}
                Not Found - lang/uid | {lang ? lang : ' lang is not define'}
            </h2>
            <p>Could not find requested resource</p>
            <p>
                View <Link href="/blog">all the posts</Link>
            </p>
        </div>
    );
}
