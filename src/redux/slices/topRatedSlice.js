import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {progressActions} from "./progressSlice";
import {moviesService} from "../../services";


const initialState = {
    topRatedMovies: []
}

const getTopRated = createAsyncThunk(
    'moviesSlice/getTopRated',
    async (_, thunkAPI) => {
        try {
            thunkAPI.dispatch(progressActions.setIsLoading(true))
            /*await new Promise(resolve => setTimeout(resolve, 1000))*/
            const {data} = await moviesService.getTopRated();
            return data
        } catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {
            thunkAPI.dispatch(progressActions.setIsLoading(false))
        }
    }
)

const topRatedSlice = createSlice({
    name: 'topRatedSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getTopRated.fulfilled, (state, action) => {
            const {results} = action.payload;
            state.topRatedMovies = results;
        })
})

const {reducer: topReducer, actions} = topRatedSlice;

const topActions = {
    ...actions,
    getTopRated
}

export {
    topReducer,
    topActions
}