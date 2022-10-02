import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Features/auth/auth-slice';
import authMessage from './Features/auth/message-slice'

export default configureStore({
    reducer: {
        auth: authReducer,
        message: authMessage,
    },
})