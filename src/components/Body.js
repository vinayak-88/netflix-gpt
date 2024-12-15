import React, { useEffect } from "react";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  /*
  onauthstatechanged is attached to authentication state of a user.as soon as the authentication state is changed, 
  the onauthstatechanged is triggered and it executes a callback function and where it checks if user is null or not.
  if user is null the dispatch action is executed where it removes the user from appstore and navigates it to login page(/) 
  and if it is not null (i.e. user just signed in) then it adds the user in appstore and navigates it to browse page(/browse).
  */

  return (
    <div className="m-0 p-0">
      <Login />
    </div>
  );
};

export default Body;
