import react from 'react';

 function log() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
    
    <>
    <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>

          <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
            <div className="w-2.5/5 p-5 bg-white rounded-2xl rounded-br-2xl py-36 px-12">
              <h1 className="text-xl text-slate-600 mb-6">Enter Your details and start
              your journey with us</h1>
              
              <p className='text-sm text-slate-400 mb-10'>Dont't stop unit you're proud</p>
              
              <a href="#"className='border-2 border-pink-400 text-pink-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-pink-400 hover:text-white'>Sign in with Google</a>

            </div>
            <div className="w-4/5 p-5 white-500 rounded-2xl rounded-br-2xl py-36 px-12">
              <div className="">
                <h2 className="text-l text-slate-500 font-bold  ">Login To Your Account</h2>

                <div className='flex flex-col items- center mb 10'>
                <label class="block text-md mb-2" for="Username"></label>
                <input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="text" placeholder="TTN Username" />
                <label class="block text-md mb-2" for="password"></label>
                <input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="Password" placeholder="Password" />
                
                </div>
                <div class="flex justify-between">
              <div>
                <input class="cursor-pointer" type="radio" name="rememberme" />
                <span class="text-sm">Remember Me</span>
              </div>
              <span class="text-sm text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
            </div>
                <div className="topping">
                   
                   <a href="#"className='border-2 border-blue-400 text-blue-400 rounded-full px-8 py-2 inline-block font-semibold hover:bg-blue-400 hover:text-white'>Sign In </a>
                </div>
              </div>

            </div>
          
          </div>

    </main>
    </>
    </div>
    
  )
}
export default log