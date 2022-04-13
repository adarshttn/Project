import React from "react";
import Navbar from "../../components/Layout/Navbar";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3  bg-slate-200   ">
        <div className="  col-span-2 gap-10 ">
          <div className="ml-10 mt-10 rounded-md shadow-xl  ">
            <div className="rounded-md shadow-xl w-100%  bg-white h-screen ">
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
              </div>

              <div>
                <form className="w-full max-w-lg ml-10">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name"
                      >
                        Last Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>

                    <div className="w-full md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name"
                      >
                        Designation
                      </label>
                      <div className="relative">
                        <select
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                        >
                          <option>founder</option>
                          <option>Co-founder</option>
                          <option>TL</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name"
                      >
                        My Website
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="sample.com"
                      />
                    </div>

                    <div className="w-full md:w-1/2 px-3 mt-3  ">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name"
                      >
                        Gender
                      </label>
                      <div className="flex gap-5 appearance-none  w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <button className="bg-blue-300 p-2 rounded text-xm pl-4 pr-4 font-medium">
                          Male
                        </button>
                        <button className="bg-pink-300 p-2 rounded text-xm font-medium">
                          Female
                        </button>
                      </div>
                      {/* <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id=""
                      type="button"
                      placeholder=""/> */}
                    </div>

                    <div className="w-full md:w-1/2 px-3 mt-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name"
                      >
                        Birthday
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="date"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-city"
                      >
                        City
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="text"
                        placeholder="Noida"
                      />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-state"
                      >
                        State
                      </label>
                      <div className="relative">
                        <select
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                        >
                          <option>Up</option>
                          <option>Bihar</option>
                          <option>Jharkhand</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-zip"
                      >
                        Zip
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-zip"
                        type="text"
                        placeholder="201001"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row mt-8 gap-6">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      Save
                    </button>

                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Reset All
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
