import { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const popularMovies = useSelector((store) => store.movies.popularMovies)
    useEffect(() => {
        !popularMovies && getPopularMovies()
    }, [])

    const getPopularMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?&page=150',
            options
        )
        const json = await data.json()
        dispatch(addPopularMovies(json.results))

        // console.log(json.results)
    }
}

export default usePopularMovies
