
import React from 'react'
import { ChevronRight, Clock4, Download, Gamepad, History, Lightbulb, ListVideo, Music, Newspaper, Podcast, Popcorn, Radio, SquarePlay, ThumbsUp, Trophy } from 'lucide-react'

const SideBarCategories = () => {
  return (
    <div className='w-full'>
        <h1 className='flex items-center justify-start pl-7 font-semibold text-xl py-4'>You <ChevronRight /></h1>
        <ul className='flex flex-col justify-center items-center text-md border-b border-gray-200 pb-4'>
            <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 rounded-xl w-full justify-start pl-10 text-lg'><History />History</li>
            <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 rounded-xl w-full justify-start pl-10 text-lg'><ListVideo />Playlists</li>
            <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 rounded-xl w-full justify-start pl-10 text-lg'><Clock4 />Watch later</li>
            <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 rounded-xl w-full justify-start pl-10 text-lg'><ThumbsUp />Liked videos</li>
            <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 rounded-xl w-full justify-start pl-10 text-lg'><SquarePlay />Your videos</li>
            <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 rounded-xl w-full justify-start pl-10 text-lg'><Download />Downloads</li>
        </ul>
        <h1 className='flex items-center justify-start pl-7 font-semibold text-xl py-4'>Explore <ChevronRight /></h1>
        <ul className='flex flex-col justify-center items-center text-md'>
            <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 rounded-xl w-full justify-start pl-10 text-lg'><Music />Music</li>
            <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 rounded-xl w-full justify-start pl-10 text-lg'><Popcorn />Films</li>
            <li className='flex gap-2 items-center hover:bg-gray-100 py-2 rounded-xl w-full justify-start pl-10 text-lg'><Radio />Live</li>
            <li className='flex gap-2 items-center hover:bg-gray-100 py-2 rounded-xl w-full justify-start pl-10 text-lg'><Gamepad />Gaming</li>
            <li className='flex gap-2 items-center hover:bg-gray-100 py-2 rounded-xl w-full justify-start pl-10 text-lg'><Newspaper />News</li>
            <li className='flex gap-2 items-center hover:bg-gray-100 py-2 rounded-xl w-full justify-start pl-10 text-lg'><Trophy />Sport</li>
            <li className='flex gap-2 items-center hover:bg-gray-100 py-2 rounded-xl w-full justify-start pl-10 text-lg'><Lightbulb />Learning</li>
            <li className='flex gap-2 items-center hover:bg-gray-100 py-2 rounded-xl w-full justify-start pl-10 text-lg mb-10'><Podcast />Podcasts</li>
        </ul>
    </div>
  )
}

export default SideBarCategories