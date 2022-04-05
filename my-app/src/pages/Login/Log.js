import react from "react";
import { useState } from "react";
import { toast } from "react-toastify";

function Log() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.terget.name]: e.target.value,
  //   }))
  // }

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-2.5/5 p-5 bg-white rounded-2xl rounded-br-2xl py-36 px-12">
              <h1 className="text-xl text-slate-600 mb-6">
                Enter Your details and start your journey with us
              </h1>

              <p className="text-sm text-slate-400 mb-10">
                Dont't stop unit you're proud
              </p>

              <a
                href="#"
                className="border-2 border-pink-400 text-pink-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-pink-400 hover:text-white"
              >
                Sign in with Google
              </a>
            </div>

            <section>
              <form onSubmit={onSubmit}>
                <div className="w-4/5 p-5 white-500 rounded-2xl rounded-br-2xl py-36 px-12">
                  <div className="">
                    <h2 className="text-l text-slate-500 font-bold  ">
                      Login To Your Account
                    </h2>

                    <div className="flex flex-col items- center mb 10">
                      <label
                        className="block text-md mb-2"
                        for="Username"
                      ></label>
                      <input
                        className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                        type="text"
                        id="email"
                        name="email"
                        // value={email}
                        // onChange = {onchange}
                        placeholder="TTN Username"
                        required
                      />
                      <label
                        className="block text-md mb-2"
                        for="password"
                      ></label>
                      <input
                        className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                        type="password"
                        name="Password"
                        // value={password}
                        // onchange = {onchange}
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mb-3"
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                        />
                        <label className="ml-2 block text-sm text-gray-900 mb-3">
                          {/* // htmlFor="remember-me" > */}
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </div>
                    <div className="topping">
                      <button className="border-2 border-blue-400 text-blue-400 rounded-full px-8 py-2 inline-block font-semibold hover:bg-blue-400 hover:text-white">
                        Sign In
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
