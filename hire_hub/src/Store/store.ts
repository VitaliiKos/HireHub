import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {companyReducer, systemInfoReducer, authReducer} from "./slice"


const rootReducer = combineReducers({
    companyReducer,
    systemInfoReducer,
    authReducer,
})

export const mainStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof mainStore>
export type AppDispatch = AppStore["dispatch"]