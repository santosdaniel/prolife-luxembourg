import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SectionTitle from '../section-title/SectionTitle';
import MenuAppLinks from '../menu-app-links/MenuAppLinks';
import { WithTranslation } from 'react-i18next';
import './MenuAppBar.scss';


export default class MenuAppBar extends React.Component<WithTranslation> {
    


    render() {
        const applicationTitle = this.props.t('app.title');

        return (
            <div className="Root">
                <AppBar position="fixed">
                    <Toolbar>
                        <MenuAppLinks />
                        <SectionTitle title={applicationTitle}></SectionTitle>
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}