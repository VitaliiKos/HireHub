import {FC} from 'react';
import {Routes, Route} from "react-router-dom"

import {MainLayout} from "./Layouts";
import {RequiredAuth} from "./hoc";
import {RouterEndpoints} from "./routes";
import {AboutPage, ActivateUserPage, CompaniesListPage, HomePage, NotFoundPage, UsersListPage} from "./Pages";
import {SignIn, SighUp} from "./Components";

const App: FC = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={RouterEndpoints.index} index element={<HomePage/>}/>
                    <Route path={RouterEndpoints.sign_in} element={<SignIn/>}/>
                    <Route path={RouterEndpoints.sign_up} element={<SighUp/>}/>
                    <Route path={RouterEndpoints.about} element={<AboutPage/>}/>

                    <Route path={RouterEndpoints.users} element={
                        <RequiredAuth>
                            <UsersListPage/>
                        </RequiredAuth>}/>

                    <Route path={RouterEndpoints.companies} element={
                        <RequiredAuth>
                            <CompaniesListPage/>
                        </RequiredAuth>}/>

                    <Route path={`${RouterEndpoints.activate}/:uid/:token`} element={<ActivateUserPage/>}/>
                    <Route path={RouterEndpoints.notFound} element={<NotFoundPage/>}/>

                </Route>
            </Routes>

        </div>
    );
};

export {App};