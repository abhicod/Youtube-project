import React from 'react'
import ChatMessage  from './ChatMessage'
import { ChevronDown } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generate } from '../utils/helper'
const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    console.log(chatMessages);

    useEffect(() =>{
        const i = setInterval(() =>{

        dispatch(addMessage(
           {
            name : generate(),
            message : "this is the chat message"
           }
        ));
        },2000);

        return () =>{
            clearInterval(i)
        }
    },[]);


  return (
    <div className='w-full flex flex-col'>
  
  <div className='flex gap-2 items-center pb-1'>
    <h1 className='font-bold text-2xl pl-1 '>
      Live Chat
    </h1>
    <ChevronDown className='mt-4'/>
  </div>

  {/* ✅ SCROLL + REVERSE HERE */}
  <div className='border w-full h-[500px] rounded-xl bg-slate-100 
                  overflow-y-auto flex flex-col-reverse p-2'>

    {
      chatMessages.map((c, index) => (
        <ChatMessage
          key={index}
          name={c.name}
          message={c.message}
        />
      ))
    }

  </div>
</div>

  )
}

export default LiveChat