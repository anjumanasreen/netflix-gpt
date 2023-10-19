const VideoTitle = ({title,overview}) => {
    
    return(
        <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
            <h1 className="font-bold text-6xl">{title}</h1>
            <p className="text-lg w-1/4 py-6">{overview}</p>
            <div>
                <button className="bg-white text-black rounded p-4 px-10 text-xl hover:bg-opacity-80"> ▶️ Play</button>
                <button className="mx-2 bg-gray-400 opacity-[0.6] text-white rounded p-4 px-8 text-xl bg-opacity-50 hover:bg-opacity-80"> ℹ️ More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle