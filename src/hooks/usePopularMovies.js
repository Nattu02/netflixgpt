import { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'

const usePopularMovies = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getPopularMovies()
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
