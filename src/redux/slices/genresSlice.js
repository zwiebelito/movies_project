import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {progressActions} from "./progressSlice";
import {genresService} from "../../services";


const initialState = {
    genres: []
}

const getAll = createAsyncThunk(
    'genresSlice/getAll',
    async (_, thunkAPI) => {
        try {
            thunkAPI.dispatch(progressActions.setIsLoading(true))
            const {data} = await genresService.getAll()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {
            thunkAPI.dispatch(progressActions.setIsLoading(false))
        }
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {genres} = action.payload;
            state.genres = genres;
        })
})

const {reducer: genresReducer, actions} = genresSlice;

const genresActions = {
    ...actions,
    getAll
}

export {
    genresActions,
    genresReducer
}