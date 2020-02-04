import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SectionTitle from '../section-title/SectionTitle';
import { WithTranslation } from 'react-i18next';
import AppMenuLinks from '../app-menu-links/AppMenuLinks';
import AppMenuLanguages from '../app-menu-languages/AppMenuLanguages';
import './AppMenuBar.scss';


export default class AppMenuBar extends React.Component<WithTranslation> {

    render() {
        const applicationTitle = this.props.t('app.title');

        return (
            <div className="root">
                <AppBar position="fixed">
                    <Toolbar>
                        <AppMenuLinks
                            i18n={this.props.i18n}
                            tReady={this.props.tReady}
                            t={this.props.t}
                        />
                        <SectionTitle title={applicationTitle}></SectionTitle>
                        <AppMenuLanguages
                            i18n={this.props.i18n}
                            tReady={this.props.tReady}
                            t={this.props.t}
                        />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}