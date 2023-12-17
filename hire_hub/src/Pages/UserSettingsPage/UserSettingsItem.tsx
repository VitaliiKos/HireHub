import React, {FC, useEffect} from 'react';
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {NavLink} from "react-router-dom";
import css from "./userSetting.module.css";

interface IProps {
    translate: string
    handleCloseUserMenu: () => void
    logOut?: React.MouseEventHandler<HTMLAnchorElement>
    item_url: string
}

const UserSettingsItem: FC<IProps> = ({translate, handleCloseUserMenu, logOut, item_url}) => {
    useEffect(() => {

    }, [logOut]);

    return (
        <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center" className={css.menuSettingsItem}
            >
                {logOut ?
                    <NavLink to={item_url} onClick={logOut}>{translate}</NavLink> :
                    <NavLink to={item_url}>{translate}</NavLink>
                }
            </Typography>
        </MenuItem>
    );
};

export {UserSettingsItem};