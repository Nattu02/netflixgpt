import useVideoBackGround from '../hooks/useVideoBackground'
import { useSelector } from 'react-redux'

const VideoBackground = ({ movieId }) => {
    useVideoBackGround(movieId)

    const trailerKey = useSelector((store) => store.movies.trailerKey)

    return (
        <div className='w-screen'>
            <iframe
                className="w-screen aspect-video"
                src={
                    'https://www.youtube.com/embed/' +
                    trailerKey +
                    '?autoplay=1&mute=1?rel=0&modestbranding=1&showinfo=0&controls=1'
                }
            ></iframe>
        </div>
    )
}

export default VideoBackground
