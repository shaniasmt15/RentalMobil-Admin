import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import messageReducer, { setMessage } from '../auth/message-slice';
import carsAPI from './cars-api';

//ini adalah action
export const getAllCars = createAsyncThunk("cars/getAll", 
    async({page}, thunkAPI) => {
        try{
            const response = await carsAPI.getAllCars(page);
            thunkAPI.dispatch(setMessage('Success get all Cars!')); 
            console.log(response.data, "response")
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

//https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1666422126976-mobil.png?alt=media

export const postCars = createAsyncThunk('cars/postCars',
    async(args, thunkAPI) => {

        try {

            const response = await carsAPI.createCars(args)
            thunkAPI.dispatch(setMessage("Success create new Cars!"))

            console.log(response, '<== Slice Post')

            return response
            
        } catch (err) {
            const message = err.response.statusText || err.message.data || err.message || err.message.toString();
            if(message.includes('Unauthorized')){
                // localStorage.removeItem("user");
            }
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
            
        }
    }

)

export const deleteCars = createAsyncThunk('cars/deleteCars',
    async(args,  thunkAPI) => {
        try {

            const response = await carsAPI.deleteCars(args)
            thunkAPI.dispatch(setMessage("Success create new Cars!"))

            // console.log(response, '<== Slice Post')

            return response
            
        } catch (err) {
            const message = err.response.statusText || err.message.data || err.message || err.message.toString();
            if(message.includes('Unauthorized')){
                // localStorage.removeItem("user");
            }
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
            
        }
    }
)

export const getById = createAsyncThunk('cars/getById', 

    async(id, thunkAPI) => {

        try {

            const response = await carsAPI.getCarById(id)
            thunkAPI.dispatch(setMessage("Success Get detail Cars!"))

            // console.log(response, '<== Slice Id')

            return response
            
        } catch (err) {
            const message = err.response.statusText || err.message.data || err.message || err.message.toString();
            if(message.includes('Unauthorized')){
                // localStorage.removeItem("user");
            }
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
            
            
        }
    }
)

export const updateCars = createAsyncThunk('cars/updateCars', 

    async(data, thunkAPI) => {

        try {

            console.log(data, 'SLICE')

            const response = await carsAPI.editCars(data)
            thunkAPI.dispatch(setMessage("Success Edit Cars!"))

            console.log(response, '<== Slice Edit')

            return response
            
        } catch (err) {
            const message = err.response.statusText || err.message.data || err.message || err.message.toString();
            if(message.includes('Unauthorized')){
                // localStorage.removeItem("user");
            }
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
            
            
        }
    }
)





const initialState= {
    mobil : null,
    pageCount: null,
    films :null,
}

const carsSlice = createSlice({
    name : "cars",
    initialState,
    extraReducers : {
        [getAllCars.fulfilled] : (state, action) => {
            state.mobil = action.payload.cars;
            state.pageCount = action.payload.pageCount
        },
        [getAllCars.rejected] : (state, action) => {
            state.mobil = null;
        },
        [postCars.fulfilled] : (state, action) => {
            state.mobil = action.payload.data
        },
        [postCars.rejected] : (state, action) => {
            state.mobil = null
        },
        [deleteCars.fulfilled] : (state, action) => {
            state.mobil = action.payload
        },
        [deleteCars.rejected] : (state, action) => {
            state.mobil = null
        },
        [getById.fulfilled] : (state, action) => {
            state.mobil = action.payload.cars
        },
        [getById.rejected] : (state, action) => {
            state.mobil = null
        },
        [updateCars.fulfilled] : (state, action) => {
            state.mobil = action.payload.cars
        },
        [updateCars.rejected] : (state, action) => {
            state.mobil = null
        },
    },
});


const {reducer} = carsSlice;
export default reducer;