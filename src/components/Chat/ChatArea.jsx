import React from "react";
import { BiSolidSend } from "react-icons/bi";
import { BsEmojiLaughing } from "react-icons/bs";
import image from "../Sidebar/ProfileImages/image.jpg";
import Info from "./Info";
import Message from "./Message";

const ChatArea = () => {
  return (
    <div className="w-full h-[90%] bg-[#000] bg-cover">
      <div
        className="message-area h-[92%] w-full flex flex-col gap-3 overflow-y-scroll"
      >
        <div className=" mt-16 mb-2 profile-view w-24 h-24 rounded-full overflow-hidden cursor-pointer border-2 border-green-400 justify-self-center self-center flex-shrink-0">
          <img src={image} alt="contact profile" />
        </div>
        <Info />
        <Message type={"incoming"} />
        <Message type={"outgoing"} />
        <Message type={"outgoing"} />
        <Message type={"incoming"} />
        <Message type={"incoming"} />
        <Message type={"incoming"} />
        <Message type={"outgoing"} />
        <Message type={"outgoing"} />
        <Message type={"outgoing"} />
        <Message type={"incoming"} />
        <Message type={"incoming"} />
        <Message type={"outgoing"} />
        <Message type={"incoming"} />
        <Message type={"outgoing"} />
        <Message type={"incoming"} />
        <Message type={"incoming"} />
        <Message type={"outgoing"} />
        <Message type={"incoming"} />
      </div>
      <div className="typing-area h-[8%] bg-w-full flex items-center justify-between px-6 bg-[#010102] text-white border-t-[0.5px] border-slate-900">
        <BsEmojiLaughing className="text-xl text-green-600" />
        <input
          type="text"
          placeholder="Write a message.."
          className="w-[90%] h-8 bg-transparent rounded-full px-4 outline-none"
        />
        <div className="button w-8 h-8  flex items-center justify-center">
          <BiSolidSend className="text-2xl text-green-600" />
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
