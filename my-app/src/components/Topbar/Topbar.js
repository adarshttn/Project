import React from 'react'
import { PhotographIcon } from "@heroicons/react/outline";


export default function Topbar() {

  const selectMedia = () => {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dwtse2bnt",
        uploadPreset: "my_preset",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
    myWidget.open();
  };
  return (
    
    <div className="w-full">
      <div
        className="flex  items-center gap-x-2 justify-start  h-16 bg-white p-5 rounded-2xl shadow-2xl
      text-gray-500 font-medium mt-6"
      >
        
          <img
            className="rounded-full border w-11 h-11    shadow-sm"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt=""
          />
        
        <div className="flex flex-grow ">
          <input
            className="h-10 w-full px-10 pl-10  rounded-fully rounded-full bg-gray-100 focus:outline-none "
            type="text"
            placeholder="Start a post..."
          />
        </div>
        <div className="flex items-center justify-center">
          <PhotographIcon className="h-8 mt-1" />
          <span className=" Photo/Video  " onClick={selectMedia} >
          {" "}
          Photo/Video</span>
        </div>
      </div>
      </div>
    
  );
}

