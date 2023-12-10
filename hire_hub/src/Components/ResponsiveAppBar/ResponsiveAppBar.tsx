import {FC} from 'react';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {RouterEndpoints} from "../../routes";
import {NavLink} from "react-router-dom";

import {useTranslation} from "react-i18next";
import {LanguageSwitcher} from "../../Components";
import css from './ResponsiveAppBar.module.css';
import {IMenu, ISettingsMenu, MenuKeys, SettingsMenuKeys} from "../../interfaces";

const pages: IMenu<MenuKeys> = {
    home: {pageUrl: RouterEndpoints.home},
    users: {pageUrl: RouterEndpoints.users},
    companies: {pageUrl: RouterEndpoints.companies},
    about: {pageUrl: RouterEndpoints.about},
}

const settings: ISettingsMenu<SettingsMenuKeys> = {
    profile: {pageUrl: RouterEndpoints.owner_profile},
    account: {pageUrl: RouterEndpoints.account},
    dashboard: {pageUrl: RouterEndpoints.dashboard},
    logout: {pageUrl: RouterEndpoints.logout},
}

const ResponsiveAppBar: FC = () => {

    const {t} = useTranslation();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar
            sx={{
                bgcolor: '#4db6ac',
                maxWidth: 'xl',
                position: "static"
            }}
        >
            <Container>
                <Toolbar disableGutters>
                    <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',

                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {
                                Object.keys(pages).map((page) =>
                                    <MenuItem onClick={handleCloseNavMenu} key={page}>
                                        <Typography textAlign="center" className={css.burgerMenuItem}>
                                            <NavLink
                                                to={pages[page as MenuKeys].pageUrl}>{t(page as MenuKeys)}</NavLink>
                                        </Typography>
                                    </MenuItem>
                                )
                            }

                        </Menu>
                    </Box>
                    <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {
                            Object.keys(pages).map((page) =>
                                <Button
                                    key={page}
                                    className={css.menuItem}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    <NavLink to={pages[page as MenuKeys].pageUrl}>{t(page as MenuKeys)}</NavLink>
                                </Button>
                            )
                        }
                    </Box>
                    <LanguageSwitcher/>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp"
                                        src="https://www.clipartmax.com/png/middle/217-2171074_what-we-have-to-offer-young-man-icon.png"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {
                                Object.keys(settings).map((setting) =>
                                    <MenuItem onClick={handleCloseUserMenu} key={setting}>
                                        <Typography textAlign="center">
                                            {t(setting as SettingsMenuKeys)}
                                        </Typography>
                                    </MenuItem>
                                )
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
        ;
}
export {ResponsiveAppBar};