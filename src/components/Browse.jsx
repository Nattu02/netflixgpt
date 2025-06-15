import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainComponent from './MainContainer'
import SecondaryComponent from './SecondaryContainer'

const Browse = () => {
    useNowPlayingMovies() //fetching now playing movies using a custom hook

    return (
        <div>
            <Header />
            <MainComponent />
            <SecondaryComponent />
        </div>
    )
}

export default Browse
