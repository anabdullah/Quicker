import React from "react";
import image from "../Sidebar/ProfileImages/image.jpg";
import { BiArrowBack } from "react-icons/bi";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";

const Navbar = ({chatTitle}) => {
  return (
    <div className="w-full h-[10%] bg-[#040b08] py-2 px-3 flex items-center gap-4">
      <div className="left-block flex items-center gap-2">
        <BiArrowBack className="text-white" />
        <div className="profile w-10 h-10 rounded-full overflow-hidden cursor-pointer border border-slate-400">
          <img src={image} alt="contact profile" />
        </div>
      </div>
      <div className="right-block text-white w-full flex justify-between items-center">
        <div className="contact-n-status">
            <h1 className="text-lg">{chatTitle}</h1>
            <p className="text-xs opacity-60 text-[#58ffb4]">Online</p>
        </div>
        <BsThreeDotsVertical  className=" cursor-pointer"/>
      </div>
    </div>
  );
};

export default Navbar;
