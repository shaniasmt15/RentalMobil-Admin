import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import messageReducer, { setMessage } from '../auth/message-slice';
import carsAPI from './cars-api';

//ini adalah action
export const getAllCars = createAsyncThunk("cars/getAll", 
    async(args, thunkAPI) => {
        try{
            const response = await carsAPI.getAllCars();
            thunkAPI.dispatch(setMessage('cars berhasil')); 
            console.log(response)
            return response.data
        }
        catch(err){
            const message = err.response.statusText || err.message.data || err.message || err.message.toString();
            if(message.includes('Unauthorized')){
                // localStorage.removeItem("user");
            }
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

const initialState= {
    mobil : null,
    films :null,
}

const carsSlice = createSlice({
    name : "cars",
    initialState,
    extraReducers : {
        [getAllCars.fulfilled] : (state, action) => {
            state.mobil = action.payload;
        },
        [getAllCars.rejected] : (state, action) => {
            state.mobil = null;
        }
    },
});

const {reducer} = carsSlice;
export default reducer;