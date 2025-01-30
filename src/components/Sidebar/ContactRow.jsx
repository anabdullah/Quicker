import React from "react";

const ContactRow = ({ userImage, number, contactName, lastMasg, fn }) => {

  return (
    <div className="row py-3 px-4 flex gap-4 transition-all ease-in-out cursor-pointer justify-between items-center hover:bg-[#060706]" onClick={()=>{fn()}}>
      <div className="profile w-12 h-12 rounded-full overflow-hidden cursor-pointer border border-slate-600">
        <img src={userImage} alt={contactName} />
      </div>
      <div className="info-block w-80 ">
        <h2 className="text-lg">{contactName}</h2>
        <div className="message-block flex w-full items-center justify-between opacity-70">
          <p className="w-fit max-w-[80%] overflow-hidden text-nowrap text-sm">{lastMasg}</p>
          <p className="text-xs">3:48PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactRow;
