import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate } from "../utils/helper";


const LiveChat = () => {

  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  
  const sendFormData = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Abhishek",
        message: message,
      }),
    );
    setMessage("");
  };

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: "this is the chat message",
        }),
      );
    }, 5000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
    <div className="w-full flex flex-col">
      <div className="flex gap-2 items-center pb-3">
        <h1 className="font-bold text-2xl pl-1 ">Live Chat</h1>
        <ChevronDown className="mt-1 hover:rotate-180 transition-transform duration-200 cursor-pointer" />
      </div>

      {/* ✅ SCROLL + REVERSE HERE */}
      <div
        className="border w-full h-[500px] rounded-xl bg-slate-100 
                  overflow-y-auto flex flex-col-reverse p-2"
      >
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
    </div>
    <form className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg mt-2" onSubmit= {sendFormData}>
      <input type="text" placeholder="Type your message" className="flex-1 bg-transparent outline-none pl-2" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Send</button>
    </form>
    </>
  );
};

export default LiveChat;
