import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import Home from "../home/Home";
import react from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, Navigate } from "react-router-dom";
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {authentication} from './../../firebase-config/firebase-config'

function Log() {
  const email = useRef();
  const password = useRef();
 
  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  
  };  

  console.log(user)
 

  const SignInWithFirebase = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      }); 
    }

      return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl  grid grid-cols-5  max-w-4xl">
            <div className="col-span-2 p-5 bg-white rounded-2xl rounded-br-2xl py-36 px-12">
              <div className="flex items-center justify-center ">
                <img className="w-20 h-15 mb-7 " src="logo.png" alt="" />
              </div>
              <h1 className="text-xl text-slate-600 mb-6">
                Enter Your details and start your journey with us
              </h1>

              <p className="text-sm text-slate-400 mb-10">
                Dont't stop unit you're proud
              </p>

              <button
                
                className="border-2 border-pink-400 text-pink-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-pink-400 hover:text-white"
                onClick={SignInWithFirebase}
              >
                Sign in with Google
              </button>
            </div>

            <section className="col-span-3">
              <form onSubmit={handleClick}>
                <div className="w-4/5 p-5 white-500 rounded-2xl rounded-br-2xl py-36 px-12">
                  <div className="">
                    <h2 className="text-l text-slate-500 font-bold  ">
                      Login To Your Account
                    </h2>

                    <div className="flex flex-col items- center mb 10">
                      <div className="border-b border-black-500 mt-3">
                        <input
                          className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none appearance-none border-none"
                          type="text"
                          id="email"
                          name="email"
                          ref={email}

                          placeholder="TTN Username"
                          required
                        />
                      </div>
                      <div className="border-b border-black-500 mt-2">
                        <input
                          className="px-4 w-full border-2 py-2  appearance-none border-none  rounded-md text-sm outline-none"
                          type="password"
                          name="Password"
                          ref={password}

                          placeholder="Password"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center  mb-3 mt-3">
                        <input
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded "
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                        />
                        <label className="ml-2 block text-sm text-gray-900  ">
                          {/* // htmlFor="remember-me" > */}
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm ">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </div>
                    <div className="topping">
                      {/* <a  href="/home">
                      Sign In


                      </a> */}
                      {/* <Link className="border-2 border-blue-400 text-blue-400 rounded-full px-8 py-2 inline-block font-semibold hover:bg-blue-400 hover:text-white"type="submit" disabled={isFetching} to="/home"> Sign In</Link> */}

                      <button className ="border-2 border-blue-400 text-blue-400 rounded-full px-8 py-2 inline-block font-semibold hover:bg-blue-400 hover:text-white" type="submit" 
   
                       >
                        
                        Login


                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
export default Log;
