const VideoTitle = (props) => {
    const { title, overview } = props
    return (
        <div className="mt-[30%] md:mt-0 absolute mx-5 w-screen md:w-1/3  md:top-2/5 md:left-1/15 text-white">
            <h1 className="text-2xl md:text-4xl font-bold ">{title}</h1>
            <p className="hidden md:block md:font-bold md:text-xl my-5 text-justify">{overview}</p>
            <div className="my-5 md:mt-0">
                <button className="md:px-7 px-3 py-0.5 md:py-2 bg-white mr-5 rounded-md cursor-pointer font-bold text-black">
                    Play
                </button>
                <button className="md:px-7 px-3 py-1 md:py-2 bg-[rgba(0,0,0,0.7)] mr-5 rounded-md cursor-pointer font-bold ">
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle
