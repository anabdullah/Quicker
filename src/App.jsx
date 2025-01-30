import React, { useState } from "react";
import SideBar from "./components/Sidebar/SideBar";
import RightSection from "./components/Chat/RightSection";
import QuickerScreen from "./components/Chat/QuickerScreen";

const App = () => {
 const [person, setperson] = useState(null)
  function clickHandler(peopleName){
    setperson(peopleName)
  }
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <main className="w-5/6 max-w-[950px] h-5/6 max-h-[700px] bg-neutral-800 rounded-2xl overflow-hidden flex items-center justify-between border border-[#46c2887d]">
        <SideBar fn={clickHandler} />
{
  person===null?<QuickerScreen/>:<RightSection chatTitle={person} />
  
}
      </main>
    </div>
  );
};

export default App;
