import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces/user.interface";
import {IErrorAuth} from "../../interfaces/error.interface";

interface IState {
    error: IErrorAuth | null,
    me: IUser | null
    token_status: boolean
}

const initialState: IState = {
    error: null,
    me: null,
    token_status: false
}


const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
})

const {reducer: authReducer, actions} = authSlice
const authActions = {
    ...actions,
}

export {authActions, authReducer}