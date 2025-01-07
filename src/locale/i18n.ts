/* eslint-disable @typescript-eslint/ban-ts-comment */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'

const resources = {
    en: {
        translation: en
    },
    // and more langs
}

let defaultLocale = localStorage.getItem('locale')

if (defaultLocale === null) {
    localStorage.setItem('locale', 'en')
    defaultLocale = localStorage.getItem('locale')
}

i18n.use(initReactI18next)
    //@ts-ignore
    .init({
        resources,
        lng: defaultLocale,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n