import {FC, useEffect} from 'react';
import {systemInfoAction} from "../../Store/slice";
import {useAppDispatch, useAppSelector} from "../../hooks";

const HealthCheck: FC = () => {
    const dispatch = useAppDispatch();
    const {result, detail, status_code, errors} = useAppSelector(state => state.systemInfoReducer);

    useEffect(() => {
        dispatch(systemInfoAction.getHealthCheck())
    }, [dispatch])

    return (
        <div>
            <div>
                <h3>Health Check endpoint</h3>
                <h4>Result: {result}</h4>
                <h4>Detail: {detail}</h4>
                <h4>Status_code: {status_code}</h4>
            </div>
            <div>
                {errors &&
                <h4>{errors}</h4>
                }
            </div>
        </div>
    );
};

export {HealthCheck};