import { Menu, Bell, Search, User2, Mic } from 'lucide-react';
import React from 'react'

 const Header = () => {
  return (
    <div className='flex justify-between py-6 px-6 bg-gray-100 shadow-lg'>
        <div className='flex items-center gap-5 pl-2'>
            <div><Menu /></div>
            <div className='w-20'><img src="https://imgs.search.brave.com/j5mgu_8cgf9zCKXVzmb8j9-c3HxvaE0Zn5MzOepjoSE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy95b3V0dWJlLTIu/c3Zn" alt="youtube-logo" /></div>
        </div>
        <div className='flex items-center w-5/11 justify-between ' >
            <div className='flex items-center justify-between gap-2 border border-gray-800 rounded-l-full w-full '>
            <input type="text" placeholder='Search ' className='pl-6 py-2 w-full border-r-0 focus:outline-none ' /> 
        </div>
        <div className='cursor-pointer bg-gray-200 hover:text-gray-800 py-2 px-5 rounded-r-full border border-gray-800 border-l-0 '>
                <Search  size={24}/>
            </div>
        <div className=' cursor-pointer hover:text-gray-800 hover:bg-gray-200 rounded-full p-2 transition-colors duration-200 ml-4'>
            <Mic size={25}/>
        </div>
        </div>
        
        <div className='flex items-center justify-center gap-1 text-2xl'>
            <Bell className='cursor-pointer hover:text-gray-800 hover:bg-gray-200 rounded-full p-2  transition-colors duration-200 text-7xl' size={40}/>    
            <User2 className='cursor-pointer hover:text-gray-800 hover:bg-gray-200 rounded-full p-2 transition-colors duration-200 text-7xl' size={40}/>
            
        </div>
    </div>
  )
}

export default Header;
