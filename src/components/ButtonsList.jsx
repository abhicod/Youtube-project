import React, { useRef } from "react";
import HeaderButtons from "./HeaderButtons";
import "../index.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ButtonsList = ({isWatchPage}) => {
  const categories = [
    "All",
    "News",
    "Sports",
    "Entertainment",
    "Music",
    "Gaming",
    "Health",
    "Travel",
    "Web Development",
    "AI",
    "Space",
    "Business",
    "Health",
    "Anime",
    "Crypto",
    "Gadgets",
    "Tech",
    "Finance",
    "Health",
    "Politics",
    "Health",
    "78",
    "Gadgets",
    "Tech",
    "Finance",
    "Health",
    "Politics",
    "Health",
  ];

  const scrollRef = useRef(null);

  const scrollRight = () =>{
    scrollRef.current.scrollBy({
      left:300,
      behavior:"smooth"
    })
  }

  const scrollLeft = () =>{
    scrollRef.current.scrollBy({
      left:-300,
      behavior:"smooth"
    })
  }
    return (
    <div ref={scrollRef} className="overflow-x-auto carousel">
      <div  className=" flex whitespace-nowrap items-center gap-1 pl-5  w-10/12 z-10">
        <ChevronLeft size={37} className="absolute left-58 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-500 cursor-pointer transition-all duration-300 ease-in-out z-10 " onClick={scrollLeft} />
      {categories.map((category,index) => {
        return <HeaderButtons key={index} name={category} isFirst={index === 0} isLast={index === categories.length - 1}/>;
      })}
      <ChevronRight size={37} className="absolute right-0 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-500 cursor-pointer transition-all duration-300 ease-in-out" onClick={scrollRight} />
      </div>
    </div>
  );
};

export default ButtonsList;
