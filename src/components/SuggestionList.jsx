import { Search } from 'lucide-react'
import React, { useState } from 'react'

const SuggestionList = ({suggestions, showSuggestionList, setShowSuggestionList}) => {
 

  return (
    <div className="flex items-center justify-center">
        {showSuggestionList && (
          <div className="fixed top-14 z-10 w-4/11 rounded-xl bg-gray-50 shadow-lg">
          <ul className='rounded-xl'>
            {suggestions.map((suggestion) =>(
                <li key={suggestion} className=' py-2 px-5 flex rounded-xl items-center gap-1 hover:bg-gray-200 hover:scale-98 transition-all cursor-pointer '><Search size={16}/>{suggestion} </li>
            ))}
          </ul>
        </div>
        )}
    </div>
  )
}

export default SuggestionList