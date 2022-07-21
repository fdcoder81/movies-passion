import {useEffect, useState} from "react";

export const Trailers = (videos) => {
    const [trailers, setTrailers] = useState([])

    useEffect(() => {
        setTrailers(videos.videos)
    }, [videos, trailers])


    const trailerItem = trailers.map(video => {
        let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div className="card mb-4" key={video.id.videoId}>
                <div className="embed-responsive embed-responsive-16by9 d-flex justify-content-center">
                    <iframe
                        title={video.snippet.title}
                        className="embed-responsive-item"
                        src={videoSrc}
                        allowFullScreen
                    />
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <p className="mb-0">{video.snippet.title}</p>
                </div>
            </div>
        );
    });

    return (
        <>
            {
                !trailers.length ? (<div>No Trailers</div>) : <div className="trailers">{trailerItem}</div>
            }
        </>
    )

};