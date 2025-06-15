import { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrailerKey } from '../utils/moviesSlice'

const useVideoBackGround = (movieId) => {
    const dispatch = useDispatch()
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

        const trailerKey = trailer.length ? trailer[0].key : videos[0].key
        dispatch(addTrailerKey(trailerKey))
    }

    useEffect(() => {
        getMovieTrailer()
    }, [])
}

export default useVideoBackGround
