import {FC, ReactElement} from 'react';
import {Navigate} from 'react-router-dom';

import {useAppSelector} from "../hooks";
import {authService} from "../services";
import {RouterEndpoints} from "../routes";

interface IProps {
    children: ReactElement
}

const RequiredAuth: FC<IProps> = ({children}) => {
    const {me} = useAppSelector(state => state.authReducer);
    if (!me && !authService.getAccessToken()) {
        return <Navigate to={`/${RouterEndpoints.sign_in}`}/>
    }

    return children
};

export {RequiredAuth};