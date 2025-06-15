import useVideoBackGround from '../hooks/useVideoBackground'
import { useSelector } from 'react-redux'

const VideoBackground = ({ movieId }) => {
    useVideoBackGround(movieId)

    const trailerKey = useSelector((store) => store.movies.trailerKey)

    return (
        <div>
            <h1>video background</h1>
            <iframe
                width="560"
                height="315"
                src={
                    'https://www.youtube.com/embed/' +
                    trailerKey +
                    '?si=tALvuwAlNXzReHEY'
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default VideoBackground
