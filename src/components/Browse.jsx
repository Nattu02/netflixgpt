import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRated from '../hooks/useTopRated'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'

const Browse = () => {
    useNowPlayingMovies() //fetching now playing movies using a custom hook
    usePopularMovies()
    useTopRated()
    useUpcomingMovies()
    useTrendingMovies()

    return (
        <div className=''>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse
