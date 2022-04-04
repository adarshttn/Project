import React from 'react'

function Navbar() {
  return (
    <>
      <body>

        <nav class="bg-white shadow-lg">
          <div class="max-w-6xl  px-4">
            <div class="flex justify-between">
              <div class="flex space-x-5">
                <a href="#" class="flex items-center py-4 px-2">
                  <img src="/images/ttnlogo.jpeg" alt="Logo" class="h-8 w-8 mr-0 float-left" />

                </a>

              </div>

              <div class="absolute flex items-center space-x-2 right-0 top-2" >

                <a href="#" class="p-2 rounded-full bg-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-200"
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
                </a>
                <span>Shekhar Agarwal</span>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />



                  </svg>
                </a>
                <a href="#">

                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="#cbd5e1">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />



                  </svg>
                </a>

              </div>
            </div>
          </div>
        </nav>
      </body>

    </>
  )
}

export default Navbar
