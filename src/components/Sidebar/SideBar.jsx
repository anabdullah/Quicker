import React from 'react'
import ChatNav from './ChatNav'
import Contacts from './Contacts'
import FAB from './FAB'

const SideBar = () => {
  return (
    <div className='bg-[#010102] basis-1/3 h-full text-gray-300 relative'>
      <ChatNav/>
      <Contacts/>
      <FAB/>
    </div>
  )
}

export default SideBar