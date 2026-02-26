
// import React, { useRef } from "react";
// import HeaderButtons from "./HeaderButtons";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const ButtonsList = () => {

//   const categories = [
//     "All","News","Sports","Entertainment","Music",
//     "Gaming","AI","Web Dev","Crypto","Finance",
//     "Anime","Tech","Space","Travel","All","News","Sports","Entertainment","Music",
//     "Gaming","AI","Web Dev","Crypto","Finance",
//     "Anime","Tech","Space","Travel"
//   ];

//   const scrollRef = useRef(null);

//   const scroll = (dir) => {
//     scrollRef.current.scrollBy({
//       left: dir === "left" ? -300 : 300,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="relative w-full mb-2 ">

//       {/* LEFT GRADIENT */}
//       <div className="absolute left-0 top-0 h-full w-16 
//         bg-linear-to-r from-gray-200 to-transparent 
//         z-10 pointer-events-none"
//       />

//       {/* RIGHT GRADIENT */}
//       <div className="absolute right-0 top-0 h-full w-16 
//         bg-linear-to-l from-gray-200 to-transparent 
//         z-10 pointer-events-none"
//       />

//       {/* LEFT BUTTON */}
//       <ChevronLeft
//         size={36}
//         onClick={() => scroll("left")}
//         className="absolute left-2 top-1/2 -translate-y-1/2
//         bg-gray-800 text-white rounded-full p-2
//         cursor-pointer z-20 hover:bg-gray-600"
//       />

//       {/* SCROLL AREA */}
//       <div
//         ref={scrollRef}
//         className="flex gap-2 overflow-x-auto whitespace-nowrap
//         scrollbar-hide px-14 py-1"
//       >
//         {categories.map((category, index) => (
//           <HeaderButtons
//             key={index}
//             name={category}
//             isFirst={index === 0}
//           />
//         ))}
//       </div>

//       {/* RIGHT BUTTON */}
//       <ChevronRight
//         size={36}
//         onClick={() => scroll("right")}
//         className="absolute right-2 top-1/2 -translate-y-1/2
//         bg-gray-800 text-white rounded-full p-2
//         cursor-pointer z-20 hover:bg-gray-600"
//       />
//     </div>
//   );
// };

// export default ButtonsList;

import React, { useRef, useState, useEffect } from "react";
import HeaderButtons from "./HeaderButtons";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ButtonsList = () => {

  const categories = [
    "All","News","Sports","Music","Gaming",
    "AI","Web Dev","Crypto","Finance",
    "Anime","Tech","Space","Travel","All","News","Sports","Music","Gaming",
    "AI","Web Dev","Crypto","Finance",
    "Anime","Tech","Space","Travel"
  ];

  const scrollRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  /* ---------------- SCROLL CHECK ---------------- */
  const checkScroll = () => {
    const el = scrollRef.current;

    setShowLeft(el.scrollLeft > 0);
    setShowRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 5
    );
  };

  useEffect(() => {
    checkScroll();
  }, []);

  /* ---------------- BUTTON SCROLL ---------------- */
  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  /* ---------------- MOUSE WHEEL SCROLL ---------------- */
  const handleWheel = (e) => {
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  /* ---------------- DRAG SCROLL ---------------- */
  let isDown = false;
  let startX;
  let scrollLeft;

  const mouseDown = (e) => {
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const mouseLeave = () => (isDown = false);
  const mouseUp = () => (isDown = false);

  const mouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="sticky z-40 mb-2">

      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 h-full w-16
        bg-linear-to-r from-white to-transparent
        pointer-events-none z-10 rounded-2xl" />

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 h-full w-16
        bg-linear-to-l from-white to-transparent
        pointer-events-none z-10 rounded-2xl" />

      {/* LEFT ARROW */}
      {showLeft && (
        <ChevronLeft
          size={36}
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2
          bg-gray-800 text-white rounded-full p-2
          cursor-pointer z-20 hover:bg-gray-600"
        />
      )}

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        onWheel={handleWheel}
        onMouseDown={mouseDown}
        onMouseLeave={mouseLeave}
        onMouseUp={mouseUp}
        onMouseMove={mouseMove}
        className="flex gap-3 overflow-x-auto whitespace-nowrap
        scrollbar-hide px-5 cursor-grab active:cursor-grabbing"
      >
        {categories.map((cat, i) => (
          <HeaderButtons key={i} name={cat} isFirst={i === 0} />
        ))}
      </div>

      {/* RIGHT ARROW */}
      {showRight && (
        <ChevronRight
          size={36}
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2
          bg-gray-800 text-white rounded-full p-2
          cursor-pointer z-20 hover:bg-gray-600"
        />
      )}
    </div>
  );
};

export default ButtonsList;
