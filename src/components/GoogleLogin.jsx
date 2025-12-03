import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLoginMutation } from "../services/quizApi";
const LoginWithGoogle = () => {
  
    const [googleLogin] = useGoogleLoginMutation()
    async function handleLogin(creadential){

        
    const userInfo = await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{
    headers:{
    Authorization:`Bearer ${creadential.access_token}`
    }
    }).then((res)=>{
    return res.json()
    }).then((data)=>{
    return data
    })
    googleLogin(userInfo)
    }


  const login = useGoogleLogin({
    onSuccess: handleLogin,
    onError:(e)=>{console.log("Google Login Error",e)}
  });
  return (
    <div className="flex items-center gap-1">
      <button onClick={() => login()}>Sign in with Google </button>
      <div className="text-2xl">
        <FcGoogle />
      </div>
    </div>
  );
};

export default LoginWithGoogle;
