import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Features/auth/auth-slice';

export default configureStore({
    reducer: {
        auth: authReducer,
    }
})