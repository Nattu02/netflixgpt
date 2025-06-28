import { createSlice } from '@reduxjs/toolkit'

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        movieList: null,
        movieResults: null,
        gptPageOpenStatus: false,
    },
    reducers: {
        addMovieList: (state, action) => {
            state.movieList = action.payload
        },
        addMovieResults: (state, action) => {
            state.movieResults = action.payload
        },
        clearGptPage: (state) => {
            state.movieResults = null
        },
    },
})

export const { addMovieList, addMovieResults, clearGptPage } = gptSlice.actions

export default gptSlice.reducer
