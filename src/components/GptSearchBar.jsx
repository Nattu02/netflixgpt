import { Link, useNavigate } from 'react-router'
import { LOGO_URL, options } from '../utils/constants'
import { useRef } from 'react'
import openai from '../utils/openai'
import { useDispatch } from 'react-redux'
import {
    addMovieList,
    addMovieResults,
    clearGptPage,
} from '../utils/gptSlice'

const GptSearchBar = () => {
    const searchText = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const searchTmdb = async (movie) => {
        const movieresult = await fetch(
            'https://api.themoviedb.org/3/search/movie?query=' +
                movie +
                '&include_adult=false&language=en-US&page=1',
            options
        )
        const json = await movieresult.json()

        return json.results
    }
    // searchTmdb('magadheera')

    const handleGptSearch = async () => {
        const query =
            'Give me 10 movies for the topic ' +
            searchText.current.value +
            ". The response should be only the name of movies comma separated, without any additional content. No numbers, no bulletpoints. Example: 'A, The B, C for chocolate, D, Elemental, Fight, Go, Hero, Ion, John'"

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
        })

        const moviesLits = gptResults?.choices[0]?.message?.content.split(', ')

        dispatch(addMovieList(moviesLits))

        const promiseArray = moviesLits.map((movie) => searchTmdb(movie))

        const tmdbresults = await Promise.all(promiseArray)

        // console.log(tmdbresults)
        dispatch(addMovieResults(tmdbresults))
    }

    const handleCloseBtn = () => {
        navigate('/browse')
        dispatch(clearGptPage())
    }

    return (
        <div>
            <button
                onClick={handleCloseBtn}
                className="absolute top-5 right-5 px-1 py-0 text-sm font-bold md:font-bold text-black bg-white md:py-1 md:px-3 rounded-md border-2 border-white z-20 cursor-pointer"
            >
                X
            </button>
            <div className="bg-gradient-to-b from-black w-full z-10">
                <img src={LOGO_URL} alt="Logo" className="w-60 py-5 px-5 mx-auto md:mx-0 " />
            </div>

            <div className="w-4/5 bg-black mx-auto rounded-md md:w-1/2">
                <form
                    className="grid grid-cols-4"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        ref={searchText}
                        type="text"
                        placeholder="What do you want to watch today?"
                        className="col-span-3 p-2 my-2 ml-3 text-sm md:text-lg border-1 border-black rounded-md bg-white md:p-3"
                    ></input>
                    <button
                        className="col-span-1 bg-red-600 p-2 m-2  rounded-md md:font-bold md:text-xl text-white cursor-pointer"
                        onClick={handleGptSearch}
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    )
}

export default GptSearchBar
