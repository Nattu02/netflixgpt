import { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice'

const useTopRated = () => {
    const dispatch = useDispatch()
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)
    useEffect(() => {
        !topRatedMovies && getTopRated()
    }, [])

    const getTopRated = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
            options
        )
        const json = await data.json()

        dispatch(addTopRatedMovies(json.results))
    }
}

export default useTopRated
