import {FC} from 'react';
import {Outlet} from "react-router-dom";

import {FooterPage} from "../../Pages";
import {ResponsiveAppBar} from "../../Components";
import css from './mainLayout.module.css';

const MainLayout: FC = () => {
    return (
        <div className={css.wrapper}>
            <ResponsiveAppBar/>
            <Outlet/>
            <FooterPage/>
        </div>
    );
};

export {MainLayout};