import { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerKey } from '../utils/moviesSlice'

const useVideoBackGround = (movieId) => {
    const dispatch = useDispatch()
    const trailerKey = useSelector((store) => store.movies.trailerKey)
    const getMovieTrailer = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/' +
                movieId +
                '/videos?language=en-US',
            options
        )
        const json = await data.json()
        const videos = json.results
        const trailer = videos.filter((video) => video.type === 'Trailer')

        const trailerKey = trailer.length
            ? trailer[trailer.length - 1].key
            : videos[0].key
        dispatch(addTrailerKey(trailerKey))
    }

    useEffect(() => {
        !trailerKey && getMovieTrailer()
    }, [])
}

export default useVideoBackGround
