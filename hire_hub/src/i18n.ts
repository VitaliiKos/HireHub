import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import enNs1 from './locales/en/ns1.json';
import uaNs1 from './locales/uk/ns1.json';
import LanguageDetector from 'i18next-browser-languagedetector'

export const defaultNS = 'ns1';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        // debug: true,
        fallbackLng: 'en',
        defaultNS,
        resources: {
            en: {
                ns1: enNs1,
            },
            uk: {
                ns1: uaNs1,
            },
        },
    });

