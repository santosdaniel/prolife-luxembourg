import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Redirect } from 'react-router-dom';
import { WithTranslation } from 'react-i18next';
import { AppMenuLinksState } from './AppMenuLinksState';
import './AppMenuLinks.scss';


export default class AppMenuLinks extends React.Component<WithTranslation, AppMenuLinksState> {

    constructor(props: WithTranslation) {
        super(props);
        this.state = {
            menuOpen: false,
            anchorElement: null,
            redirectUrl: null
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

    private redirectToPage = (newUrl: string) => {
        this.handleClose();
        this.setState({
            redirectUrl: newUrl
        });
    }

    public redirectHome = () => {
        this.redirectToPage('/')
    }

    public redirectLinks = () => {
        this.redirectToPage('/links')
    }

    public render() {
        const redirectUrl = this.state.redirectUrl;
        const anchorElement = this.state.anchorElement;
        const menuOpen: boolean = (this.state.menuOpen === undefined) ? false : this.state.menuOpen;

        const redirectComponent = redirectUrl ? (
            <Redirect to={redirectUrl} />) : null;

        return (
            <div>
                {redirectComponent}
                <IconButton onClick={this.handleMenu} edge="start" className="menu-button" color="inherit" aria-label="menu">
                    <MenuIcon>
                    </MenuIcon>
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
                    <MenuItem onClick={this.redirectHome}>Home</MenuItem>
                    <MenuItem onClick={this.redirectLinks}>Links</MenuItem>
                </Menu>
            </div>
        );
    }
}