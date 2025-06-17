import { NOWPLAYING_MOVIES, options } from '../utils/constants'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getNowPlayingMovies()
    }, [])

    const getNowPlayingMovies = async () => {
        const data = await fetch(NOWPLAYING_MOVIES, options)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }
}

export default useNowPlayingMovies
