import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import frTranslations from "./translations/fr.json";
import enTranslations from "./translations/en.json";

i18next.init({
    react: {
        useSuspense: false
    },
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
        resources: {
            en: {
                'translations': enTranslations //name of the property registred in the app.tsx
            },
            de: {
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
