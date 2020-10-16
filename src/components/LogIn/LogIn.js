import React from 'react'
import { auth } from "../../firebaseConfig";
import { FirebaseAuth } from "react-firebaseui"

export default function LogIn({uiConfig}) {

  return (
    <div>
      <h2 className="title">Sign In</h2>
      <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
    </div>
  )
}
