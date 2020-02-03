import './AppMenuLanguages.scss';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { WithTranslation } from 'react-i18next';
import { SupportedLanguagesFactory } from '../../models/supported-languages/SupportedLanguagesFactory';
import i18next from 'i18next';
import { AppMenuLanguagesState } from './AppMenuLanguagesState';
import { SupportedLanguagesEnum } from '../../models/supported-languages/SupportedLanguages.enum';



export default class AppMenuLanguages extends React.Component<WithTranslation, AppMenuLanguagesState> {
    constructor(props: WithTranslation) {
        super(props);
        this.state = {
            menuOpen: false,
            anchorElement: null
        }
    }

    public handleClose = () => {
        this.setState({
            menuOpen: false,
            anchorElement: null
        })
    };

    public handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        const eventTarget = event.currentTarget
        this.setState(
            {
                menuOpen: true,
                anchorElement: eventTarget
            }
        );
    };

    private getSvgFlag(language: SupportedLanguagesEnum): string {
        const supportedLanguagesFactory = new SupportedLanguagesFactory();
        const flagSvg = supportedLanguagesFactory.getSvgFlag(language);
        return flagSvg;
    }

    private getCurrentSvgFlag(): string {
        const supportedLanguagesFactory = new SupportedLanguagesFactory();
        const currentLanguageString = i18next.language;
        const currentLanguageEnum = supportedLanguagesFactory.getLanguagesEnum(currentLanguageString);
        return this.getSvgFlag(currentLanguageEnum);
    }

    public selectLanguage = (language: string) => {
        i18next.changeLanguage(language);
        this.handleClose();
    }

    public selectFranchLanguage = () => {
        this.selectLanguage(SupportedLanguagesFactory.FrLanguage);
    }

    public selectEnglishLanguage = () => {
        this.selectLanguage(SupportedLanguagesFactory.EnLanguage);
    }

    render() {
        const flagSvg = this.getCurrentSvgFlag();

        const anchorElement = this.state.anchorElement;
        const menuOpen: boolean = (this.state.menuOpen === undefined) ? false : this.state.menuOpen;

        return (
            <div>
                <IconButton
                    onClick={this.handleMenu}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <img src={flagSvg} className="app-menu-languages-flag" alt="logo" />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElement}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={menuOpen}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.selectEnglishLanguage}>
                        <img src={this.getSvgFlag(SupportedLanguagesEnum.En)} className="app-menu-languages-flag" alt="logo" />
                    </MenuItem>
                    <MenuItem onClick={this.selectFranchLanguage}>
                        <img src={this.getSvgFlag(SupportedLanguagesEnum.Fr)} className="app-menu-languages-flag" alt="logo" />
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}