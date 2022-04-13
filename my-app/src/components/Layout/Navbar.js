import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  let info = JSON.parse(localStorage.getItem("user"))
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
                  <span>Shekhar Agarwal</span>
                </div>
                <div>
                  <a >
                    <svg
                      xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </a>
                </div>
                <div className=' dropdown '>
                  <button className="rounded-full bg-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 text-gray-200"
                      fill="bg-[url()]"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </button>
                  
                  <button className='gap-2' onClick={logOut}>
                    LogOut
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
