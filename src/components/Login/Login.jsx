import React from "react";
import "../Signup/Signup.css";
import neon from "../../assets/neon.jpg";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div class="flex items-center justify-center min-h-screen">
      <img className="neon relative" src={neon} alt="neon" />
      <div className="box absolute flex flex-col">
        <div className="header flex justify-center font-bold text-5xl text-slate-900 rounded-t-lg px-8 py-1">
          HERMES
        </div>
        <div class="flex px-8 py-6 text-left shadow-lg rounded-b-lg bg-slate-900">
          <form action="">
            <div class="mt-4">
              <div>
                <i class="text-green-600 fas fa-user"></i>
                <label
                  class="block"
                  className="text-green-500 pl-2"
                  for="Username"
                >
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username..."
                  class="border-b-2 w-full px-4 py-2 text-white mt-2 border-green-600 bg-slate-900 focus:outline-none"
                />
              </div>
              <div class="mt-4">
                <i class="text-green-600 fa-solid fa-key hover"></i>
                <label className=" text-green-500 pl-2">Password</label>
                <input
                  type="text"
                  placeholder="Enter your password..."
                  class="w-full px-4 py-2 mt-2 text-white border-b-2 focus:outline-none border-green-600 bg-slate-900"
                />
              </div>
              <div class="flex">
                <button class="btn w-full px-6 py-2 mt-4 text-gray-300 font-semibold text-md rounded-lg">
                  Login
                </button>
              </div>
              <div class="mt-6 text-gray-300">
                Don't have an account?
                <Link to="/"
                className="text-green-500 hover:underline pl-2">
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
