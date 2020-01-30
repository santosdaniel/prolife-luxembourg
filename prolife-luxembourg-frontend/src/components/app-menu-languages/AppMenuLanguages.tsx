import './AppMenuLanguages.scss';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { WithTranslation } from 'react-i18next';

export default class AppMenuLanguages extends React.Component<WithTranslation> {
    render() {
        return (
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
        );
    }
}