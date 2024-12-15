import React from "react";
import { photoURL, USER_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div>
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        className="w-48 absolute top-2 left-40"
        alt="logo"
      />
      <img className="absolute right-20 top-4 w-10" src={photoURL} alt="userIcon" />
      {user && (
        <button onClick={handleSignOut} className="font-bold absolute right-6 top-4">
          Sign out
        </button>
      )}
    </div>
  );
};
