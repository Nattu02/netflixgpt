const VideoTitle = (props) => {
    const { title, overview } = props
    return (
        <div className="absolute w-1/3  top-1/3 left-1/15 text-white">
            <h1 className="text-3xl font-bold ">{title}</h1>
            <p className="font-bold my-5 text-justify">{overview}</p>
            <div>
                <button className="px-7 py-2 bg-white mr-5 rounded-md cursor-pointer font-bold text-black">
                    Play
                </button>
                <button className="px-7 py-2 bg-[rgba(0,0,0,0.7)] mr-5 rounded-md cursor-pointer font-bold ">
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle
