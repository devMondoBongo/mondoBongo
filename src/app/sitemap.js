import { createClient } from '@/prismicio';

export default async function sitemap() {
    const client = createClient();

    const pages = await client.getAllByType('page', {
        orderings: {
            field: 'document.first_publication_date',
            direction: 'desc',
        },
        lang: '*',
    });

    const pagesEntries = pages.map((entry) => ({
        url: `${process.env.NEXT_PUBLIC_SITE_URL}${entry.url}`,
        lastModified: entry.last_publication_date,
    }));
    return [...pagesEntries];
}
