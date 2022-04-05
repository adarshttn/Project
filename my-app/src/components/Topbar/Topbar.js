import React from 'react'
import './Topbar.css'

export default function Topbar() {
  return (
    <>
      <div
        className="flex items-center gap-x-2 justify-start topbar h-16 bg-white p-5 rounded-2xl shadow-2xl
      text-gray-500 font-medium mt-6"
      >
        <div className="">
          <img
            className="rounded-full border w-11 h-11    shadow-sm"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-grow ">
          <input
            className="h-10 w-full px-10 pl-10  rounded-fully rounded-full bg-gray-100 focus:outline-none "
            type="text"
            placeholder="Start a post..."
          />
        </div>
        <div className="flex items-center justify-center">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="   ">Photo/Video</span>
        </div>
      </div>
    </>
  );
}

