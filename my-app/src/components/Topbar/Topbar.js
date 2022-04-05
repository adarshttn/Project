import React from 'react'
import './Topbar.css'

export default function Topbar() {
  return (
    <div className='topbar col-span-2 h-9 bg-green-400 h-16 rounded' >
      <div className="flex">
        <div className="flex-none mt-2 ml-3">
          <div className="relative w-12 h-12">
            <img className="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image" />
          </div>
        </div >
        <div className="flex-1 w-full mt-2.5 ml-2 mr-2">
          <div className="relative">
            <div className="absolute top-2 left-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div> <input type="text" className="h-10 w-90 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Start a post..." />

          </div>
        </div>
        <div className="flex p-3 pl-3 w-40 ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className='text-base truncate'>Photo/Video</span>

        </div>
      </div>



    </div>


  )
}