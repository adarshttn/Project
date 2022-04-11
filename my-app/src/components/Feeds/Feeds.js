import React from "react";
import "./Feeds.css";
import { ThumbUpIcon, ChatAltIcon, ShareIcon } from "@heroicons/react/outline";

export default function Feeds() {
  return (
<<<<<<< HEAD
    <div className="flex flex-col  ">
      <div className="p-7 bg-white mt-5 rounded-t-2xl shadow-sm ">
        <div className=" flex items-center space-x-2">
=======
    <>
      <div className="flex flex-col ">
        <div className="p-7 bg-white mt-5 rounded-t-2xl shadow-sm">
          <div className=" flex items-center space-x-2">
            <img
              className="rounded-full"
              src="https://randomuser.me/api/portraits/women/81.jpg"
              width={40}
              height={40}
              alt=""
            />
            <div>
              <p className="font-medium">Ronald Oilver</p>
              <p className="text-xs text-gray-400">November 16,2021</p>
            </div>
          </div>
          <p className="pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            distinctio minima totam, ducimus, beatae deleniti quia sequi
            molestias voluptatum repellendus magni accusantium error blanditiis
            placeat? Labore unde reprehenderit totam illum.
          </p>
        </div>

        {/* postImage */}
        <div className=" relative  p-8  bg-white">
>>>>>>> 910b2d7ca2dd7d87d3d0a91e0c21589d191fb17e
          <img
            className="rounded-md object-cover "
            src="https://casiocdn.com/casio-v2/resource/temp/images/Artwork-home/oceanus_mobile.jpg"
            alt=""
          />
        </div>

        {/* Footer of post */}
        <div className=" flex  px-12 justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t ">
          <div className="flex flex-col justify-center items-center  ">
            <ThumbUpIcon className="h-6 w-6 " />
            <p className="text-xs  sm:text-base">Like</p>
          </div>

          <div className=" flex flex-col justify-center items-center ">
            <ChatAltIcon className="h-6 w-6 " />
            <p className="test-xs sm:text-base ">Comment</p>
          </div>

          <div className="flex flex-col justify-center items-center  ">
            <ShareIcon className="h-6 w-6" />
            <p className="test-xs sm:text-base ">Share</p>
          </div>
        </div>
<<<<<<< HEAD
        <p className="pt4 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          distinctio minima totam, ducimus, beatae deleniti quia sequi molestias
          voluptatum repellendus magni accusantium error blanditiis placeat?
          Labore unde reprehenderit totam illum.
        </p>
      </div>
      {/* postImage */}
      <div className="  p-8 h-60 md:h-96 bg-white">
        <img className="rounded-md " src="https://casiocdn.com/casio-v2/resource/temp/images/Artwork-home/oceanus_mobile.jpg" alt="" />
      </div>
     <div>
=======
>>>>>>> 910b2d7ca2dd7d87d3d0a91e0c21589d191fb17e

        
      </div>

      {/*  next post */}
      {/* <div className="p-7 bg-white mt-5 rounded-t-2xl shadow-sm">
          <div className=" flex items-center space-x-2">
            <img
              className="rounded-full"
              src="https://randomuser.me/api/portraits/women/81.jpg"
              width={40}
              height={40}
              alt=""
            />
            <div>
              <p className="font-medium">Ronald Oilver</p>
              <p className="text-xs text-gray-400">November 16,2021</p>
            </div>
          </div>
          <p className="pt4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            distinctio minima totam, ducimus, beatae deleniti quia sequi
            molestias voluptatum repellendus magni accusantium error blanditiis
            placeat? Labore unde reprehenderit totam illum.
          </p>
        </div>
        {/* postImage */}
      {/* <div className="relative  p-8 h-60  bg-white">
          <img
            className="rounded-md object-contain "
            src="https://casiocdn.com/casio-v2/resource/temp/images/Artwork-home/oceanus_mobile.jpg"
            alt=""
          />
        </div> */}

      {/* Footer of post */}
<<<<<<< HEAD
      <div className=" rounded-b-2xl bg-white shadow-md text-gray-400 borde-t divide-y border-t items-center">
        <div className="flex justify-between mr-12  ml-12 inputIcon rounded-non rounded-bl-2xl text-s ">

          <div className="flex inputIcon gap-1 ">
          <ThumbUpIcon className="h-4 mt-1" />
          <p className="">Like</p>
          </div>

          <div className="flex inputIcon gap-1">
            <ChatAltIcon className="h-4 mt-1 "/>
            <p className="">Comment</p>
          </div>

          <div className="flex inputIcon gap-1">
            <ShareIcon className="h-4 mt-1"/>
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
=======

      {/* <div className=" flex  px-12 justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t ">
          <div className="flex flex-col justify-center items-center  ">
            <ThumbUpIcon className="h-6 w-6 " />
            <p className="text-xs  sm:text-base">Like</p>
          </div>

          <div className=" flex flex-col justify-center items-center ">
            <ChatAltIcon className="h-6 w-6 " />
            <p className="test-xs sm:text-base ">Comment</p>
          </div>

          <div className="flex flex-col justify-center items-center  ">
            <ShareIcon className="h-6 w-6" />
            <p className="test-xs sm:text-base ">Share</p>
          </div>
        </div> */}
    </>
>>>>>>> 910b2d7ca2dd7d87d3d0a91e0c21589d191fb17e
  );
}
