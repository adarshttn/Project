import React from "react";
import "./Sidebar1.css";

export default function Sidebar1() {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl w-64 my-3 bg-white">
      <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
      <div className="flex justify-center -mt-5">
        <img
          src="https://randomuser.me/api/portraits/women/81.jpg"
          className="rounded-full  border-solid border-white border-2 -mt-3"
        />
      </div>
      <div className="text-center px-3 pb-6 pt-2">
        <h2 className="text-Black text-xl bold font-sans">Disha Agrwal</h2>
        <p className="mt-2 font-sans font-light text-black">
          Newly Recruit at TTN
        </p>
      </div>
      <div className="flex justify-center pb-3 text-black">
        <div className="text-center mr-3 border-r pr-3">
          
          <a href="/home/viewprofile/profile">Edit profile</a>
          
        </div>
        <div className="text-center">
         
          <a href="/home/viewprofile">Add Friend </a>
        </div>
      </div>
    </div>
  );
}
