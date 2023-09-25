import Link from 'next/link';

import { Icons } from '@/components/mb-ui/icons';
import { LocaleDropdown } from '@/components/mb-ui/localeDropdown';
import { Container } from '@/components/mb-ui/section';
import { ThemeDropdown } from '@/components/mb-ui/themeDropdown';

export function Footer({ localizedDocs, locale }) {
    return (
        <Container as={'footer'}>
            <div className="py-8">
                <div>
                    <div className="grid grid-cols-12 gap-8">
                        <div className="lm:col-span-6 col-span-12 md:col-span-4">
                            <div>
                                <h2 className="mb-4  border-b py-2 font-bold">
                                    Adresse
                                </h2>
                                <ul className={''}>
                                    <li className="flex items-center py-1 font-medium">
                                        <span>
                                            La chapuze, <br />
                                            43260 Saint-julien Chapteuil
                                        </span>
                                    </li>
                                    <li className="flex items-center py-1 font-medium">
                                        <span>(+33)628503741</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lm:col-span-6 col-span-12 md:col-span-3">
                            <div>
                                <h2 className="mb-4 border-b py-2 font-bold">
                                    Navigation
                                </h2>
                                <ul className={''}>
                                    <li className="flex items-center py-1 font-medium">
                                        <Link
                                            href={'#'}
                                            className="link font-medium"
                                        >
                                            Bienvenue
                                        </Link>
                                    </li>
                                    <li className="flex items-center py-1 font-medium">
                                        <Link
                                            href={'#'}
                                            className="link font-medium"
                                        >
                                            {`L'histoire du lieu`}
                                        </Link>
                                    </li>
                                    <li className="flex items-center py-1 font-medium">
                                        <Link
                                            href={'#'}
                                            className="link font-medium"
                                        >
                                            Galerie
                                        </Link>
                                    </li>
                                    <li className="flex items-center py-1 font-medium">
                                        <Link
                                            href={'#'}
                                            className="link font-medium"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lm:col-span-6 col-span-12 md:col-span-3">
                            <div>
                                <h2 className="mb-4 border-b py-2 font-bold">
                                    Réservation
                                </h2>
                                <ul className={''}>
                                    <li className="flex items-center py-1 font-medium">
                                        <Link
                                            href={'#'}
                                            className="link font-medium"
                                        >
                                            Tarifs
                                        </Link>
                                    </li>
                                    <li className="flex items-center py-1 font-medium">
                                        <Link
                                            href={'#'}
                                            className="link font-medium"
                                        >
                                            Réserver le gîte
                                        </Link>
                                    </li>
                                    <li className="flex items-center py-1 font-medium">
                                        <Link
                                            href={'#'}
                                            className="link font-medium"
                                        >
                                            {` Réserver une chambre d'hôte`}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lm:col-span-6 col-span-12 md:col-span-2">
                            <div>
                                <h2 className="mb-4 border-b py-2 font-bold">
                                    Préférences
                                </h2>
                                <ul className={''}>
                                    {localizedDocs && (
                                        <li className="flex items-center py-1 font-medium">
                                            <LocaleDropdown
                                                localizedDocs={localizedDocs}
                                                locale={locale}
                                            />
                                        </li>
                                    )}

                                    <li className="flex items-center py-1 font-medium">
                                        <ThemeDropdown />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t pt-8">
                <div>
                    <div className="grid grid-cols-12 items-center gap-y-[20px] md:gap-y-0">
                        <div className="col-span-12 md:col-span-4">
                            <ul className="flex justify-center md:justify-start">
                                <li className="mr-[20px] last:mr-0 xl:mr-[30px]">
                                    <Link
                                        href={'/#'}
                                        className="font-normal transition-all hover:text-primary"
                                    >
                                        Termes et conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <div className="flex justify-center">
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
                        <div className="col-span-12 md:col-span-4">
                            <div className="flex justify-center md:justify-end">
                                <h2 className="pr-[15px] text-[16px] lg:pr-[65px]">
                                    {'Suivez-nous'}
                                </h2>
                                <ul className="flex">
                                    <li className="mr-[20px] last:mr-0 xl:mr-[25px]">
                                        <Link
                                            href={'#'}
                                            className="transition-all hover:text-primary"
                                        >
                                            <Icons.twitter />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-[25px] pt-[35px]">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <span className="flex items-center justify-center">
                            © {new Date().getFullYear()} Gîte Jules Romains.
                            <Link href={'#'} className="ml-[5px] font-normal">
                                Tout droits réservés.
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    );
}
