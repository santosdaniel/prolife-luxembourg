import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Redirect } from 'react-router-dom';
import './AppMenuLinks.scss';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(1),
        },
    }),
);


export default function AppMenuLinks(state: any) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);

    const [redirectUrl, setRedirectUrl] = React.useState<null | string>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        console.log("test")
        setAnchorEl(null);
    };

    const redirectToPage = (newUrl: string) => {
        setAnchorEl(null);
        setRedirectUrl(newUrl);
    }

    const redirectHome = () => {
        redirectToPage('/')
    }

    const redirectLinks = () => {
        redirectToPage('/links')
    }

    const redirectComponent = redirectUrl ? (
        <Redirect to={redirectUrl} />) : null;

    return (
        <div>
            {redirectComponent}
            <IconButton onClick={handleMenu} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon>
                </MenuIcon>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
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
                onClose={handleClose}
            >
                <MenuItem onClick={redirectHome}>Home</MenuItem>
                <MenuItem onClick={redirectLinks}>Links</MenuItem>
            </Menu>
        </div>
    );
}