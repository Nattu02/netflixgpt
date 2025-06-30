import { useSelector } from 'react-redux'
import { BG_URL } from '../utils/constants'
import GptSearchBar from './GptSearchBar'
import Movielist from './Movielist'

const GptSearch = () => {
    const gptResult = useSelector((store) => store.gpt.movieResults)
    const movies = useSelector((state) => state.gpt.movieList)
    return (
        <div>
            <img
                src={BG_URL}
                alt="Background image"
                className="fixed -z-10 top-0"
            />
            <GptSearchBar />
            <div className=" bg-[rgba(0,0,0,0.7)] mt-20">
                {gptResult &&
                    gptResult.map((arr, index) => (
                        <Movielist
                            key={index}
                            title={movies[index]}
                            movies={arr}
                        />
                    ))}
            </div>
        </div>
    )
}

export default GptSearch
