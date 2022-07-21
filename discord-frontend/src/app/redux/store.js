import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from "./slice/authsliceReducer";
import {logger} from "redux-logger/src";

export const store = configureStore({
    reducer: {
        auth: authReducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}).concat(logger),
});
