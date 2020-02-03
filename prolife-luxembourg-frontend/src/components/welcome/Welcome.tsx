import React from 'react';

import logo from './../../logo.svg';
import './Welcome.scss';
import { Trans, WithTranslation } from 'react-i18next';


export class Welcome extends React.Component<WithTranslation> {

    render() {
        const { t } = this.props;
        const applicationTitle = t('app.title');
        const welcomeString = t('welcome.title', { title: applicationTitle });

        return (
            <div>
                <img src={logo} className="welcome-app-logo" alt="logo" />
                <h1 className="welcome-app-title">
                    {welcomeString}
                </h1>
                <Trans i18nKey='welcome.intro'></Trans>
            </div>
        )
    }
}