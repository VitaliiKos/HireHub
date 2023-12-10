import {FC} from 'react';
import {Routes, Route} from "react-router-dom"
import {MainLayout} from "./Layouts";
import {RouterEndpoints} from "./routes";
import {AboutPage, CompaniesListPage, HomePage, NotFoundPage, UsersListPage} from "./Pages";

const App: FC = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={RouterEndpoints.index} index element={<HomePage/>}/>
                    <Route path={RouterEndpoints.about} element={<AboutPage/>}/>
                    <Route path={RouterEndpoints.users} element={<UsersListPage/>}/>
                    <Route path={RouterEndpoints.companies} element={<CompaniesListPage/>}/>
                    <Route path={RouterEndpoints.notFound} element={<NotFoundPage/>}/>

                </Route>
            </Routes>

        </div>
    );
};

export {App};