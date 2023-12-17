import {FC, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {authActions} from "../../Store/slice";
import {RouterEndpoints} from "../../routes";

const ActivateUserPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {uid, token} = useParams<{ uid: string, token: string }>();

    useEffect(() => {
        if (uid && token) {
            dispatch(authActions.activateUser({uid:uid, token:token}))
            navigate(`/${RouterEndpoints.sign_in}`);
        }

    }, [dispatch, token, uid, navigate])
    return (
        <div>
            <h3>ActivateUserPage</h3>

        </div>
    );
};

export {ActivateUserPage};