import React from "react";
import { NETFLIX_LOGO, photoURL } from "../utils/constants";
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
        src={NETFLIX_LOGO}
        className="w-48 absolute top-2 left-40"
        alt="logo"
      />
      {user && <img className="absolute right-20 top-4 w-10" src={photoURL} alt="userIcon" />}
      {user && (
        <button onClick={handleSignOut} className="font-bold absolute right-6 top-4">
          Sign out
        </button>
      )}
    </div>
  );
};
