import { repositoryName } from '@/prismicio';
import { PrismicPreview } from '@prismicio/next';
import Providers from '@/app/providers';
import { fontMono, fontSans, fontSerif } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

export const metadata = {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
    title: {
        default: `${process.env.NEXT_PUBLIC_SITE_TITLE}`,
        template: `%s | ${process.env.NEXT_PUBLIC_SITE_TITLE}`,
    },
    icons: '/favicon.ico',
    description: 'description',
    openGraph: {
        title: 'title',
        description: 'description',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
        siteName: `${process.env.NEXT_PUBLIC_SITE_TITLE}`,
        type: 'website',
    },
    alternates: {
        canonical: './',
        types: {
            'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function LangLayout({ children, params: { lang } }) {
    return (
        <html lang={lang} suppressHydrationWarning>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                    fontMono.variable,
                    fontSerif.variable,
                )}
            >
                <PrismicPreview repositoryName={repositoryName}>
                    <Providers>{children}</Providers>
                </PrismicPreview>
                <Toaster />
            </body>
        </html>
    );
}
