

import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {

  const [searchParams] =  useSearchParams();


  return (
    <div className="flex flex-col">
      <div className="px-5 flex gap-5 ">
        <div>
          <iframe className="rounded-xl" width="1000" height="550" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
