import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";
import {IHealthCheck} from "../../interfaces";
import {healthCheckServices} from "../../services";
import {AxiosError} from "axios";

interface IState {
    errors: string | null,
    res: IHealthCheck | null
    result: string,
    detail: string,
    status_code: number | null,
    postgres_status: boolean,
    redis_status: string
}

const initialState: IState = {
    res: null,
    errors: null,
    result: '',
    detail: '',
    status_code: null,
    postgres_status: false,
    redis_status: ''
}

const getHealthCheck = createAsyncThunk<IHealthCheck>(
    "systemInfoSlice/getHealthCheck",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await healthCheckServices.healthCheck();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.message)
        }

    }
)

const systemInfoSlice = createSlice({
    name: 'systemInfoSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getHealthCheck.fulfilled, (state, action) => {
                const {result, detail, status_code} = action.payload;
                state.result = result
                state.detail = detail
                state.status_code = status_code
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload as string
            })
})

const {reducer: systemInfoReducer, actions} = systemInfoSlice;

const systemInfoAction = {
    ...actions,
    getHealthCheck,
};
export {systemInfoReducer, systemInfoAction}