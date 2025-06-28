import { useEffect } from 'react'
import { options } from '../utils/constants'
import openai from '../utils/openai'
import { useDispatch } from 'react-redux'
import { addMovieList, addMovieResults } from '../utils/gptSlice'

const useTmdbsearch = (movieName) => {
    useEffect(() => {
        fetchMovieData()
    }, [])

    const dispatch = useDispatch()

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

    const fetchMovieData = async () => {
        const query =
            'Give me 10 movies for the topic ' +
            movieName +
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
}

export default useTmdbsearch
