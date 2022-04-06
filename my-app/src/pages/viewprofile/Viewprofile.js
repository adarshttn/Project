import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Rightbar2 from "../../components/rightbar2/Rightbar2";

export default function Viewprofile() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3  bg-slate-200 h-screen gap-10 ">
        <div className="  col-span-2 gap-10 ">
          <div className="ml-10 mt-10 rounded-md shadow-xl  ">
            <div className="rounded-md shadow-xl w-100%  bg-white h-96 ">
              <img
                src="https://media.istockphoto.com/photos/wide-angle-shot-of-beautiful-reflections-in-colby-lake-during-a-late-picture-id1321208044?b=1&k=20&m=1321208044&s=170667a&w=0&h=EgtB83NWrU_o67dIetfmTH5UEe2MtT2zmabaoLwVh8o="
                className="w-full h-32 rounded-sm shadow-sl"
              />
              <div className="flex justify-left -mt-5 ml-5">
                <img
                  src="https://randomuser.me/api/portraits/women/81.jpg"
                  className="rounded  border-solid border-white border-2 -mt-3 w-20 h-20"
                />
              </div>
              <div className=" px-3 pb-6 pt-2">
                <h2 className="text-Black text-3xl bold font-sans">
                  Sarah Wood
                </h2>
                <p className="">
                  Sarah wood is co-founder and COO of video ad tech company
                </p>
                <p className="mt-2 font-sans font-light text-black">
                  London . England . United Kingdom . 234 friend
                </p>
              </div>
              <div className="flex  pb-3 ml-5">
                <div className="text-center mr-3 pr-3">
                  <button className="flex gap-1 border-2 border-blue-400 bg-[#1da1f2] hover:bg-[#048ae3] text-white  py-2 px-4 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                    <p>Add friend</p>
                  </button>
                </div>
                <div className="text-center mr-3 pr-3 ">
                  
                  <button className="flex gap-1 bg-white border-2 border-blue-400 hover:text-white hover:bg-[#048ae3] text-[#1da1f2]   py-2 px-4 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                    Visit Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-1 flex mt-10  ">
          <Rightbar2 />
        </div>
      </div>
    </>
  );
}
