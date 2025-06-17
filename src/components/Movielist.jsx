import MovieCard from './MovieCard'

const Movielist = ({ title, movies }) => {
    return (
        <div className="p-4 text-white">
            <h1 className="text-xl font-bold mb-2 px-1">{title}</h1>
            <div className="flex overflow-x-auto space-x-4 no-scrollbar">
                {movies &&
                    movies.map((movie) => (
                        <div key={movie.id} className="flex-shrink-0">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Movielist
