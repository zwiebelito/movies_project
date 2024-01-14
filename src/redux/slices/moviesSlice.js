import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService as movieService, moviesService} from "../../services/moviesService";
import {progressActions} from "./progressSlice";

const initialState = {
    page: null,
    movies: [],
    with_genres: '',
    searchByName: '',
    total_pages: null
};

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            thunkAPI.dispatch(progressActions.setIsLoading(true))
            /*await new Promise(resolve => setTimeout(resolve, 1000))*/
            const {data} = await moviesService.getAll(page);
            return data
        } catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {
            thunkAPI.dispatch(progressActions.setIsLoading(false))
        }
    }
)

const getById = createAsyncThunk(
    'moviesSlice/getById',
    async (id, thunkAPI) => {
        try {
            thunkAPI.dispatch(progressActions.setIsLoading(true))
            const {data} = await moviesService.getById(id)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {
            thunkAPI.dispatch(progressActions.setIsLoading(false))
        }
    }
)

const getGenreID = createAsyncThunk(
    'movieSlice/getGenreID',
    async ({with_genres,page}, thunkAPI)=>{
        try {
            thunkAPI.dispatch(progressActions.setIsLoading(true))
            const {data} = await movieService.getGenreID(with_genres, page);
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }finally {
            thunkAPI.dispatch(progressActions.setIsLoading(false))
        }
    }
)

const getSearch = createAsyncThunk(
    'moviesSlice/getSearch',
    async ({page, name}, thunkAPI) => {
        try {
            const {data} = await moviesService.getSearch(name, page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    });

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {page, results} = action.payload;
            state.page = page;
            state.movies = results
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.movie = action.payload
        })
        .addCase(getGenreID.fulfilled,(state, action)=>{
            const {page, results} = action.payload;
            state.page = page;
            state.movies = results
        })
        .addCase(getSearch.fulfilled, (state, action) => {
            const {total_pages, results, page} = action.payload;
            state.total_pages = total_pages;
            state.searchByName = results;
            state.page = page;
        })
})

const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {
    getAll, getById, getGenreID, getSearch
}

export {
    moviesReducer,
    moviesActions
}