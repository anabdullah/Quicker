import React from "react";
import { TbCircleCheckFilled } from "react-icons/tb";

const Message = ({ type }) => {
  return (
    <div
      className={`w-fit max-w-[60%] p-2 m-2 rounded-xl flex flex-col
    ${
      type === "incoming"
        ? "bg-transparent rounded-bl-none border border-slate-800 text-green-100"
        : "text-green-600 border border-green-950 bg-neutral-900 self-end rounded-br-none"
    }
    `}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate
        libero repudiandae molestiae iure error?
      </p>
      <div className="masg-itime self-end flex gap-2 items-center">
        <span className="text-green-100 text-xs opacity-50 mt-1">3:48PM</span>
        {
          type==='outgoing'?(
            <div className="flex">
              <TbCircleCheckFilled className="text-green-200 text-[14px]" />
              <TbCircleCheckFilled className="text-green-600 text-[14px] -ml-1" />
            </div>
          ):null
        }
      </div>
    </div>
  );
};

export default Message;
