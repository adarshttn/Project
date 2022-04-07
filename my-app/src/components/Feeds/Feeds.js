import React from "react";
import {ChatAltIcon, ShareIcon,ThumbUpIcon} from "@heroicons/react/outline"
import "./Feeds.css";

function Feeds() {
  return (
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
        <p className="pt4">
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

      {/* Footer of post */}
      <div className="flex rounded-b-2xl bg-white shadow-md text-gray-400 borde-t">
        <div className="inputIcon rounded-non rounded-bl-2xl">

          <div className="inputIcon">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
          </div>

          <div className="inputIcon">
            <ChatAltIcon className="h-4 "/>
            <p className="test-xs sm:text-base">Comment</p>
          </div>

          <div className="inputIcon">
            <ShareIcon className="h-4"/>
            <p className="test-xs sm:text-base">Share</p>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Feeds;
