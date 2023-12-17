import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";

import css from './navBarItem.module.css';

interface IProps {
    handleCloseNavMenu: React.MouseEventHandler<HTMLButtonElement>
    item_url: string
    translate: string
}

const NavbarItem: FC<IProps> = ({handleCloseNavMenu, item_url, translate}) => {

    return (
        <Button
            className={css.menuItem}
            onClick={handleCloseNavMenu}
            sx={{my: 2, color: 'white', display: 'block'}}
        >
            <NavLink to={item_url}>{translate}</NavLink>
        </Button>);
};

export {NavbarItem};