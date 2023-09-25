import { Heading } from '@/components/mb-ui/heading';
import { Container, Section } from '@/components/mb-ui/section';
import SwiperSlider from '@/components/mb-ui/swiperSlider';
import HeroSliderMock from './mocks.json';

export function HeroSlider({ data }) {
    if (!data) {
        data = { ...HeroSliderMock };
    }
    return (
        <Section className={'relative h-screen py-0'}>
            <div className="absolute flex h-full w-full items-center justify-center">
                <Container as={'div'} className={'relative z-50 text-center'}>
                    <Heading
                        as="h1"
                        className={
                            'text-center font-serif font-bold text-white'
                        }
                        variant={'h1'}
                    >
                        Bienvenue au <br className="hidden sm:inline" />
                        gîte Jules Romains
                    </Heading>
                    <p
                        className={
                            'mt-14 flex items-center justify-center text-center text-xl font-medium text-white/80'
                        }
                    >
                        <span
                            className={'flex items-center'}
                        >{`Gîte & Chambres d'hôte`}</span>
                        <span className={'px-2'}>|</span>
                        <span
                            className={'flex items-center'}
                        >{`Saint-julien Chapteuil`}</span>
                        <span className={'px-2'}>|</span>
                        Haute-loire
                    </p>
                </Container>
            </div>
            <SwiperSlider data={data} />
        </Section>
    );
}
