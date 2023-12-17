import React, {FC} from 'react';
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";

import {useTranslation} from "react-i18next";
import {RouterEndpoints} from "../../routes";
import {UserSettingsItem} from "./UserSettingsItem";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";
import {authActions} from "../../Store/slice";
import {useAppDispatch} from "../../hooks";


const UserSettingsPage: FC = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logOut = () => {
        authService.deleteTokens()
        dispatch(authActions.delete_me())
        navigate(RouterEndpoints.sign_in);
    }
    return (
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
                <UserSettingsItem translate={t('profile')} handleCloseUserMenu={handleCloseUserMenu}
                                  item_url={RouterEndpoints.owner_profile}/>
                <UserSettingsItem translate={t('account')} handleCloseUserMenu={handleCloseUserMenu}
                                  item_url={RouterEndpoints.account}/>
                <UserSettingsItem translate={t('dashboard')} handleCloseUserMenu={handleCloseUserMenu}
                                  item_url={RouterEndpoints.dashboard}/>
                <UserSettingsItem translate={t('logout')} handleCloseUserMenu={handleCloseUserMenu} logOut={logOut}
                                  item_url={RouterEndpoints.sign_in}/>
            </Menu>
        </Box>

    );
};

export {UserSettingsPage};