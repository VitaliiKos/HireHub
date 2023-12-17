import {FC, useEffect} from 'react';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';

import {useTranslation} from "react-i18next";
import {RouterEndpoints} from "../../routes";
import {UserSettingsPage} from "../../Pages";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authActions} from "../../Store/slice";
import {BurgerMenuItem, LanguageSwitcher, NavbarItem} from "../../Components";


const ResponsiveAppBar: FC = () => {

    const {me} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();


    const {t} = useTranslation();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    useEffect(() => {
        if (!me) {
            dispatch(authActions.me())
        }
    }, [me])

    return (
        <AppBar
            sx={{
                bgcolor: '#4db6ac',
                width: 'xl',
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
                            <BurgerMenuItem handleCloseNavMenu={handleCloseNavMenu} item_url={RouterEndpoints.home}
                                            key={RouterEndpoints.home} translate={t('home')}/>
                            <BurgerMenuItem handleCloseNavMenu={handleCloseNavMenu} item_url={RouterEndpoints.about}
                                            key={RouterEndpoints.about} translate={t('about')}/>
                            <BurgerMenuItem handleCloseNavMenu={handleCloseNavMenu} item_url={RouterEndpoints.users}
                                            key={RouterEndpoints.users} translate={t('users')}/>
                            <BurgerMenuItem handleCloseNavMenu={handleCloseNavMenu} item_url={RouterEndpoints.companies}
                                            key={RouterEndpoints.companies} translate={t('companies')}/>
                            {!me &&
                                <BurgerMenuItem handleCloseNavMenu={handleCloseNavMenu}
                                                item_url={RouterEndpoints.sign_in}
                                                key={RouterEndpoints.sign_in} translate={t('sign_in')}/>
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
                        <NavbarItem handleCloseNavMenu={handleCloseNavMenu} item_url={RouterEndpoints.home}
                                    key={RouterEndpoints.home} translate={t('home')}/>
                        <NavbarItem handleCloseNavMenu={handleCloseNavMenu} item_url={RouterEndpoints.about}
                                    key={RouterEndpoints.about} translate={t('about')}/>
                        {me &&
                            <>
                                <NavbarItem handleCloseNavMenu={handleCloseNavMenu} item_url={RouterEndpoints.users}
                                            key={RouterEndpoints.users} translate={t('users')}/>
                                <NavbarItem handleCloseNavMenu={handleCloseNavMenu} item_url={RouterEndpoints.companies}
                                            key={RouterEndpoints.companies} translate={t('companies')}/>
                            </>
                        }
                    </Box>

                    <LanguageSwitcher/>

                    {me ? <UserSettingsPage/> :
                        <NavbarItem handleCloseNavMenu={handleCloseNavMenu} item_url={RouterEndpoints.sign_in}
                                    key={RouterEndpoints.sign_in} translate={t('sign_in')}/>
                    }

                </Toolbar>
            </Container>
        </AppBar>
    )
        ;
}
export {ResponsiveAppBar};