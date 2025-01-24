import React from 'react'
import { HiMenuAlt3, HiOutlineUserGroup } from 'react-icons/hi'
import { MdOutlineFavoriteBorder, MdOutlineMarkUnreadChatAlt } from 'react-icons/md'

const ChatNav = () => {
  return (
    <div className='h-[20%] p-4 flex flex-col justify-between bg-[#010302]'>
      <div className="top-bar flex justify-between items-center w-full">
      <h1 className='text-2xl font-semibold'>Quicker</h1>
      <HiMenuAlt3 className=' cursor-pointer'/>
      </div>
      <div className="tabs flex gap-6 w-full overscroll-x-scroll">
        <div className="flex items-center gap-1 tab bg-neutral-950 py-1 px-3 rounded-3xl border border-slate-800 cursor-pointer">
        <MdOutlineMarkUnreadChatAlt className='text-green-400'/>
          Unread</div>
        <div className="flex items-center gap-1 tab bg-neutral-950 py-1 px-3 rounded-3xl border border-slate-800 cursor-pointer">
          <HiOutlineUserGroup className='text-green-400'/>
          Groups</div>
        <div className="flex items-center gap-1 tab bg-neutral-950 py-1 px-3 rounded-3xl border border-slate-800 cursor-pointer">
          <MdOutlineFavoriteBorder className='text-green-400'/>
          Favorites</div>
      </div>
    </div>
  )
}

export default ChatNav