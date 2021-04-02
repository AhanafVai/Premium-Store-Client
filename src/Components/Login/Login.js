import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { FaGooglePlusG } from "react-icons/fa";

import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";

const Login = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const GoogleSignIn = () => {
    const GProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(GProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signInUser = { name: displayName, email };
        setLoggedInUser(signInUser);
        history.replace(from);
        console.log(signInUser);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="mx-auto my-5" style={{ width: "200px" }}>
      <div className="card  text-center" style={{ width: "18rem" }}>
        <div className="card-body">
          <h2>Continue with Google account</h2>
          <button onClick={GoogleSignIn} className="btn btn-dark m-5">
            Sign-in Google
            <span style={{ marginLeft: "5px" }}>
              <FaGooglePlusG />
            </span>
          </button>
          <p className="text-start" style={{ color: "#999999" }}>
            To continue, Google will share your name, email address, language
            preference, and profile picture with our site.Visit our site for
            more info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
