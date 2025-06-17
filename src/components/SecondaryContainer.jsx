import { useSelector } from 'react-redux'
import Movielist from './Movielist'

const SecondaryContainer = () => {
    const nowPlayingMovies = useSelector(
        (store) => store.movies.nowPlayingMovies
    )
    const popularMovies = useSelector((store) => store.movies.popularMovies)
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies)

    return (
        <div className="bg-black">
            <div className="-mt-92">
                <Movielist title={'Now Playing'} movies={nowPlayingMovies} />
                <Movielist title={'Popular Movies'} movies={popularMovies} />
                <Movielist title={'Top Rated Movies'} movies={topRatedMovies} />
                <Movielist title={'Upcoming Movies'} movies={upcomingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer
