
const VideoFullContainer = (props) => {
    return (
        <video loop muted autoPlay className="video_container">
            <source src={ props.ruta}/>
        </video>
    )
}

export default VideoFullContainer
