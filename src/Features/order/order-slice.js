import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import orderAPI from './order-api';


export const getAllOrder = createAsyncThunk("admin/getAllOrder",
    async ({currentPage}, thunkAPI) => {
        try {
            const response = await orderAPI.getAllOrder({currentPage});
            return response.data
        }
        catch (err) {
            return thunkAPI.rejectWithValue();
        }
    }
)

export const updateOrder = createAsyncThunk("admin/updateOrder",
    async (id, thunkAPI) => {
        try {
            const response = await orderAPI.updateOrder(id);
            return response.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue();
        }
    }
)

export const getOrderReport = createAsyncThunk("admin/getOrderReport", 
    async ({from, until}, thunkAPI) => {
        try {
            const response = await orderAPI.getOrderReport({from, until});
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    }
)


//daftar semua state yang akan dipakai, didaftarkan nilai defaultnya
const initialState = {
    orderList: [],
    orderReport: null
}
const orderSlice = createSlice({
    name: "order",
    initialState,
    extraReducers: {
        [getAllOrder.fulfilled]: (state, action) => {
            state.orderList = action.payload;
        },
        [getAllOrder.rejected]: (state, action) => {
            state.orderList = [];
        },
        [getOrderReport.fulfilled]: (state, action) => {
            state.orderReport = action.payload;
        },
        [getOrderReport.rejected]: (state, action) => {
            state.orderReport = null;
        }

    }
});
const { reducer, actions } = orderSlice;
export default reducer;