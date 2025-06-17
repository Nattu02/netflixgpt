import useVideoBackGround from '../hooks/useVideoBackground'
import { useSelector } from 'react-redux'

const VideoBackground = ({ movieId }) => {
    useVideoBackGround(movieId)

    const trailerKey = useSelector((store) => store.movies.trailerKey)

    return (
        <div>
            <iframe
                className="w-screen h-screen"
                src={
                    'https://www.youtube.com/embed/' +
                    trailerKey +
                    '?rel=0?autoplay=0&mute=1'
                }
            ></iframe>
        </div>
    )
}

export default VideoBackground
