import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SectionTitle from '../section-title/SectionTitle';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: 25
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export default function MenuAppBar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);


    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        console.log("test")
        setAnchorEl(null);
    };

    const redirectToPage = (newUrl: string) => {
        const tWindow = window as any
        tWindow.location = newUrl
    } 

    const redirectHome = () => {
        redirectToPage('/')
    } 

    const redirectLinks = () => {
        redirectToPage('/links')
    } 

    const redirectAbout = () => {
        redirectToPage('http://wwww.sapo.pt')
    } 

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton onClick={handleMenu} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon>
                        </MenuIcon>
                    </IconButton>
                    <SectionTitle title="My first react app"></SectionTitle>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
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
                            <MenuItem onClick={redirectAbout}>About</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}