import React from "react";
import svgImage from "./svgImage.svg";

const QuickerScreen = () => {
  return (
    <div className="w-full h-full border-l-[0.5px] border-slate-900 flex flex-col gap-3 text-slate-300 justify-center items-center bg-black">
      <div className={`svg-area max-w-1/2 flex justify-center items-center`}>
        <img src={svgImage} alt="svg-image" className="w-1/3 h-auto" draggable={false} />
      </div>
      <h1 className="text-3xl font-semibold text-green-400 mt-5">Quicker</h1>
      <span className="text-gray-400 opacity-70 text-sm">
        Quick and secure messaging service
      </span>
    </div>
  );
};

export default QuickerScreen;
