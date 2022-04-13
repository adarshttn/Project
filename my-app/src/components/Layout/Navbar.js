import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserCircleIcon, ChatIcon, LogoutIcon } from "@heroicons/react/outline";
import { useContext } from 'react';
import './Navbar.css'
import {AuthContext} from "../../context/AuthContext"


function Navbar() {
  let info = JSON.parse(localStorage.getItem("user"))
  const {user} =useContext(AuthContext);
  const navigate = useNavigate()

  console.warn(info)
  function logOut() {
    localStorage.clear();
    navigate('/')
  }
  return (
    <>
      <body>

        <nav class="bg-white shadow-lg">
          <div class="  px-4">
            <div class="flex justify-between ">
              <div class="flex space-x-5">
                <a href="#" class="flex items-center py-4 px-2">
                  <img src="logo.png" alt="Logo" class="h-6 w-8 mr-0 float-left" />
                </a>
              </div>
              <div class="flex gap-2  right-0 mt-3 mr-3 text-lg" >
                <div>
                  <span>{user.username}</span>
                </div>
                <div>
                  <a >
                    <ChatIcon className="h-8 " />
                  </a>
                </div>
                <div className=' dropdown '>
                  <button className="rounded-full bg-blue-50">
                    <UserCircleIcon className="h-8 " />
                  </button>
                  
                  <button className='gap-2' onClick={logOut}>
                    <LogoutIcon className="h-8 " />
                  </button>
                
                </div>
              </div>
            </div>
          </div>
        </nav>
      </body>
    </>
  )
}

export default Navbar
