'use client';

import { CookiesConsent } from '@/components/mb-ui/cookiesConsent';
import { DevTools } from '@/components/mb-ui/devTools';
import { FadeIn } from '@/components/mb-ui/fadeIn';
import { Footer } from '@/components/theme/footer';
import { Header } from '@/components/theme/header';

export function Layout({ localizedDocs, navigation, children, locale }) {
    return (
        <>
            <DevTools></DevTools>
            <CookiesConsent></CookiesConsent>
            <div className="relative flex min-h-screen flex-col">
                <FadeIn>
                    <Header
                        resolvedTheme={'light'}
                        localizedDocs={localizedDocs}
                        navigation={navigation}
                        locale={locale}
                    ></Header>
                    <main>
                        {children}
                        <Footer
                            localizedDocs={localizedDocs}
                            navigation={navigation}
                            locale={locale}
                        />
                    </main>
                </FadeIn>
            </div>
        </>
    );
}
