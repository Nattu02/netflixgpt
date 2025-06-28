import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trendingMovies: null,
        trailerKey: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerKey: (state, action) => {
            state.trailerKey = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload
        },
    },
})

export const {
    addNowPlayingMovies,
    addTrailerKey,
    addPopularMovies,
    addTopRatedMovies,
    addUpcomingMovies,
    addTrendingMovies,
} = moviesSlice.actions

export default moviesSlice.reducer
