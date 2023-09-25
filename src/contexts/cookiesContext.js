'use client';

import { createContext, useEffect, useMemo, useRef, useState } from 'react';

import Cookie from 'js-cookie';

export const cookiesContext = createContext({});

const CookiesProvider = ({ children }) => {
    // this state will be shared with all components
    const [openCookiesPreferences, setOpenCookiesPreferences] = useState(false);
    const [hideCookiesMessage, setHideCookiesMessage] = useState(false);
    const consentRef = useRef({
        completed: false,
        functional_storage: true,
        performance_storage: false,
        ad_storage: false,
    });
    const [consent, setConsent] = useState(consentRef.current);
    useEffect(() => {
        // get the consent cookie if exist or set it
        const consentCookies = Cookie.get('consent') || [null];
        if (consentCookies[0] !== null) {
            const parsedConsent = JSON.parse(consentCookies);
            consentRef.current = parsedConsent;
            setConsent(parsedConsent);
            if (!parsedConsent.completed) {
                setHideCookiesMessage(false);
            }
        } else {
            Cookie.set('consent', JSON.stringify(consentRef.current));
            setHideCookiesMessage(true);
        }
    }, []);

    const CookiesProviderValue = useMemo(
        () => ({
            hideCookiesMessage,
            setHideCookiesMessage,
            openCookiesPreferences,
            setOpenCookiesPreferences,
            consent,
            setConsent,
        }),
        [
            hideCookiesMessage,
            setHideCookiesMessage,
            openCookiesPreferences,
            setOpenCookiesPreferences,
            consent,
            setConsent,
        ],
    );
    return (
        // this is the provider providing state
        <cookiesContext.Provider value={CookiesProviderValue}>
            {children}
        </cookiesContext.Provider>
    );
};

export default CookiesProvider;
