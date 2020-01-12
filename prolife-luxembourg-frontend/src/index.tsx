import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { universalLanguageDetect } from '@unly/universal-language-detector';
import frTranslations from "./translations/fr.json";
import enTranslations from "./translations/en.json";

const languageOfBrowser = universalLanguageDetect({
    supportedLanguages: ["en", "fr"], // Whitelist of supported languages, will be used to filter out languages that aren't supported
    fallbackLanguage: "en", // Fallback language in case the user's language cannot be resolved
    errorHandler: (error) => { // Optional - Use you own logger here, Sentry, etc.
      console.log('Was not possible to detect the language of the user error handler:');
      console.error(error);
    },
  });


i18next.init({
    react: {
        useSuspense: false
    },
    interpolation: { escapeValue: false },  // React already does escaping
    lng: languageOfBrowser,                              // language to use
        resources: {
            en: {
                'translations': enTranslations //name of the property registred in the app.tsx
            },
            fr: {
                'translations': frTranslations
            },
        },
});

const rootComponent = document.getElementById('root');
ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>
    , rootComponent
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
