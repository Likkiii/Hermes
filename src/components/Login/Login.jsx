import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div class="flex items-center justify-center min-h-screen">
      <div classname="">
        <div className="header">HERMES</div>
        <div>
          <form action="">
            <div>
              <i class="fas fa-user"></i>
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username..."
                class="border-2 w-full px-4 py-2 focus:outline-none"
              />
            </div>
            <div>
              <i class="fa-solid fa-key"></i>
              <label>Password</label>
              <input
                type="text"
                placeholder="Enter your password..."
                class="border-2 w-full px-5 py-2 focus:outline-none"
              />
            </div>
            <div>
              <button class="border-2 border-color-black w-full px-6 py-2">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
