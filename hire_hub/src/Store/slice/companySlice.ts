import {createSlice} from "@reduxjs/toolkit";

interface IState {
}

const initialState: IState = {};

export const companySlice = createSlice({
    name: 'companySlice',
    initialState,
    reducers: {}

});

const {reducer: companyReducer, actions} = companySlice;

const companyActions = {
    ...actions
}

export {companyActions, companyReducer}