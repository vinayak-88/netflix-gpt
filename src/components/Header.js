import React from "react";
import { NETFLIX_LOGO, photoURL } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


export const Header = () => {
  const location = useLocation();
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

  const isBrowsePage = location.pathname === '/browse';

  return (
    <div className="relative">
      <img
        src={NETFLIX_LOGO}
        className={`absolute z-20 top-2  ${isBrowsePage ? 'left-16' : 'left-40'} ${isBrowsePage ? 'w-32' : 'w-48'}`}
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
