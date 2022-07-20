import {createSlice} from "@reduxjs/toolkit";

export const authSliceReducer = createSlice({
    name: 'Auth',
    initialState: {
        userDetails: null
    }
})

export const authReducer = authSliceReducer.reducer
