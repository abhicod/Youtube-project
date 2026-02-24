import React, { useEffect , useState } from 'react'
import { API_BASE_URL } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos,setVideos] = useState([]);

  useEffect(() =>{
    getVideos();
  },[]);

  const getVideos = async () => {
   const data = await fetch(API_BASE_URL);
   const response = await data.json();
   setVideos(response.items);
   console.log(videos);
  }  
  

  return (
    <div className='flex flex-wrap gap-6 ml-6 mb-10'>
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`}><VideoCard key={video.id} video={video} /></Link>
      ))}
    </div>
  )
}

export default VideoContainer