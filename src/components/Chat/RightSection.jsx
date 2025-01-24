import React from 'react'
import Navbar from './Navbar'
import ChatArea from './ChatArea'

const RightSection = () => {
  return (
    <div className='w-full h-full border-l-[0.5px] border-slate-900'>
      <Navbar/>
      <ChatArea/>
    </div>
  )
}

export default RightSection