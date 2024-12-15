import React, { useRef, useState } from "react";
import { Header } from "./Header";
import { Login_BG, photoURL } from "../utils/constants";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    //Validate form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: photoURL,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "- " + errorMessage);
          // ..
        });
    } else {
      //Sign In logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("User not found");
        });
    }
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
        <form className="m-16 px-4 peer:" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-3xl font-bold text-white my-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              className="bg-transparent border border-gray-600 text-gray-800 h-14 w-full rounded p-4 mb-4"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            id="email"
            name="email"
            className="bg-transparent border border-gray-600 text-gray-800 h-14 w-full rounded p-4 mb-4 hover:bg-gray-100 "
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            className="bg-transparent border border-gray-600 text-gray-800 h-14 w-full rounded p-4 mb-4 hover:bg-gray-100"
          />
          {errorMessage && (
            <p className="text-red-600 shadow-md mb-4 font-semibold">
              {errorMessage}
            </p>
          )}
          <button
            type="submit"
            className="text-white h-10 font-semibold bg-red-600 w-full rounded"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
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
            {isSignInForm ? "New to Netflix?" : "Already Registered?"}
            <span
              className="text-white font-semibold hover:underline ml-1"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign Up now" : "Sign In now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
