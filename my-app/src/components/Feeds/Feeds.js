import React from "react";

import { ThumbUpIcon, ChatAltIcon, ShareIcon } from "@heroicons/react/outline";


export default function Feeds() {
  return (
    <div className="flex flex-col  ">
      <div className="mt-4 border-none">
        <span className="border-none">Sort By:</span>
        <select className="border-none bg-gray-200 shadow-none"  id="">
          <option value="Top">Top</option>

          <option value="Down">Down</option>
        </select>
      </div>
      <div className="p-7 bg-white mt-5 rounded-t-2xl shadow-sm ">
        <div className="flex">
          <img
            className="rounded-full border w-11 h-11    shadow-sm"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt=""
          />
          <div className="flex flex-col ml-2  mb-2">
            <span className="font-medium">Ronald oliver</span>
            <span className="text-sm">November 21 2021</span>
          </div>
        </div>

        <p className="pt4 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          distinctio minima totam, ducimus, beatae deleniti quia sequi molestias
          voluptatum repellendus magni accusantium error blanditiis placeat?
          Labore unde reprehenderit totam illum.
        </p>
      </div>
      {/* postImage */}
      <div className=" pl-8 pr-8 h-60 md:h-80 bg-white">
        <img
          className="rounded-md "
          src="https://casiocdn.com/casio-v2/resource/temp/images/Artwork-home/oceanus_mobile.jpg"
          alt=""
        />
      </div>

      <div className=" rounded-b-2xl bg-white shadow-md text-gray-400 divide-y border-t items-center">
        <div className="flex justify-between mr-12  ml-12 inputIcon rounded-non rounded-bl-2xl text-s ">
          <div className="flex inputIcon gap-1 ">
            <ThumbUpIcon className="h-4 mt-1" />
            <p className="">Like</p>
          </div>

          <div className="flex inputIcon gap-1">
            <ChatAltIcon className="h-4 mt-1 " />
            <p className="">Comment</p>
          </div>

          <div className="flex inputIcon gap-1">
            <ShareIcon className="h-4 mt-1" />
            <p className="">Share</p>
          </div>
        </div>
        <div
          className="flex  items-center gap-x-2 justify-start  h-16  p-5 
      text-gray-500 font-medium mt-3 "
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
              placeholder="Write a comment..."
            />
          </div>
        </div>
      </div>
      <div className="p-7 bg-white mt-5 rounded-t-2xl shadow-sm ">
        <div className="flex">
          <img
            className="rounded-full border w-11 h-11    shadow-sm"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt=""
          />
          <div className="flex flex-col ml-2  mb-2">
            <span className="font-medium">Ronald oliver</span>
            <span className="text-sm">November 21 2021</span>
          </div>
        </div>

        <p className="pt4 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          distinctio minima totam, ducimus, beatae deleniti quia sequi molestias
          voluptatum repellendus magni accusantium error blanditiis placeat?
          Labore unde reprehenderit totam illum.
        </p>
      </div>
      {/* postImage */}
      <div className=" pl-8 pr-8 h-60 md:h-80 bg-white">
        <img
          className="rounded-md "
          src="https://casiocdn.com/casio-v2/resource/temp/images/Artwork-home/oceanus_mobile.jpg"
          alt=""
        />
      </div>

      <div className=" rounded-b-2xl bg-white shadow-md text-gray-400  items-center">
        <div className="flex justify-between mr-12  ml-12 inputIcon rounded-non rounded-bl-2xl text-s ">
          <div className="flex inputIcon gap-1 ">
            <ThumbUpIcon className="h-4 mt-1" />
            <p className="">Like</p>
          </div>

          <div className="flex inputIcon gap-1">
            <ChatAltIcon className="h-4 mt-1 " />
            <p className="">Comment</p>
          </div>

          <div className="flex inputIcon gap-1">
            <ShareIcon className="h-4 mt-1" />
            <p className="">Share</p>
          </div>
        </div>
        <div
          className="flex  items-center gap-x-2 justify-start  h-16  p-5 
      text-gray-500 font-medium mt-3 "
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
              placeholder="Write a comment..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
