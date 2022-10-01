import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "./auth-api";


const user = JSON.parse(localStorage.getItem('user'));


export const authLogin = createAsyncThunk('auth/login', 
    async({email, password}) => {
        try {
            const response = await authAPI.login({email, password});
            return {user: response};  
        } catch (error) {
            console.log(error);
        }
    }
)

export const authLogout = createAsyncThunk('auth/logout',
    async() => {
        await authAPI.logout();
    }
)

const initialState = user? {isLoggedIn: true, user} : {isLoggedIn: false, user: null};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authLogin.fulfilled] : (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [authLogin.rejected] : (state, action) => {
            state.isLoggedIn = null;
            state.user = null;
        },
        [authLogout.fulfilled] : (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    }
})

const { reducer } = authSlice;
export default reducer;