import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {authService} from "../../services";
import {IActivationData, IErrorAuth, ILoginUser, IRegisterUser, IUser} from "../../interfaces";

interface IState {
    error: IErrorAuth | null,
    me: IUser | null
    token_status: boolean
    trigger: boolean,
}

const initialState: IState = {
    error: null,
    me: null,
    token_status: false,
    trigger: false,
}
const registerUser = createAsyncThunk<void, IRegisterUser>(
    'authSlice/register',
    async (user, {rejectWithValue}) => {
        try {
            await authService.registerUser(user);
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)
const login = createAsyncThunk<IUser, ILoginUser>(
    'authSlice/login',
    async (used_data, {rejectWithValue}) => {
        try {
            return await authService.login(used_data);
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)

const activateUser = createAsyncThunk<void, IActivationData>(
    'authSlice/activateUser',
    async ({uid, token}, {rejectWithValue}) => {
        try {
            const {data} = await authService.activationUser({uid, token});
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const me = createAsyncThunk<IUser, void>(
    'authSlice/me',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await authService.me();
            return data;

        } catch (e) {
            const err = e as AxiosError;
            // return rejectWithValue(err.response?.data);
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        delete_me: (state) => {
            state.me = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.me = action.payload;
                state.error = null;
            })
            .addCase(me.fulfilled, (state, action) => {
                state.me = action.payload;
                state.error = null;

            })
            .addMatcher(isFulfilled(login, registerUser, me), state => {
                state.trigger = !state.trigger
                state.error = null;
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload as IErrorAuth;
            })
    }
});

const {reducer: authReducer, actions} = authSlice
const authActions = {
    ...actions,
    registerUser,
    login,
    activateUser,
    me,
}

export {authActions, authReducer}