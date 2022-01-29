import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "./features/userSlice"
import { auth } from "./firebase"
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [profilePic, setProfilePic] = useState("")

  const dispatch = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth?.user.email,
          uid: userAuth?.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        })
      )
    }).catch((error) => alert(error))
  }

  const register = () => {
    if (!name) {
      return alert("Please enter a full name")
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth?.user.email,
                uid: userAuth?.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            )
          })
      })
      .catch((error) => alert(error))
  }
  return (
    <div className="login">
      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Full Name"
          required
        />
        <input
          onChange={(e) => setProfilePic(e.target.value)}
          value={profilePic}
          type="text"
          placeholder="Profile Pic URL"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  )
}

export default Login
