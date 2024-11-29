import React, { useState } from "react";
import { Header } from "./Header";
import { Login_BG } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div
      className="bg-cover w-full h-screen bg-center flex justify-center items-center relative"
      style={{ backgroundImage: `url(${Login_BG})` }}
    >
      {/* overlay effect */}
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>

      {/*Header*/}
      <Header />

      {/*Login Form div*/}
      <div className="w-[30%] bg-black bg-opacity-80 z-10">
        {/* Login form*/}
        <form className="m-16 px-4">
          <h2 className="text-3xl font-bold text-white my-6">{isSignIn?"Sign In" : "Sign Up"}</h2>

          {!isSignIn && <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            className="bg-transparent border border-gray-600 text-gray-800 h-14 w-full rounded p-4 mb-4"
          />}
          <input
            type="text"
            placeholder="Email Address"
            id="email"
            name="email"
            className="bg-transparent border border-gray-600 text-gray-800 h-14 w-full rounded p-4 mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            className="bg-transparent border border-gray-600 text-gray-800 h-14 w-full rounded p-4 mb-4"
          />
          <button
            type="submit"
            className="text-white h-10 font-semibold bg-red-600 w-full rounded"
          >
            {isSignIn?"Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-100 text-lg text-center my-4">OR</p>
          <button
            type="submit"
            className="bg-gray-400 font-semibold rounded bg-opacity-20 w-full h-11 text-white"
          >
            Use a sign-in code
          </button>
          <div className="text-center my-4 text-white">
            <a href="https://www.facebook.com">Forgot password?</a>
          </div>
          <p className="text-gray-400">
            {isSignIn?"New to Netflix?":"Already Registered?"}
            <span
              className="text-white font-semibold hover:underline ml-1"
              onClick={toggleSignInForm}
            >
              {isSignIn?"Sign Up now":"Sign In now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
