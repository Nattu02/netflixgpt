import { useDispatch, useSelector } from 'react-redux'
import { options } from '../utils/constants'
import { addTrendingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

const useTrendingMovies = () => {
    const dispatch = useDispatch()
    const trendingMovies = useSelector((store) => store.movies.trendingMovies)
    useEffect(() => {
        !trendingMovies && getTrendingMovies()
    }, [])
    const getTrendingMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/trending/movie/day',
            options
        )
        const json = await data.json()

        dispatch(addTrendingMovies(json.results))
    }
}

export default useTrendingMovies
