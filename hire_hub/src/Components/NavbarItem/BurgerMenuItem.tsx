import React, {FC} from 'react';
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {NavLink} from "react-router-dom";

import css from './navBarItem.module.css';

interface IProps {
    handleCloseNavMenu: React.MouseEventHandler<HTMLLIElement>
    item_url: string
    translate: string
}

const BurgerMenuItem: FC<IProps> = ({handleCloseNavMenu, item_url, translate}) => {
    return (

        <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center" className={css.burgerMenuItem}>
                <NavLink to={item_url}>{translate}</NavLink>
            </Typography>

        </MenuItem>

    );
};

export {BurgerMenuItem};