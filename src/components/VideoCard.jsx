import { ThumbsUp } from "lucide-react";
import React from "react";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, thumbnails, channelTitle } = snippet;
  const { viewCount, likeCount } = statistics;
  return (
    <div className=" p-3 hover:shadow-xl hover:cursor-pointer hover:bg-gray-200 rounded-xl transition-all duration-200 ease-in-out hover:scale-101">
      <div className="">
        <div className="">
          <img
            src={thumbnails.high.url}
            alt="video images"
            className="w-90 rounded-xl h-50 object-cover mb-3"
          />
        </div>
        <div className="">
          <p className="text-md font-semibold overflow-x-hidden line-clamp-2 w-90">
            {title}
          </p>
          <p className="text-gray-600 text-md mb-2">{channelTitle}</p>
          <div className="flex items-center gap-4">
            <p className="text-gray-800 text-sm flex items-center gap-1"> <ThumbsUp size={18} color="gray"/>{likeCount}</p>
            <p className="text-gray-800 text-sm flex items-center gap-1">{viewCount} Views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
