import { User2 } from 'lucide-react'


const ChatMessage = ({name, message}) => {
  return (
    <div>
        <div className='flex gap-2 mt-1 pl-1 py-2 hover:bg-slate-200 rounded-xl cursor-pointer'>
            <User2  />
            <h3 className='font-semibold text-sm mr-1 '>@{name}</h3>
            <p className='text-sm'>{message}</p>
        </div>
    </div>
  )
}

export default ChatMessage