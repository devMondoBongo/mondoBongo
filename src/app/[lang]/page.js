import { notFound } from 'next/navigation';

import { createClient } from '@/prismicio';
import { getTranslation } from '@/translations/getTranslation';
import Modal from 'src/components/theme/modal';
import { getLocalizedDocs } from '@/lib/prismic/getLocalizedDocs';
import { Heading } from '@/components/mb-ui/heading';
import Image from '@/components/mb-ui/image';
import { MotionParallax } from '@/components/mb-ui/motionParallax';
import { Container, Section } from '@/components/mb-ui/section';
import SwiperCarousel from '@/components/mb-ui/swiperCarousel';
import { Layout } from '@/components/SiteLayout';
import { ContactForm } from '@/components/theme/contactForm';
import { HeroWithMarquee } from '@/components/theme/heroMarquee';
import { HeroSlider } from '@/components/theme/heroSlider';
import test1 from '/public/images/placeholder/empty.jpg';

export async function generateMetadata({ params: { lang } }) {
    const client = createClient();

    let page;
    try {
        page = await client.getByUID('page', 'home', { lang: lang });
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

export default async function Home({ params: { lang } }) {
    const client = createClient();
    console.log('client:', lang);
    // page
    // return notFound component if page doesn't exist
    let page;
    try {
        page = await client.getByUID('page', 'home', { lang });
    } catch (error) {
        console.log('error:', error);
        page = null;
    }
    if (!page) {
        return notFound();
    }

    // navigation
    let navigation;
    try {
        navigation = await client.getSingle('navigation', { lang });
    } catch (error) {
        navigation = null;
    }

    // localizedDocs
    // are the mirror of a document in other locale
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
            locale={lang}
        >
            <p>{translation.cookiesMessage.title}</p>
            <HeroSlider></HeroSlider>
            <Section className={'relative my-36 py-10'}>
                <Container className={'relative z-20 h-full'}>
                    <div
                        className={
                            'relative grid grid-cols-1 items-center gap-x-24 gap-y-16 lg:grid-cols-2'
                        }
                    >
                        <div className={''}>
                            <Heading
                                as="h2"
                                className={'font-serif font-bold leading-8'}
                                variant={'h4'}
                            >
                                Un lieu au charme historique
                            </Heading>
                            <p className="mt-6  text-foreground/70">
                                {`C'est ici, dans cette cette ancienne ferme, que Jules Romains, écrivain, philosophe, poète et
                  dramaturge français est est né en août 1885. Très attaché à la terre natale, et à cette maison
                  familiale, il reviendra chaque été s'y ressourcer. Elle
                  servira de toile de fond dans plusieurs romans.`}
                            </p>
                        </div>
                        <div className={'relative lg:order-first'}>
                            <MotionParallax offset={100}>
                                <div className={'relative bg-amber-200'}>
                                    <div className={'aspect-square'}>
                                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                        <Image
                                            src={test1}
                                            fill
                                            className={
                                                'h-full w-full object-cover'
                                            }
                                        />
                                    </div>
                                    <div className="absolute -left-0 top-0  -translate-x-1/2 -translate-y-1/2 grid-cols-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 500 500"
                                            className={
                                                'h-40 w-40 rounded-full '
                                            }
                                        >
                                            <title>
                                                Saint-Julien Chapteuil
                                            </title>
                                            <defs>
                                                <path
                                                    d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                                                    id="textcircle"
                                                >
                                                    <animateTransform
                                                        attributeName="transform"
                                                        begin="0s"
                                                        dur="30s"
                                                        type="rotate"
                                                        from="0 250 250"
                                                        to="360 250 250"
                                                        repeatCount="indefinite"
                                                    />
                                                </path>
                                            </defs>

                                            <text
                                                dy="25"
                                                className={
                                                    'fill-foreground text-7xl font-medium'
                                                }
                                            >
                                                <textPath xlinkHref="#textcircle">
                                                    43260 - Saint-julien
                                                    Chapteuil
                                                </textPath>
                                            </text>
                                        </svg>
                                    </div>
                                </div>
                            </MotionParallax>
                        </div>
                    </div>
                </Container>
                <div
                    className={
                        'absolute inset-0 z-10 flex h-full w-full items-center justify-center px-32'
                    }
                >
                    <div
                        className={'h-full w-1/4 -translate-x-1/2 bg-secondary'}
                    ></div>
                </div>
            </Section>
            <Section className={'relative my-36 py-10'}>
                <Container>
                    <SwiperCarousel></SwiperCarousel>
                </Container>
            </Section>
        </Layout>
    );
}
