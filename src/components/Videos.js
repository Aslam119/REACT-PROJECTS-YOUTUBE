import React, { useEffect, useState } from 'react'
import "../styles/videos.css"

function Videos() {
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        fetch("https://youtube-v31.p.rapidapi.com/search?channelId=UClb90NQQcskPUGDIXsQEz5Q&part=snippet%2Cid&maxResults=48", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "fd594f3563msh3d486a0bb27d35bp10467ajsn23bb828965ec",
		"x-rapidapi-host": "youtube-v31.p.rapidapi.com"
	}
    })
    .then(res=>res.json())
    .then(data=>{
        setVideos(data.items)
    })
    .catch(err => {
        console.error(err);
    });
    },[])
    return (
        <div className="video-section" style={{paddingLeft:"5rem"}}>
            {videos.map(video=>(
                <div className="video">
                <img src={video.snippet.thumbnails.medium.url}></img>
                {video.id.videoId&&<a href={"https://www.youtube.com/watch?v="+`${video.id.videoId}`}>{video.snippet.title}</a>}
                {video.id.playlistId&&<a href={"https://www.youtube.com/watch?v="+`${video.id.playlistId}`}>{video.snippet.title}</a>}
                <a href={"https://www.youtube.com/c/"+video.snippet.channelTitle}>{video.snippet.channelTitle}</a>
                </div>
            ))}
        </div>
    )
}

export default Videos
