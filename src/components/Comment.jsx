import { User2 } from "lucide-react";

const Comment = ({ data }) => {

  const {name , comment, replies} = data;

  return (
    <div >
      <div className=" flex gap-3 justify-start items-center bg-gray-100 rounded-lg p-2 mb-2 border-b border-gray-400 ">
        <User2
          className="cursor-pointer hover:text-gray-80 bg-gray-200  rounded-full p-2 transition-colors duration-200 text-7xl"
          size={42}
        />
        <div>
          <h1 className="font-semibold text-lg">{name}</h1>
          <p className="text-md">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
