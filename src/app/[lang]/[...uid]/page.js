import { notFound } from 'next/navigation';

import { createClient } from '@/prismicio';
import { getTranslation } from '@/translations/getTranslation';
import { getLocalizedDocs } from '@/lib/prismic/getLocalizedDocs';
import { Layout } from '@/components/SiteLayout';

export async function generateMetadata({ params: { lang, uid } }) {
    const client = createClient();

    //Page
    let page;
    try {
        page = await client.getByUID('page', uid, { lang: lang });
    } catch (error) {
        page = null;
    }
    if (!page) {
        return null;
    }

    return {
        title: page.data.title,
        description: lang,
    };
}

export default async function Home({ params: { lang, uid } }) {
    const client = createClient();

    // page
    let page;
    try {
        page = await client.getByUID('page', uid, { lang: lang });
    } catch (error) {
        page = null;
    }

    //navigation
    let navigation;
    try {
        navigation = await client.getSingle('navigation', { lang: lang });
    } catch (error) {
        navigation = null;
    }

    // locales
    let localizedDocs;
    try {
        localizedDocs = await getLocalizedDocs(page, client);
    } catch (error) {
        localizedDocs = null;
    }
    const translation = await getTranslation(lang);

    return (
        <Layout
            navigation={navigation}
            localizedDocs={localizedDocs}
            translation={translation}
        >
            <p>test</p>
        </Layout>
    );
}
