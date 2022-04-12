import React, { useState } from "react";
import './Login.css'
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [photo,setPhoto]=useState("");
    const dispatch=useDispatch();

    const register=()=>{
        if(!name){
            return alert("Please enter a full name")
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:photo
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    photoUrl:photo,
                    displayName:name
                }))
            })
        }).catch((error)=>alert(error))
    };
    const loginApp=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                photoUrl:userAuth.user.photoURL,
                displayName:userAuth.user.displayName,
            }))
        }).catch((error)=>alert(error ))
    }
  return (
    <div className="login">
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png" alt="login-logo" />
        <form>
            <input type="text" placeholder="Full Name(Required If Registering)" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Profile Pic URL" value={photo} onChange={(e)=>setPhoto(e.target.value)}/>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit" onClick={loginApp}>Sign In</button>
        </form>
        <p>Not A Member?
            <span className="login-register" onClick={register}>Register Now</span>
        </p>
    </div>
  )
}
export default Login