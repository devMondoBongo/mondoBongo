'use client';

import { useContext, useState } from 'react';

import { cookiesContext } from '@/contexts/cookiesContext';
import Cookie from 'js-cookie';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Modal } from '@/components/mb-ui/modal';

export function CookiesConsent() {
    const {
        hideCookiesMessage,
        setHideCookiesMessage,
        openCookiesPreferences,
        setOpenCookiesPreferences,
        consent,
        setConsent,
    } = useContext(cookiesContext);
    const [storedConsent, setStoredConsent] = useState({ consent });

    // Actions on the cookies message banner
    const denyAll = () => {
        setHideCookiesMessage(true);
    };
    const acceptAll = () => {
        setHideCookiesMessage(true);
    };

    // Actions on the cookies Preferences Modal
    const onChange = (type, value) => {
        const newConsent = {
            ...consent,
            completed: true,
            [`${type}`]: value, // build key/value cookies
        };
        setStoredConsent(newConsent);
        console.log('tempConsent:', storedConsent);
    };
    const onSave = () => {
        Cookie.set('consent', JSON.stringify(storedConsent), { expires: 365 });
    };

    return (
        <>
            {!hideCookiesMessage && (
                <div className="relative flex justify-center py-2">
                    <p className="text-sm text-current">
                        <span className="mr-2 ">
                            <span className="font-semibold">
                                🍪Blah blah blah cookie...
                            </span>
                            Nous Nous utilisons des cookies pour plein de bonnes
                            raisons.
                        </span>
                        <Button variant={'ghost'} onClick={() => denyAll()}>
                            Refuser
                        </Button>
                        <span className="mx-1">|</span>
                        <Button
                            variant={'ghost'}
                            onClick={() =>
                                setOpenCookiesPreferences(
                                    !openCookiesPreferences,
                                )
                            }
                        >
                            Préférences
                        </Button>
                        <span className="mx-1">|</span>
                        <Button variant={'ghost'} onClick={() => acceptAll()}>
                            Accepter
                        </Button>
                    </p>
                </div>
            )}
            <Modal
                variant={'dialog'}
                title={'🍪 Blah blah blah cookie...'}
                open={openCookiesPreferences}
                setOpen={setOpenCookiesPreferences}
            >
                <div className={'mt-8'}>
                    <div className="mb-8 grid gap-8">
                        <div className="flex items-center justify-between space-x-2">
                            <Label
                                htmlFor="functional"
                                className="flex flex-col space-y-1"
                            >
                                <span>Functional Cookies</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    These cookies are necessary for the
                                    operation of the website and allow to
                                    provide personalized functionality like lang
                                    or theme.
                                </span>
                            </Label>
                            <Switch
                                id="functional"
                                defaultChecked={true}
                                onCheckedChange={(checked) =>
                                    onChange('functional_storage', !checked)
                                }
                            />
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                            <Label
                                htmlFor="performance"
                                className="flex flex-col space-y-1"
                            >
                                <span>Performance Cookies</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    These cookies help to improve the
                                    performance of the website
                                </span>
                            </Label>
                            <Switch
                                id="performance"
                                defaultChecked={false}
                                onCheckedChange={(checked) =>
                                    onChange('performance_storage', !checked)
                                }
                            />
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                            <Label
                                htmlFor="add"
                                className="flex flex-col space-y-1"
                            >
                                <span>Add cookies</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    These cookies are essential in order to use
                                    the website and use its features.
                                </span>
                            </Label>
                            <Switch
                                id="add"
                                defaultChecked={false}
                                onCheckedChange={(checked) =>
                                    onChange('add_storage', !checked)
                                }
                            />
                        </div>
                    </div>
                    <div>
                        <Button className="w-full" onClick={() => onSave()}>
                            Save preferences
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
