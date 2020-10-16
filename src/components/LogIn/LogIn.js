import React from 'react'
import firebase from "../../firebaseConfig";

export default function LogIn({user, setUser}) {
 
    const [password, setPassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [hasAccount, setHasAccount] = React.useState(false);
  
    const clearInputs = () => {
      setPassword("");
      setEmail("");
    };
  
    const clearErrMessages = () => {
      setPasswordError("");
      setEmailError("");
    };
    const handleLogIn = () => {
      clearErrMessages();
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
          // Handle Errors here.
          switch (error.code) {
            case "auth/invalid-email":
            case "auth/user-not-found":
              setEmailError(error.message);
              break;
            case "auth/wrong-password":
              setPasswordError(error.message);
              break;
            default:
              setEmailError("unknown error");
              setPasswordError("unknown error");
          }
          })
    };
  
    const handleSignUp = () => {
      clearErrMessages();
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
          // Handle Errors here.
          switch (error.code) {
            case "auth/invalid-email":
            case "auth/email-already-in-use":
              setEmailError(error.message);
              break;
            case "auth/weak-password":
              setPasswordError(error.message);
              break;
            default:
              setEmailError("unknown error");
              setPasswordError("unknown error");
          }
        });
    };
  
    const handleLogOut = () => {
      firebase.auth().signOut();
      console.log("hasAccountHandleButton", hasAccount)
    };
  
    const authListener = () => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          clearInputs();
          setUser(user);
        } else {
          setUser("");
        }
      });
    };
    console.log("hasAccount", hasAccount);
    const showLogIn =()=>{
      console.log("hi")
    }
    React.useEffect(() => {
      authListener();
    }, []);
  
    return (
        <div>
        <label>Email:</label>
        <input 
        type="text"
        autoFocus
        required
        value={email}
        onChange={e=>setEmail(e.target.value)}
        />
        <p>{emailError}</p>
        <label>Password:</label>
        <input 
        type="text"
        autoFocus
        required
        value={password}
        onChange={e=>setPassword(e.target.value)}
        />
        <p>{passwordError}</p>
        <div className="buttons">
            {
                hasAccount?(
                    <>
                    <button onClick={handleLogIn}>Sign In</button>
                    <p>İf you haven't an account, <span onClick={setHasAccount(!hasAccount)}>Sign Up</span></p>
                    </>
                ):(
                    <>
                    <button onClick={handleSignUp}>Sign Up</button>
                    <p>If you have an account, <span onClick={setHasAccount(!hasAccount)}>Sign In</span></p>
                    </>
                )
            }
        </div>
    </div>
    )
}
