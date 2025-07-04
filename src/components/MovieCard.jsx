const MovieCard = ({ movie }) => {
    const { title, backdrop_path } = movie
    // console.log(movie)

    if (!backdrop_path) return null

    return (
        <div className="relative ">
            <h1 className="absolute bottom-2 left-2 text-md md:text-2xl font-bold text-white">
                {title}
            </h1>
            <img
                alt="Movie poster"
                src={'https://image.tmdb.org/t/p/w300/' + backdrop_path}
                className="w-[150px]  md:w-[250px] h-[170px] md:h-[200px] rounded-lg"
            />
        </div>
    )
}

export default MovieCard
