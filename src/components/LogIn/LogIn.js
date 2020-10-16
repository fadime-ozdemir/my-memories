import React from 'react'
import { auth } from "../../firebaseConfig";
import { FirebaseAuth } from "react-firebaseui"
import { Redirect } from "react-router-dom"

export default function LogIn({ user, setUser }) {
  const [isSignedIn, setIsSignedIn] = React.useState(false)

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      auth.GoogleAuthProvider.PROVIDER_ID,
      auth.FacebookAuthProvider.PROVIDER_ID,
      // auth.TwitterAuthProvider.PROVIDER_ID,
      // auth.GithubAuthProvider.PROVIDER_ID,
      auth.EmailAuthProvider.PROVIDER_ID,
      // auth.PhoneAuthProvider.PROVIDER_ID,

    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };
  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setIsSignedIn(!user)
    })
  }, [])
  return (
    <div>
      {isSignedIn ? <Redirect to={{ pathname: "/" }} /> :
        <div>
          <h2 className="title">Sign In</h2>
          <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
        </div>
      }
    </div>
  )
}
