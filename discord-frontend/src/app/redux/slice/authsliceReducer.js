import {createAsyncThunk, createSlice, isAnyOf} from "@reduxjs/toolkit";

import {agent} from "../../api/api";


export const logInUserAsync = createAsyncThunk(
    "auth/LogInUser",
    async ({data}, thunkAPI) => {

        try {
            console.log({data});
            const response = await agent.auth.login(data);
            const {userDetails} = response;
            localStorage.setItem('user', JSON.stringify(userDetails));
            return userDetails;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }

    }
)

export const registerUserAsync = createAsyncThunk(
    "auth/RegisterUserAsync",
    async ({data}, thunkAPI) => {

        try {
            const response = await agent.auth.register(data);
            const {userDetails} = response;
            localStorage.setItem('user', JSON.stringify(userDetails));
            return userDetails;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);

        }

    }
)
export const authSliceReducer = createSlice(
    {
    name: 'Auth',
    initialState: {
        loading: 'idle',
        userDetails: null,
        error: null
    },
    extraReducers: (builder => {

        builder.addMatcher(isAnyOf(logInUserAsync.fulfilled, registerUserAsync.fulfilled), (state, action) => {
            state.userDetails = action.payload;
            state.loading = 'idle';
            state.error = null
        });

        builder.addMatcher(isAnyOf(logInUserAsync.pending, registerUserAsync.pending), (state) => {
            state.loading = 'pending';
        });
        builder.addMatcher(isAnyOf(logInUserAsync.rejected, registerUserAsync.rejected), (state, action) => {
            state.loading = 'idle';
            state.error = action.payload
        })
    })
})
export const authReducer = authSliceReducer.reducer
