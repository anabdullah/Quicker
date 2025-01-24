import React from "react";
import SideBar from "./components/Sidebar/SideBar";
import RightSection from "./components/Chat/RightSection";

const App = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <main className="w-5/6 max-w-[950px] h-5/6 max-h-[700px] bg-neutral-800 rounded-2xl overflow-hidden flex items-center justify-between border border-[#46c2887d]">
        <SideBar />
        <RightSection />
      </main>
    </div>
  );
};

export default App;
