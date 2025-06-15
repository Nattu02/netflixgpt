const VideoTitle = (props) => {
    const { title, overview } = props
    return (
        <div>
            <h1>{title}</h1>
            <p>{overview}</p>
        </div>
    )
}

export default VideoTitle
