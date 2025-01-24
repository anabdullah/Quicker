import React from 'react'
import { LuMessageSquare } from 'react-icons/lu'

const FAB = () => {
  return (
    <div className='w-14 h-14 rounded-full bg-green-900 absolute z-10 right-5 bottom-5 flex justify-center items-center cursor-pointer' 
    >
        <LuMessageSquare className='text-white text-xl'/>
    </div>
  )
}

export default FAB