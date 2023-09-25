'use client';

import { FastMarquee } from '@/components/mb-ui/fastMarquee';
import { MotionText } from '@/components/mb-ui/motionText';
import { Container } from '@/components/mb-ui/section';
import IllustratorIcon from '/public/images/mondo-bongo/adobeillustrator.svg';
import IndesignIcon from '/public/images/mondo-bongo/adobeindesign.svg';
import PhotoshopIcon from '/public/images/mondo-bongo/adobephotoshop.svg';
import Css3Icon from '/public/images/mondo-bongo/css3.svg';
import ExpressIcon from '/public/images/mondo-bongo/express.svg';
import FramerIcon from '/public/images/mondo-bongo/framer.svg';
import Html5Icon from '/public/images/mondo-bongo/html5.svg';
import JsIcon from '/public/images/mondo-bongo/javascript.svg';
import MongoDbIcon from '/public/images/mondo-bongo/mongodb.svg';
import NextJsIcon from '/public/images/mondo-bongo/nextdotjs.svg';
import PrismaIcon from '/public/images/mondo-bongo/prisma.svg';
import PrismicIcon from '/public/images/mondo-bongo/prismic.svg';
import ReactIcon from '/public/images/mondo-bongo/react.svg';
import ShopifyIcon from '/public/images/mondo-bongo/shopify.svg';
import SketchIcon from '/public/images/mondo-bongo/sketch.svg';
import StrapiIcon from '/public/images/mondo-bongo/strapi.svg';
import TailwindIcon from '/public/images/mondo-bongo/tailwindcss.svg';

const slice = {
    primary: {
        text: 'Oui. Mondo Bongo fait tout ça.',
        as: 'h1',
    },
};

export function HeroWithMarquee() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-end pt-[25vh] text-current">
            <div className="divide-current/20 border-current/20 mb-8 w-full divide-y border-y">
                <FastMarquee autoFill speed={30}>
                    <span className="border-current/20 flex h-10 flex-auto items-center justify-between border-l px-4 py-2">
                        <span className="mr-20 whitespace-nowrap text-xs italic">
                            Front-end —
                        </span>
                        <span className="flex items-center">
                            <span className="flex h-10 items-center  whitespace-nowrap px-4 py-2">
                                <Html5Icon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    {' '}
                                    Html5
                                </span>
                            </span>
                            <span className="flex h-10 items-center  whitespace-nowrap px-4 py-2">
                                <Css3Icon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    {' '}
                                    Css3
                                </span>
                            </span>
                            <span className="flex h-10 items-center whitespace-nowrap px-4 py-2">
                                <JsIcon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    {' '}
                                    Javascript
                                </span>
                            </span>
                            <span className="flex h-10 items-center  whitespace-nowrap px-4 py-2">
                                <ReactIcon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    {' '}
                                    React
                                </span>
                            </span>
                            <span className="flex h-10 items-center  whitespace-nowrap px-4 py-2">
                                <NextJsIcon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    NextJs
                                </span>
                            </span>

                            <span className="flex h-10 items-center whitespace-nowrap px-4 py-2">
                                <TailwindIcon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    {' '}
                                    TailwindCss
                                </span>
                            </span>
                            <span className="flex h-10 items-center  whitespace-nowrap px-4 py-2">
                                <FramerIcon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    {' '}
                                    Framer
                                </span>
                            </span>
                        </span>
                    </span>
                    <span className="border-current/20 flex h-10 flex-auto items-center justify-between border-l px-4 py-2">
                        <span className="mr-20 whitespace-nowrap text-xs italic">
                            Back-end —
                        </span>
                        <span className="flex items-center">
                            <span className="flex h-10 items-center  whitespace-nowrap px-4 py-2">
                                <PrismicIcon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    Prismic
                                </span>
                            </span>
                            <span className="flex h-10 items-center  whitespace-nowrap px-4 py-2">
                                <StrapiIcon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    Strapi
                                </span>
                            </span>
                            <span className="flex h-10 items-center  whitespace-nowrap px-4 py-2">
                                <ShopifyIcon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    Shopify
                                </span>
                            </span>
                            <span className="flex h-10 items-center  whitespace-nowrap px-4 py-2">
                                <ExpressIcon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    Express
                                </span>
                            </span>
                            <span className="flex h-10 items-center  whitespace-nowrap px-4 py-2">
                                <PrismaIcon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    Prisma
                                </span>
                            </span>
                            <span className="flex h-10 items-center  whitespace-nowrap px-4 py-2">
                                <MongoDbIcon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    MongoDb
                                </span>
                            </span>
                        </span>
                    </span>
                    <span className="border-current/20 flex h-10 flex-auto items-center justify-between border-l px-4 py-2">
                        <span className="mr-20 whitespace-nowrap text-xs">
                            PAO —
                        </span>
                        <span className="flex items-center">
                            <span className="  flex h-10  items-center whitespace-nowrap px-4 py-2">
                                <SketchIcon className=" h-6 w-6  fill-current object-cover" />

                                <span className="text-current/70 ml-1 text-xs">
                                    {' '}
                                    Sketch
                                </span>
                            </span>
                            <span className="  flex h-10  items-center whitespace-nowrap px-4 py-2">
                                <IllustratorIcon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    {' '}
                                    Illustrator
                                </span>
                            </span>
                            <span className="  flex h-10  items-center whitespace-nowrap px-4 py-2">
                                <PhotoshopIcon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    {' '}
                                    Photoshop
                                </span>
                            </span>
                            <span className="  flex h-10  items-center whitespace-nowrap px-4 py-2">
                                <IndesignIcon className=" h-6 w-6  fill-current object-cover" />
                                <span className="text-current/70 ml-1 text-xs">
                                    {' '}
                                    Indesign
                                </span>
                            </span>
                        </span>
                    </span>
                </FastMarquee>
                <FastMarquee
                    speed={40}
                    autoFill
                    className="font-serif text-4xl text-current"
                >
                    <span className="border-current/20 block border-l px-4 py-2">
                        Conseils
                    </span>
                    <span className="border-current/20 block border-l px-4 py-2">
                        Identitée visuelle
                    </span>
                    <span className="border-current/20 block border-l px-4 py-2">
                        Livrables print
                    </span>
                    <span className="border-current/20 block border-l px-4 py-2">
                        Design UI/UX
                    </span>
                    <span className="border-current/20 block border-l px-4 py-2">
                        Sites web
                    </span>
                    <span className="border-current/20 block border-l px-4 py-2">
                        E-commerce
                    </span>
                </FastMarquee>
            </div>
            <Container size="wide">
                <MotionText
                    as={slice.primary.title}
                    text={slice.primary.text}
                />
            </Container>
        </div>
    );
}
